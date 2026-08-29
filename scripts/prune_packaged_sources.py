"""Remove source folders already packaged into modules/index.json.

Runs after `techforge catalog build-index modules --output modules`. Keeps
modules/ lean as the catalog grows: only the built .mod + index.json remain
on main after a merge. A contributor updating a module resubmits the full
source folder in a new PR; the next CI run repackages and prunes it again.
"""
from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path

MODULES_DIR = Path("modules")
INDEX_FILE = MODULES_DIR / "index.json"


def main() -> int:
    if not INDEX_FILE.exists():
        print(f"{INDEX_FILE} not found — nothing to prune.")
        return 0

    index_data = json.loads(INDEX_FILE.read_text(encoding="utf-8"))
    packaged_ids = {entry["id"] for entry in index_data.get("modules", [])}

    for module_id in packaged_ids:
        src_dir = MODULES_DIR / module_id
        if src_dir.is_dir():
            shutil.rmtree(src_dir)
            print(f"Pruned source folder: {src_dir}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
