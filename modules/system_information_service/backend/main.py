"""
system_information_service — Backend Entry Point
=====================================================
Module    : system_information_service
Name      : System Information Service
Category  : Examples
Vendor    : TechForge
Icon      : cpu
Order     : 10

Módulo de referência publicado no catálogo externo Tech.Forge.Modules —
demonstra um Service Module simples, sem UI obrigatória, consumível por
outros módulos via Service Registry. Usa somente a biblioteca padrão do
Python (sem dependências novas).
"""
import os
import platform
import socket
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent.parent.parent.parent / "sdk" / "python"))

from fastapi import APIRouter
from techforge_sdk import create_sdk
from techforge_sdk.contracts import ModuleContract, ModuleMetadata, HealthResult

sdk = create_sdk("system_information_service")

router = APIRouter(prefix="/modules/system_information_service", tags=["system_information_service"])


@router.get("/ping")
async def ping():
    sdk.logger.info("system_information_service ping called")
    return {"module": "system_information_service", "status": "ok", "version": "1.0.0"}


class SystemInformationServiceModule(ModuleContract):

    @property
    def metadata(self) -> ModuleMetadata:
        return ModuleMetadata(
            id="system_information_service",
            name="System Information Service",
            version="1.0.0",
            category="Examples",
            vendor="TechForge",
            author="TechForge Team",
            description="Fornece informações do sistema operacional e do runtime.",
            platform_min_version="1.0.0",
            platform_max_version="2.0.0",
        )

    async def get_system_info(self) -> dict:
        """Informações gerais do sistema operacional e da máquina."""
        info = {
            "operating_system": platform.system(),
            "os_version": platform.version(),
            "os_release": platform.release(),
            "hostname": socket.gethostname(),
            "architecture": platform.machine(),
        }
        sdk.logger.info("get_system_info: %s", info)
        return info

    async def get_cpu_info(self) -> dict:
        """Contagem de núcleos lógicos de CPU."""
        info = {"logical_cores": os.cpu_count()}
        sdk.logger.info("get_cpu_info: %s", info)
        return info

    async def get_runtime_info(self) -> dict:
        """Informações do runtime Python que executa o Core."""
        info = {
            "python_version": platform.python_version(),
            "python_implementation": platform.python_implementation(),
        }
        sdk.logger.info("get_runtime_info: %s", info)
        return info

    async def install(self) -> None:
        sdk.logger.info("system_information_service install()")

    async def enable(self) -> None:
        sdk.logger.info("system_information_service enable()")

    async def disable(self) -> None:
        sdk.logger.info("system_information_service disable()")

    async def upgrade(self, from_version: str) -> None:
        sdk.logger.info("system_information_service upgrade() from %s", from_version)

    async def health_check(self) -> HealthResult:
        return HealthResult.ok("system_information_service is healthy.")

    async def uninstall(self) -> None:
        sdk.logger.info("system_information_service uninstall()")
        sdk.settings.reset()


module = SystemInformationServiceModule()
