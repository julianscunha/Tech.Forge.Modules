"""Carrega backend/main.py por caminho de arquivo (importlib), não por
`import main` — evita colisão de sys.modules["main"] com o main.py de
outros módulos (ex. system_health_check) rodando na mesma sessão pytest.
Nome do arquivo (`_si_loader.py`, não `_loader.py`) é proposital: pytest
insere cada `tests/` no sys.path sem __init__.py, então um `_loader.py`
genérico colidiria com o mesmo arquivo de outro módulo."""
from __future__ import annotations

import importlib.util
import sys
from pathlib import Path
from types import ModuleType

_BACKEND_MAIN = Path(__file__).parent.parent / "backend" / "main.py"


def load_backend_main() -> ModuleType:
    spec = importlib.util.spec_from_file_location(
        "system_information_service_backend_main", _BACKEND_MAIN
    )
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module
