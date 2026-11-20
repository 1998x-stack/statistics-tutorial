#!/usr/bin/env python3
"""Generate the browser-friendly catalog snapshot from courses.json."""
from __future__ import annotations
import argparse, json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
SOURCE = ROOT / "courses.json"
TARGET = ROOT / "assets" / "js" / "course-data.js"
PREFIX = "/* Generated from courses.json by skills/statistics-tutorial/scripts/build_catalog.py. */\nwindow.STATISTICS_COURSE_CATALOG = "

def expected() -> str:
    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    return PREFIX + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="fail if the generated file is stale")
    args = parser.parse_args()
    content = expected()
    if args.check:
        if not TARGET.exists() or TARGET.read_text(encoding="utf-8") != content:
            print("assets/js/course-data.js is stale; run this script without --check")
            return 1
        print("course catalog snapshot is up to date")
        return 0
    TARGET.parent.mkdir(parents=True, exist_ok=True)
    TARGET.write_text(content, encoding="utf-8")
    print(f"wrote {TARGET.relative_to(ROOT)}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
