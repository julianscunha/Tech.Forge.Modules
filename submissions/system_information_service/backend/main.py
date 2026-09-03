"""
system_information_service — Backend Entry Point
=====================================================
Module    : system_information_service
Name      : System Information Service
Category  : System
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
sys.path.insert(0, str(Path(__file__).parent))

import psutil
import windows
from fastapi import APIRouter

from techforge_sdk import create_sdk
from techforge_sdk.contracts import HealthResult, ModuleContract, ModuleMetadata

sdk = create_sdk("system_information_service")

router = APIRouter(prefix="/modules/system_information_service", tags=["system_information_service"])


@router.get("/ping")
async def ping():
    sdk.logger.info("system_information_service ping called")
    return {"module": "system_information_service", "status": "ok", "version": "1.1.0"}


class SystemInformationServiceModule(ModuleContract):

    @property
    def metadata(self) -> ModuleMetadata:
        return ModuleMetadata(
            id="system_information_service",
            name="System Information Service",
            version="1.1.0",
            category="System",
            vendor="TechForge",
            author="TechForge Team",
            description="Fornece informações de sistema operacional, hardware, métricas e (no Windows) serviços/drivers/atualizações.",
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

    async def get_hardware_info(self) -> dict:
        """Inventário de hardware — CPU, RAM total e discos. Cross-platform
        via psutil (Fase System Health §1)."""
        vm = psutil.virtual_memory()
        disks = []
        for part in psutil.disk_partitions(all=False):
            try:
                usage = psutil.disk_usage(part.mountpoint)
            except OSError:
                # Unidades removíveis/sem mídia (ex: leitor de CD vazio) —
                # não deve derrubar o inventário inteiro.
                continue
            disks.append({
                "mountpoint": part.mountpoint,
                "filesystem": part.fstype,
                "total_bytes": usage.total,
            })
        info = {
            "cpu_model": platform.processor() or "unknown",
            "physical_cores": psutil.cpu_count(logical=False),
            "logical_cores": psutil.cpu_count(logical=True),
            "ram_total_bytes": vm.total,
            "disks": disks,
        }
        sdk.logger.info("get_hardware_info: %s", info)
        return info

    async def get_live_metrics(self) -> dict:
        """Leitura pontual de uso — CPU%, RAM% e disco% por unidade. Cada
        chamada é uma amostra nova, nunca cacheada (Fase System Health §1).
        `cpu_percent(interval=0.1)` bloqueia ~100ms de propósito — sem
        intervalo, a primeira leitura do processo sempre retorna 0.0."""
        vm = psutil.virtual_memory()
        disks = []
        for part in psutil.disk_partitions(all=False):
            try:
                usage = psutil.disk_usage(part.mountpoint)
            except OSError:
                continue
            disks.append({"mountpoint": part.mountpoint, "used_percent": usage.percent})
        info = {
            "cpu_percent": psutil.cpu_percent(interval=0.1),
            "ram_percent": vm.percent,
            "disks": disks,
        }
        sdk.logger.info("get_live_metrics: %s", info)
        return info

    async def get_windows_services(self) -> list[dict]:
        """Lista serviços do Windows (nome, status, tipo de início). Lista
        vazia fora do Windows (Fase System Health §2)."""
        services = windows.list_services()
        sdk.logger.info("get_windows_services: %d serviços", len(services))
        return services

    async def get_windows_drivers(self) -> list[dict]:
        """Lista drivers assinados instalados. Lista vazia fora do Windows."""
        drivers = windows.list_drivers()
        sdk.logger.info("get_windows_drivers: %d drivers", len(drivers))
        return drivers

    async def get_windows_update_status(self) -> dict:
        """Data do último hotfix instalado e contagem total."""
        status = windows.update_status()
        sdk.logger.info("get_windows_update_status: %s", status)
        return status

    async def apply_service_action(self, name: str, action: str) -> dict:
        """Para ou inicia um serviço whitelisted (windows.SAFE_TO_MANAGE).
        Único export mutável dos dois módulos — recomendações apenas leem,
        a aplicação de fato passa sempre por aqui (Fase System Health §3)."""
        result = windows.apply_service_action(name, action)
        sdk.logger.info("apply_service_action: %s", result)
        return result

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
