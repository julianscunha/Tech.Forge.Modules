"""Remove submissions/ source folders already packaged into modules/index.json.

Runs after `techforge catalog build-index submissions --output modules`.
submissions/<id>/ is transitory and disjoint from modules/ (the CI-owned,
persistent per-module folder that accumulates .mod history) — so once a
submission is packaged, its whole folder can be deleted safely, without any
risk of touching a previously-published .mod. A contributor updating a
module resubmits the full source folder in a new PR; the next CI run
repackages (as a new version, alongside the old ones in modules/<id>/) and
prunes submissions/ again.
"""
from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path

SUBMISSIONS_DIR = Path("submissions")
INDEX_FILE = Path("modules") / "index.json"


def main() -> int:
    if not INDEX_FILE.exists():
        print(f"{INDEX_FILE} not found — nothing to prune.")
        return 0

    index_data = json.loads(INDEX_FILE.read_text(encoding="utf-8"))
    packaged_ids = {entry["id"] for entry in index_data.get("modules", [])}

    for module_id in packaged_ids:
        src_dir = SUBMISSIONS_DIR / module_id
        if src_dir.is_dir():
            shutil.rmtree(src_dir)
            print(f"Pruned submission: {src_dir}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
