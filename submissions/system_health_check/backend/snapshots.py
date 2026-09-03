"""Persistência de antes/depois de cada `apply` — via `sdk.database`
(SQLite isolado do módulo, Fase System Health §6). `db` é qualquer objeto
com a interface de `techforge_sdk.database.DatabaseSDK` (injetável nos
testes com um `DatabaseSDK` real apontando pra um `tmp_path`, sem mock)."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from typing import Any


async def _ensure_schema(db: Any) -> None:
    await db.execute(
        """
        CREATE TABLE IF NOT EXISTS snapshots (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            recommendation_id TEXT NOT NULL,
            applied_at TEXT NOT NULL,
            before_json TEXT NOT NULL,
            after_json TEXT NOT NULL
        )
        """
    )


async def record(db: Any, recommendation_id: str, before: dict, after: dict) -> int:
    """Grava o par antes/depois de um `apply` e devolve o id do snapshot."""
    await _ensure_schema(db)
    applied_at = datetime.now(timezone.utc).isoformat()
    await db.execute(
        "INSERT INTO snapshots (recommendation_id, applied_at, before_json, after_json) "
        "VALUES (?, ?, ?, ?)",
        [recommendation_id, applied_at, json.dumps(before), json.dumps(after)],
    )
    row = await db.fetch_one("SELECT id FROM snapshots ORDER BY id DESC LIMIT 1")
    return row["id"]


async def list_snapshots(db: Any) -> list[dict]:
    """Todos os snapshots gravados, mais antigo primeiro (usado pelo /report)."""
    await _ensure_schema(db)
    rows = await db.fetch_all("SELECT * FROM snapshots ORDER BY id ASC")
    return [
        {
            "id": row["id"],
            "recommendation_id": row["recommendation_id"],
            "applied_at": row["applied_at"],
            "before": json.loads(row["before_json"]),
            "after": json.loads(row["after_json"]),
        }
        for row in rows
    ]
