#!/usr/bin/env python3
"""Parse independent SVG assets and enforce meaningful accessibility metadata."""
from pathlib import Path
from xml.etree import ElementTree as ET
root = Path(__file__).resolve().parents[1]
files = sorted((root/'assets'/'svg').glob('*.svg'))
assert len(files) >= 7, f'expected 7 or more diagrams, found {len(files)}'
for file in files:
    tree = ET.parse(file)
    svg = tree.getroot()
    assert svg.tag == '{http://www.w3.org/2000/svg}svg', file
    assert svg.get('viewBox'), file
    assert svg.get('role') == 'img', file
    title = svg.find('{http://www.w3.org/2000/svg}title')
    desc = svg.find('{http://www.w3.org/2000/svg}desc')
    assert title is not None and (title.text or '').strip(), file
    assert desc is not None and (desc.text or '').strip(), file
    ids = [e.attrib['id'] for e in svg.iter() if 'id' in e.attrib]
    assert len(ids) == len(set(ids)), f'duplicate SVG IDs: {file}'
    assert svg.get('aria-labelledby'), file
print(f'SVG XML/accessibility checks passed: {len(files)} files')
