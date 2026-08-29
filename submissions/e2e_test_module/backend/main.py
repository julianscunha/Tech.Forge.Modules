from fastapi import APIRouter
from techforge_sdk.contracts import ModuleContract

router = APIRouter()

@router.get("/ping")
async def ping():
    return {"status": "ok"}

module = ModuleContract(module_id="e2e_test_module")
