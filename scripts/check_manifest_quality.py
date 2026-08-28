#!/usr/bin/env python3
"""
Checagem extra de qualidade do manifest.yaml — complementa (não
substitui) o validador oficial do Core (`techforge validate-module`).
O Core só exige que o campo `description` exista; esta checagem
rejeita description vazia, curta demais, ou um placeholder óbvio —
é o `description` que vira a linha do módulo no README gerado
automaticamente (`generate_modules_readme.py`), então precisa dizer
algo de verdade.
"""
from __future__ import annotations

import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
MODULES_DIR = ROOT / "modules"

MIN_DESCRIPTION_LENGTH = 15
PLACEHOLDER_VALUES = {
    "todo", "tbd", "descreva aqui", "description here", "fill me in",
    "wip", "n/a", "-", "...",
}


def check_module(mod_dir: Path) -> list[str]:
    manifest_path = mod_dir / "manifest.yaml"
    if not manifest_path.is_file():
        return []  # techforge validate-module ja cobre manifest ausente

    try:
        raw = yaml.safe_load(manifest_path.read_text(encoding="utf-8")) or {}
    except yaml.YAMLError as exc:
        return [f"manifest.yaml inválido: {exc}"]

    description = str(raw.get("description", "")).strip()
    errors = []
    if not description:
        errors.append("description vazia")
    elif len(description) < MIN_DESCRIPTION_LENGTH:
        errors.append(
            f"description muito curta ({len(description)} caracteres, "
            f"mínimo {MIN_DESCRIPTION_LENGTH}) — escreva o que o módulo realmente faz"
        )
    elif description.lower().strip(". ") in PLACEHOLDER_VALUES:
        errors.append(f"description parece um placeholder: {description!r}")

    return errors


def main() -> int:
    if not MODULES_DIR.is_dir():
        return 0

    failed = False
    for mod_dir in sorted(MODULES_DIR.iterdir()):
        if not mod_dir.is_dir():
            continue
        for err in check_module(mod_dir):
            print(f"::error file=modules/{mod_dir.name}/manifest.yaml::{err}")
            failed = True

    if failed:
        print("\nQualidade do manifest.yaml reprovada — corrija a description antes de mesclar.")
        return 1

    print("Qualidade dos manifests OK.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
