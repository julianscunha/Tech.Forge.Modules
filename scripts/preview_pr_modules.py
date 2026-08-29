#!/usr/bin/env python3
"""
Gera o corpo de um comentário de PR mostrando exatamente como a seção
de módulos do README vai ficar depois do merge — reusa a mesma lógica
de renderização de generate_modules_readme.py (nenhuma regra duplicada),
só imprime em vez de escrever no arquivo. Usado pelo workflow
validate-modules.yml pra dar feedback imediato ao contribuidor sobre o
que vai aparecer publicamente (inclusive se a description ficou ruim).

Diferente do gerador real: este script roda em tempo de PR, antes do
merge — o módulo que a PR está propondo ainda vive em submissions/<id>/
(transitório), não em modules/index.json (só reflete o que já foi
publicado). Por isso o preview combina as duas fontes: o catálogo já
publicado (index.json) + o que esta PR está adicionando/atualizando em
submissions/ — o segundo sobrepõe o primeiro por id, simulando como o
catálogo vai ficar depois que a CI processar o merge.
"""
from __future__ import annotations

import sys
from pathlib import Path

import yaml

sys.path.insert(0, str(Path(__file__).resolve().parent))
from generate_modules_readme import END_MARKER, START_MARKER, render_section, scan_published_modules  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
SUBMISSIONS_DIR = ROOT / "submissions"


def scan_submission_modules() -> list[dict]:
    """Lê manifest.yaml de cada pasta em submissions/ — conteúdo desta PR."""
    modules = []
    if not SUBMISSIONS_DIR.is_dir():
        return modules

    for mod_dir in sorted(SUBMISSIONS_DIR.iterdir()):
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
            "path": str(raw.get("id", mod_dir.name)),
        })
    return modules


def merged_preview_modules() -> list[dict]:
    """Catálogo já publicado + o que esta PR propõe, PR sobrepondo por id."""
    merged = {m["id"]: m for m in scan_published_modules()}
    merged.update({m["id"]: m for m in scan_submission_modules()})
    return list(merged.values())


def main() -> None:
    modules = merged_preview_modules()
    section = render_section(modules)
    # Os marcadores só importam pra substituição no arquivo README.md —
    # num comentário de PR são só ruído visual pra quem está lendo.
    section = section.replace(START_MARKER, "").replace(END_MARKER, "").strip()

    print("### 📦 Preview — como isso vai aparecer no README depois do merge\n")
    print(section)
    print(
        "\n_Gerado automaticamente a partir do catálogo publicado + dos "
        "`manifest.yaml` desta PR — confira se a descrição do seu módulo "
        "ficou clara antes de pedir revisão._"
    )


if __name__ == "__main__":
    main()
