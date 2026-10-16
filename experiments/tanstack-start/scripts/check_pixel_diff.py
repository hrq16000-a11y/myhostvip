"""Screenshot diff gate for SPA vs SSR captured by Chromium in the same runner.

Fail on canvas dimension mismatches or >5% of pixels changed by more than
25/255 in any RGB channel. Small anti-alias/font rendering changes are allowed.
"""
import json
from pathlib import Path
from PIL import Image, ImageChops, ImageStat

root = Path("experiments/tanstack-start/visual-screenshots")
cases = ["home-desktop", "home-mobile", "planos-desktop", "hospedagem-desktop", "contato-desktop"]
results = []
failed = []

for name in cases:
    left = Image.open(root / (name + "-spa.png")).convert("RGB")
    right = Image.open(root / (name + "-ssr.png")).convert("RGB")
    if left.size != right.size:
        failed.append(f"{name}: dimensions SPA={left.size} vs SSR={right.size}")
        continue
    delta = ImageChops.difference(left, right)
    r, g, b = delta.split()
    max_channel = ImageChops.lighter(ImageChops.lighter(r, g), b)
    mask = max_channel.point(lambda value: 255 if value > 25 else 0)
    percent = round(ImageStat.Stat(mask).mean[0] / 255 * 100, 3)
    results.append({"route": name, "resolution": list(left.size), "changed_pixels_percent": percent})
    print(f"{name}: {percent:.3f}% changed pixels (threshold 5%)")
    if percent > 5:
        failed.append(f"{name}: visual pixel delta {percent:.3f}% > 5%")

report = {"method": "max RGB channel >25/255; all screenshots full-page", "results": results, "failures": failed}
(root / "pixel-diff-results.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
if failed:
    raise SystemExit("FAILED visual parity:\n" + "\n".join(failed))
print("PASS: visual regression check for 5 SPA vs SSR screenshots.")
