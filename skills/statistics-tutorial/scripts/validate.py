#!/usr/bin/env python3
"""Static checks for chapter semantics, local assets, SVGs and metadata."""
from __future__ import annotations
import argparse, json, sys
from pathlib import Path
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[3]
CATALOG = json.loads((ROOT / "courses.json").read_text(encoding="utf-8"))
ERRORS: list[str] = []

def fail(message: str) -> None:
    ERRORS.append(message)

def check_local_url(page: Path, value: str, label: str) -> None:
    if not value or value.startswith(("#", "mailto:", "tel:", "javascript:")):
        return
    parsed = urlparse(value)
    if parsed.scheme in ("http", "https", "data"):
        return
    target = (page.parent / parsed.path).resolve()
    if not target.exists():
        fail(f"{page.relative_to(ROOT)}: broken {label}: {value}")

def validate_chapter(chapter: dict) -> None:
    path = ROOT / chapter["file"]
    if not path.exists():
        fail(f"missing chapter file: {chapter['file']}")
        return
    soup = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")
    rel = path.relative_to(ROOT)
    if len(soup.find_all("h1")) != 1:
        fail(f"{rel}: expected exactly one h1")
    for landmark in ("main", "article", "aside", "nav"):
        if not soup.find(landmark):
            fail(f"{rel}: missing {landmark} landmark")
    if not soup.find("figure") or not soup.find("figcaption"):
        fail(f"{rel}: missing figure/figcaption")
    img = soup.select_one(".concept-figure img")
    if not img or not img.get("alt", "").strip():
        fail(f"{rel}: concept figure needs meaningful alt text")
    elif img.get("src"):
        svg_path = (path.parent / img["src"]).resolve()
        if not svg_path.exists():
            fail(f"{rel}: missing SVG asset {img['src']}")
        else:
            try:
                svg = ET.parse(svg_path).getroot()
                tags = [node.tag.rsplit("}", 1)[-1] for node in svg]
                if svg.tag.rsplit("}", 1)[-1] != "svg" or "title" not in tags or "desc" not in tags:
                    fail(f"{rel}: SVG requires root svg, title and desc")
            except ET.ParseError as exc:
                fail(f"{rel}: invalid SVG XML: {exc}")
    lab = soup.select_one('[data-lab]')
    if not lab or lab.get("data-lab") != chapter["num"] or not lab.select_one(".lab-mount"):
        fail(f"{rel}: missing chapter-specific interactive lab mount")
    if not soup.select_one(".chapter-summary") or not soup.select_one(".caveat"):
        fail(f"{rel}: missing takeaway or method caveat")
    if not soup.select_one(".references a[href]"):
        fail(f"{rel}: missing references")
    if not soup.select_one("meta[name=viewport]"):
        fail(f"{rel}: missing responsive viewport metadata")
    for tag, attr in (("a", "href"), ("img", "src"), ("script", "src"), ("link", "href")):
        for node in soup.find_all(tag):
            if node.get(attr):
                check_local_url(path, node[attr], f"{tag}.{attr}")
    for node in soup.find_all(["script", "link"]):
        value = node.get("src") or node.get("href") or ""
        if value.startswith(("http://", "https://")) and node.name in ("script", "link"):
            fail(f"{rel}: remote runtime dependency is not allowed: {value}")
    if not soup.find("h2"):
        fail(f"{rel}: expected section headings")

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--all", action="store_true", help="validate all chapters in courses.json")
    parser.add_argument("chapters", nargs="*", help="optional chapter numbers")
    args = parser.parse_args()
    selected = CATALOG["chapters"] if args.all or not args.chapters else [c for c in CATALOG["chapters"] if c["num"] in args.chapters]
    for chapter in selected:
        validate_chapter(chapter)
    if ERRORS:
        print("\n".join("ERROR: " + e for e in ERRORS))
        print(f"{len(ERRORS)} validation error(s)")
        return 1
    print(f"validated {len(selected)} chapter(s)")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
