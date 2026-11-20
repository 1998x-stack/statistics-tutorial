# Publishing and Repository Workflow

1. Work on a focused branch; do not edit the default branch directly for large restructuring.
2. Update courses.json first when adding or moving chapters. Run the catalog builder to regenerate the JavaScript snapshot.
3. Preserve old root-level chapter URLs with redirect stubs when moving files.
4. Keep all assets local and paths relative so file:// reading continues to work.
5. Inspect the full changed-file list and representative diffs from every category.
6. Run build_catalog.py --check, pytest, static validation and Playwright browser checks.
7. Check the GitHub Actions result and deployment workflow separately. A successful static test does not prove Pages has deployed.
8. Open a PR with a clear summary, migration notes, test evidence and known limitations.
9. Merge only after review. Verify the deployed homepage and at least one chapter from each knowledge domain.
10. Update docs/content-audit.md with corrections, unresolved issues and checks actually run.
