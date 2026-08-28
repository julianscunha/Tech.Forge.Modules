#!/usr/bin/env python3
"""
Gera a seção "Módulos disponíveis" do README.md a partir dos manifests
reais em modules/*/manifest.yaml — agrupada por categoria, sempre
retraída (<details>) para o README continuar legível conforme o
catálogo cresce (pensado para escalar até milhares de módulos).

Uso:
    python scripts/generate_modules_readme.py

Roda automaticamente via GitHub Actions (.github/workflows/
update-modules-readme.yml) sempre que um manifest.yaml muda.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
MODULES_DIR = ROOT / "modules"
README = ROOT / "README.md"

START_MARKER = "<!-- MODULES:START -->"
END_MARKER = "<!-- MODULES:END -->"


def scan_modules() -> list[dict]:
    """Lê manifest.yaml de cada pasta em modules/ — ignora pastas sem manifest
    ou com YAML inválido (não deve travar o workflow por um manifest quebrado)."""
    modules = []
    if not MODULES_DIR.is_dir():
        return modules

    for mod_dir in sorted(MODULES_DIR.iterdir()):
        manifest_path = mod_dir / "manifest.yaml"
        if not mod_dir.is_dir() or not manifest_path.is_file():
            continue
        try:
            raw = yaml.safe_load(manifest_path.read_text(encoding="utf-8")) or {}
        except yaml.YAMLError as exc:
            print(f"WARNING: skipping {manifest_path} — invalid YAML: {exc}", file=sys.stderr)
            continue

        modules.append({
            "id": str(raw.get("id", mod_dir.name)),
            "name": str(raw.get("name", raw.get("id", mod_dir.name))),
            "category": str(raw.get("category") or "Uncategorized"),
            "description": str(raw.get("description", "")).strip(),
            "path": mod_dir.name,
        })
    return modules


def render_section(modules: list[dict]) -> str:
    if not modules:
        return f"{START_MARKER}\n_Nenhum módulo publicado ainda._\n{END_MARKER}"

    by_category: dict[str, list[dict]] = {}
    for m in modules:
        by_category.setdefault(m["category"], []).append(m)

    lines = [
        START_MARKER,
        "",
        f"**{len(modules)} módulo(s)** em **{len(by_category)} categoria(s)**. "
        "Clique numa categoria pra ver os módulos dentro dela.",
    ]

    for category in sorted(by_category, key=str.lower):
        mods = sorted(by_category[category], key=lambda m: m["id"])
        lines.append("")
        lines.append("<details>")
        lines.append(f"<summary><strong>{category}</strong> — {len(mods)} módulo(s)</summary>")
        lines.append("")
        lines.append("| Módulo | O que faz |")
        lines.append("|---|---|")
        for m in mods:
            lines.append(f"| [`{m['id']}`](modules/{m['path']}) | {m['description']} |")
        lines.append("")
        lines.append("</details>")

    lines.append("")
    lines.append(END_MARKER)
    return "\n".join(lines)


def update_readme(section: str) -> bool:
    content = README.read_text(encoding="utf-8")
    pattern = re.compile(re.escape(START_MARKER) + r".*?" + re.escape(END_MARKER), re.DOTALL)

    if not pattern.search(content):
        raise SystemExit(
            f"README.md missing {START_MARKER} / {END_MARKER} markers — "
            "add them where the module list should be generated."
        )

    new_content = pattern.sub(lambda _: section, content)
    if new_content == content:
        return False

    README.write_text(new_content, encoding="utf-8")
    return True


def main() -> None:
    modules = scan_modules()
    section = render_section(modules)
    changed = update_readme(section)
    print(f"Scanned {len(modules)} module(s). README {'updated' if changed else 'unchanged'}.")


if __name__ == "__main__":
    main()
