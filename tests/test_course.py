from __future__ import annotations
import json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATALOG = json.loads((ROOT / "courses.json").read_text(encoding="utf-8"))

def test_course_taxonomy_is_complete_and_unique():
    assert CATALOG["chapterCount"] == 28
    assert len(CATALOG["chapters"]) == 28
    assert len(CATALOG["categories"]) == 8
    nums = [c["num"] for c in CATALOG["chapters"]]
    assert nums == [f"{i:02d}" for i in range(1, 29)]
    assert len({c["file"] for c in CATALOG["chapters"]}) == 28
    assert sum(len(c["chapters"]) for c in CATALOG["categories"]) == 28

def test_chapter_metadata_and_prerequisites():
    ids = {c["num"] for c in CATALOG["chapters"]}
    for ch in CATALOG["chapters"]:
        assert ch["categoryId"] in {c["id"] for c in CATALOG["categories"]}
        assert 4 <= len(ch["tags"]) <= 8
        assert ch["summary"] and ch["takeaway"] and ch["caveat"]
        assert all(p in ids and p != ch["num"] for p in ch["prerequisites"])
        assert (ROOT / ch["file"]).exists()

def test_generated_course_snapshot_matches_source():
    proc = subprocess.run([sys.executable, str(ROOT / "skills/statistics-tutorial/scripts/build_catalog.py"), "--check"], cwd=ROOT, capture_output=True, text=True)
    assert proc.returncode == 0, proc.stdout + proc.stderr

def test_each_chapter_has_a_distinct_svg_and_lab():
    for ch in CATALOG["chapters"]:
        page = (ROOT / ch["file"]).read_text(encoding="utf-8")
        assert f'data-lab="{ch["num"]}"' in page
        assert ch["figure"] in page
        assert (ROOT / ch["figure"]).exists()
        assert "统计严谨性提醒" in page
        assert "延伸阅读与参考资料" in page

def test_legacy_urls_redirect_to_new_chapter_paths():
    for ch in CATALOG["chapters"]:
        legacy = ROOT / (ch["num"] + ".html")
        assert legacy.exists()
        content = legacy.read_text(encoding="utf-8")
        assert ch["file"] in content
