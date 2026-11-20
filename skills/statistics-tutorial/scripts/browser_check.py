#!/usr/bin/env python3
"""Playwright smoke tests for local-file reading, responsive layout and labs."""
from __future__ import annotations
import argparse
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[3]
CATALOG = ROOT / "courses.json"

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--output", default="reports/browser")
    args = parser.parse_args()
    data = __import__("json").loads(CATALOG.read_text(encoding="utf-8"))
    chapters = data["chapters"] if args.all else [data["chapters"][0], data["chapters"][13], data["chapters"][-1]]
    out = ROOT / args.output
    out.mkdir(parents=True, exist_ok=True)
    failures: list[str] = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        console_errors: list[str] = []
        page.on("pageerror", lambda exc: console_errors.append(str(exc)))
        index = ROOT / "index.html"
        page.goto(index.as_uri(), wait_until="load")
        page.wait_for_selector(".course-card")
        if page.locator(".course-card").count() != data["chapterCount"]:
            failures.append("catalog does not render all chapters")
        page.locator("#courseSearch").fill("贝叶斯")
        if page.locator(".course-card").count() == 0:
            failures.append("catalog search returned no Bayesian chapter")
        page.locator("#courseSearch").fill("")
        page.locator("#categoryFilter").select_option(data["categories"][0]["id"])
        if page.locator(".course-card").count() != len(data["categories"][0]["chapters"]):
            failures.append("category filter returned an unexpected chapter count")
        for chapter in chapters:
            target = ROOT / chapter["file"]
            for width in (1440, 390):
                page.set_viewport_size({"width": width, "height": 900})
                page.goto(target.as_uri(), wait_until="load")
                page.wait_for_selector(".lab-result")
                if page.locator("h1").count() != 1:
                    failures.append(f"{chapter['num']}: h1 count is not one")
                if page.locator(".concept-figure img").evaluate("(img) => !img.complete || img.naturalWidth === 0"):
                    failures.append(f"{chapter['num']}: concept SVG failed to load")
                overflow = page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 2")
                if overflow:
                    failures.append(f"{chapter['num']} at {width}px: horizontal overflow")
                control = page.locator(".lab-control input, .lab-control select").first
                before = page.locator(".lab-result").inner_text()
                if control.evaluate("(el) => el.tagName.toLowerCase() === 'select'"):
                    options = control.locator("option").all()
                    if len(options) > 1:
                        control.select_option(index=1)
                else:
                    current = float(control.input_value())
                    minimum = float(control.get_attribute("min"))
                    maximum = float(control.get_attribute("max"))
                    next_value = str(maximum if current != maximum else minimum)
                    control.evaluate("(el, value) => { el.value = value; el.dispatchEvent(new Event('input', {bubbles:true})); el.dispatchEvent(new Event('change', {bubbles:true})); }", next_value)
                after = page.locator(".lab-result").inner_text()
                if not after:
                    failures.append(f"{chapter['num']}: lab output is empty")
                if before == after and chapter["num"] not in ("02", "05", "11", "17", "23", "28"):
                    failures.append(f"{chapter['num']}: changing a control did not change the result")
                if width == 390 and chapter["num"] in ("01", "14", "28"):
                    page.screenshot(path=str(out / f"{chapter['num']}-mobile.png"), full_page=True)
        if console_errors:
            failures.extend("browser page error: " + e for e in console_errors)
        browser.close()
    if failures:
        print("\n".join("FAIL: " + f for f in failures))
        return 1
    print(f"browser smoke tests passed for {len(chapters)} chapter(s) and catalog")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
