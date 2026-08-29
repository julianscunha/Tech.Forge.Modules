#!/usr/bin/env python3
"""
Gera a seção "Módulos disponíveis" do README.md a partir de modules/index.json
— agrupada por categoria, sempre retraída (<details>) para o README continuar
legível conforme o catálogo cresce (pensado para escalar até milhares de
módulos).

Lê modules/index.json, não submissions/**/manifest.yaml: index.json é o
registro durável de tudo que já foi publicado (mantido pela própria CI, via
`techforge catalog build-index`); submissions/<id>/ é transitório — some
assim que a CI empacota o módulo em .mod, então nunca reflete o catálogo
completo, só o que está em trânsito numa PR.

Uso:
    python scripts/generate_modules_readme.py

Roda automaticamente via GitHub Actions (.github/workflows/
update-modules-readme.yml), depois que `techforge catalog build-index` já
atualizou modules/index.json na mesma execução.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX_FILE = ROOT / "modules" / "index.json"
README = ROOT / "README.md"

START_MARKER = "<!-- MODULES:START -->"
END_MARKER = "<!-- MODULES:END -->"


def scan_published_modules() -> list[dict]:
    """Lê modules/index.json — lista vazia se ainda não existe (catálogo novo)."""
    if not INDEX_FILE.is_file():
        return []
    try:
        data = json.loads(INDEX_FILE.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"WARNING: modules/index.json inválido: {exc}", file=sys.stderr)
        return []

    return [
        {
            "id": entry["id"],
            "name": entry.get("name", entry["id"]),
            "category": entry.get("category") or "Uncategorized",
            "description": entry.get("description", "").strip(),
            "path": entry["id"],
        }
        for entry in data.get("modules", [])
    ]


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
    modules = scan_published_modules()
    section = render_section(modules)
    changed = update_readme(section)
    print(f"Scanned {len(modules)} module(s). README {'updated' if changed else 'unchanged'}.")


if __name__ == "__main__":
    main()
