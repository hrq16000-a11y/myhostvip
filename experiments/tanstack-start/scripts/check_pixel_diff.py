"""Regression gate for Chromium SPA vs SSR captures.

All routes except the home must retain exactly the same full-page canvas and
remain under 5% changed pixels. The home was INTENTIONALLY edited to replace
unverified testimonials with genuine buyer guidance. For that page we still:
- enforce identical width and a <=1% total-height change;
- compare both unaffected ends (first 1,300px and last 1,000px) at the SAME
  5% pixel threshold; and
- save the full screenshots for manual inspection; browser assertions confirm
  the intended new editorial content.

This is not a visual approval of the rewritten middle editorial section.
"""
import json
from pathlib import Path
from PIL import Image, ImageChops, ImageStat

root = Path("experiments/tanstack-start/visual-screenshots")
cases = ["home-desktop", "home-mobile", "planos-desktop", "hospedagem-desktop", "contato-desktop"]
results = []
failed = []

def percent_changed(left, right):
    diff = ImageChops.difference(left, right)
    r, g, b = diff.split()
    maximum = ImageChops.lighter(ImageChops.lighter(r, g), b)
    mask = maximum.point(lambda value: 255 if value > 25 else 0)
    return round(ImageStat.Stat(mask).mean[0] / 255 * 100, 3)

for name in cases:
    spa = Image.open(root / (name + "-spa.png")).convert("RGB")
    ssr = Image.open(root / (name + "-ssr.png")).convert("RGB")
    if spa.width != ssr.width:
        failed.append(f"{name}: widths SPA={spa.width} vs SSR={ssr.width}")
        continue

    if name.startswith("home-"):
        height_drift = round(abs(spa.height - ssr.height) / max(spa.height, ssr.height) * 100, 3)
        if height_drift > 1:
            failed.append(f"{name}: unexpected page height drift {height_drift}% (>1%)")
        sections = [
            ("unchanged_top", spa.crop((0, 0, spa.width, 1300)), ssr.crop((0, 0, ssr.width, 1300))),
            ("unchanged_bottom", spa.crop((0, spa.height - 1000, spa.width, spa.height)),
             ssr.crop((0, ssr.height - 1000, ssr.width, ssr.height))),
        ]
        for label, a, b in sections:
            pct = percent_changed(a, b)
            results.append({"route": name, "scope": label, "changed_pixels_percent": pct,
                            "height_drift_percent": height_drift, "full_spa_size": list(spa.size),
                            "full_ssr_size": list(ssr.size)})
            print(f"{name} [{label}]: {pct}% changed pixels (max 5%); height drift {height_drift}% (max 1%)")
            if pct > 5:
                failed.append(f"{name} [{label}]: {pct}% changed pixels (>5%)")
    else:
        if spa.size != ssr.size:
            failed.append(f"{name}: dimensions SPA={spa.size} vs SSR={ssr.size}")
            continue
        pct = percent_changed(spa, ssr)
        results.append({"route": name, "scope": "whole_page", "changed_pixels_percent": pct,
                        "dimensions": list(spa.size)})
        print(f"{name}: {pct}% changed pixels (max 5%), whole page")
        if pct > 5:
            failed.append(f"{name}: {pct}% changed pixels (>5%)")

report = {
    "method": "RGB max-channel delta >25/255; same 5% pixel gate; home editorial replacement scoped explicitly",
    "results": results,
    "failures": failed,
}
(root / "pixel-diff-results.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
if failed:
    raise SystemExit("FAILED visual parity:\n" + "\n".join(failed))
print("PASS: scoped visual regression gates (unchanged regions plus whole non-home pages).")
