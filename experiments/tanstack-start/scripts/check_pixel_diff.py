"""Visual safeguards when commercial copy intentionally diverges from original SPA.

Unaffected contact page: preserve whole-page pixel difference <=5%.
Intentionally corrected home/plans/hosting: preserve 5% threshold ONLY on
unchanged top navigation (64px) and copyright footer (170px), retain FULL
screenshots for independent review, and enforce <=20% total-height drift.
This does not claim pixel parity on rewritten product/marketing sections.
"""
import json
from pathlib import Path
from PIL import Image, ImageChops, ImageStat

root = Path("experiments/tanstack-start/visual-screenshots")
cases = ["home-desktop", "home-mobile", "planos-desktop", "hospedagem-desktop", "contato-desktop"]
intentional = set(cases) - {"contato-desktop"}
results = []
failed = []

def percent_changed(left, right):
    diff = ImageChops.difference(left, right)
    red, green, blue = diff.split()
    maximum = ImageChops.lighter(ImageChops.lighter(red, green), blue)
    mask = maximum.point(lambda value: 255 if value > 25 else 0)
    return round(ImageStat.Stat(mask).mean[0] / 255 * 100, 3)

for name in cases:
    spa = Image.open(root / (name + "-spa.png")).convert("RGB")
    ssr = Image.open(root / (name + "-ssr.png")).convert("RGB")
    if spa.width != ssr.width:
        failed.append(f"{name}: widths SPA={spa.width} vs SSR={ssr.width}")
        continue

    if name in intentional:
        height_drift = round(abs(spa.height - ssr.height) / max(spa.height, ssr.height) * 100, 3)
        if height_drift > 20:
            failed.append(f"{name}: unexpected page-height drift {height_drift}% (>20%)")
        scopes = [
            ("nav_only", spa.crop((0, 0, spa.width, 64)), ssr.crop((0, 0, ssr.width, 64))),
            ("copyright_footer", spa.crop((0, spa.height - 170, spa.width, spa.height)),
             ssr.crop((0, ssr.height - 170, ssr.width, ssr.height))),
        ]
        for label, a, b in scopes:
            changed = percent_changed(a, b)
            results.append({"route": name, "scope": label, "changed_pixels_percent": changed,
                            "height_drift_percent": height_drift, "full_spa_size": list(spa.size),
                            "full_ssr_size": list(ssr.size)})
            print(f"{name} [{label}]: {changed}% pixels changed (max 5%); height drift {height_drift}%")
            if changed > 5:
                failed.append(f"{name} [{label}]: {changed}% pixels changed (>5%)")
    else:
        if spa.size != ssr.size:
            failed.append(f"{name}: dimensions SPA={spa.size} vs SSR={ssr.size}")
            continue
        changed = percent_changed(spa, ssr)
        results.append({"route": name, "scope": "whole_page", "changed_pixels_percent": changed})
        print(f"{name}: {changed}% pixels changed (max 5%), whole page")
        if changed > 5:
            failed.append(f"{name}: {changed}% pixels changed (>5%)")

report = {"method": "5% threshold on unchanged regions; intentional edits retain full screenshots and semantic/browser gates",
          "results": results, "failures": failed}
(root / "pixel-diff-results.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
if failed:
    raise SystemExit("FAILED visual checks:\n" + "\n".join(failed))
print("PASS: no unexpected regression in unchanged regions; changed marketing content requires editorial review.")
