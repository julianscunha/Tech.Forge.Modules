"""snapshots.py — DatabaseSDK real (aiosqlite) apontando pra tmp_path, sem
mock (mesmo padrão de isolamento usado nos outros módulos)."""
import asyncio

from _shc_loader import load_backend_main

main = load_backend_main()  # insere sdk/python no sys.path como efeito colateral
snapshots = main.snapshots

from techforge_sdk.database import DatabaseSDK  # noqa: E402


def _db(tmp_path):
    return DatabaseSDK(module_id="system_health_check_test", data_dir=tmp_path)


def test_record_and_list_round_trip(tmp_path):
    db = _db(tmp_path)

    async def run():
        snap_id = await snapshots.record(db, "stop-service-Fax", {"ram_percent": 90}, {"ram_percent": 40})
        assert isinstance(snap_id, int)
        rows = await snapshots.list_snapshots(db)
        assert len(rows) == 1
        assert rows[0]["recommendation_id"] == "stop-service-Fax"
        assert rows[0]["before"] == {"ram_percent": 90}
        assert rows[0]["after"] == {"ram_percent": 40}
        assert "applied_at" in rows[0]

    asyncio.run(run())


def test_multiple_snapshots_ordered_oldest_first(tmp_path):
    db = _db(tmp_path)

    async def run():
        await snapshots.record(db, "first", {}, {})
        await snapshots.record(db, "second", {}, {})
        rows = await snapshots.list_snapshots(db)
        assert [r["recommendation_id"] for r in rows] == ["first", "second"]

    asyncio.run(run())


def test_list_snapshots_empty_when_none_recorded(tmp_path):
    db = _db(tmp_path)
    assert asyncio.run(snapshots.list_snapshots(db)) == []
