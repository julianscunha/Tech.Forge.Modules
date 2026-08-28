#!/usr/bin/env python3
"""
Gera o corpo de um comentário de PR mostrando exatamente como a seção
de módulos do README vai ficar depois do merge — reusa a mesma lógica
de generate_modules_readme.py (nenhuma regra duplicada), só imprime em
vez de escrever no arquivo. Usado pelo workflow validate-modules.yml
pra dar feedback imediato ao contribuidor sobre o que vai aparecer
publicamente (inclusive se a description ficou ruim).
"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from generate_modules_readme import END_MARKER, START_MARKER, render_section, scan_modules  # noqa: E402


def main() -> None:
    modules = scan_modules()
    section = render_section(modules)
    # Os marcadores só importam pra substituição no arquivo README.md —
    # num comentário de PR são só ruído visual pra quem está lendo.
    section = section.replace(START_MARKER, "").replace(END_MARKER, "").strip()

    print("### 📦 Preview — como isso vai aparecer no README depois do merge\n")
    print(section)
    print(
        "\n_Gerado automaticamente a partir dos `manifest.yaml` atuais — "
        "confira se a descrição do seu módulo ficou clara antes de pedir revisão._"
    )


if __name__ == "__main__":
    main()
