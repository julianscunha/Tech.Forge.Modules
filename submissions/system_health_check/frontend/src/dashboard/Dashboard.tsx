import { useEffect, useState } from 'react'
import { fetchDashboard, isUnavailable } from '../api'
import type { Dashboard as DashboardData, Unavailable } from '../types'
import { formatBytes, formatPercent } from '../format'
import { Gauge } from './Gauge'

type State =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'unavailable'; data: Unavailable }
  | { status: 'ok'; data: DashboardData }

export function Dashboard() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false
    fetchDashboard()
      .then((data) => {
        if (cancelled) return
        setState(isUnavailable(data) ? { status: 'unavailable', data } : { status: 'ok', data })
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ status: 'error', message: err.message })
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (state.status === 'loading') return <div className="shc-empty">Carregando…</div>
  if (state.status === 'error') return <div className="shc-error">{state.message}</div>
  if (state.status === 'unavailable') return <div className="shc-error">{state.data.message}</div>

  const { hardware, metrics, services, drivers, updates, checked_at } = state.data
  const runningCount = services.filter((s) => s.status === 'Running').length

  return (
    <div className="shc-dashboard">
      <div className="shc-gauges">
        <Gauge label="CPU" percent={metrics.cpu_percent} />
        <Gauge label="RAM" percent={metrics.ram_percent} />
        {metrics.disks.map((disk) => (
          <Gauge key={disk.mountpoint} label={disk.mountpoint} percent={disk.used_percent ?? 0} />
        ))}
      </div>

      <div className="shc-cards">
        <div className="shc-card">
          <p className="shc-card-title">Processador</p>
          <p className="shc-card-value">{hardware.cpu_model}</p>
          <p className="shc-card-sub">
            {hardware.physical_cores} núcleos físicos · {hardware.logical_cores} lógicos
          </p>
        </div>

        <div className="shc-card">
          <p className="shc-card-title">Memória</p>
          <p className="shc-card-value">{formatBytes(hardware.ram_total_bytes)}</p>
          <p className="shc-card-sub">{formatPercent(metrics.ram_percent)} em uso agora</p>
        </div>

        <div className="shc-card">
          <p className="shc-card-title">Discos</p>
          {hardware.disks.map((disk) => (
            <p key={disk.mountpoint} className="shc-card-sub">
              {disk.mountpoint} — {formatBytes(disk.total_bytes ?? 0)} ({disk.filesystem})
            </p>
          ))}
        </div>

        <div className="shc-card">
          <p className="shc-card-title">Serviços</p>
          <p className="shc-card-value">{runningCount} em execução</p>
          <p className="shc-card-sub">{services.length} instalados no total</p>
        </div>

        <div className="shc-card">
          <p className="shc-card-title">Drivers</p>
          <p className="shc-card-value">{drivers.length} instalados</p>
        </div>

        <div className="shc-card">
          <p className="shc-card-title">Windows Update</p>
          <p className="shc-card-value">
            {updates.last_hotfix_date
              ? new Date(updates.last_hotfix_date).toLocaleDateString()
              : 'Sem dados'}
          </p>
          <p className="shc-card-sub">{updates.hotfix_count} hotfixes instalados</p>
        </div>
      </div>

      <p className="shc-checked-at">Última leitura: {new Date(checked_at).toLocaleString()}</p>
    </div>
  )
}
