import { useEffect, useState } from 'react'
import { fetchReport } from '../api'
import type { Report } from '../types'

type State = { status: 'loading' } | { status: 'error'; message: string } | { status: 'ok'; data: Report }

function ImprovementStat({ label, before, after, improvement }: {
  label: string
  before: number | null
  after: number | null
  improvement: number | null
}) {
  if (before === null || after === null || improvement === null) {
    return (
      <div className="shc-stat">
        <p className="shc-card-title">{label}</p>
        <p className="shc-card-sub">Sem dado suficiente.</p>
      </div>
    )
  }
  const improved = improvement > 0
  const unchanged = improvement === 0
  const deltaClass = unchanged ? '' : improved ? 'shc-stat-delta--good' : 'shc-stat-delta--bad'
  const deltaText = unchanged ? 'sem mudança' : `${improved ? 'melhorou' : 'piorou'} ${Math.abs(improvement).toFixed(1)}%`

  return (
    <div className="shc-stat">
      <p className="shc-card-title">{label}</p>
      <p className="shc-card-value">
        {before.toFixed(0)}% <span className="shc-stat-arrow">→</span> {after.toFixed(0)}%
      </p>
      <p className={`shc-card-sub ${deltaClass}`}>{deltaText}</p>
    </div>
  )
}

export function ReportView() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false
    fetchReport()
      .then((data) => !cancelled && setState({ status: 'ok', data }))
      .catch((err: Error) => !cancelled && setState({ status: 'error', message: err.message }))
    return () => {
      cancelled = true
    }
  }, [])

  if (state.status === 'loading') return <div className="shc-empty">Carregando…</div>
  if (state.status === 'error') return <div className="shc-error">{state.message}</div>
  if (state.data.status === 'no_data') return <div className="shc-empty">{state.data.message}</div>

  const report = state.data

  return (
    <div className="shc-report">
      <div className="shc-cards">
        <ImprovementStat
          label="Memória (RAM)"
          before={report.ram_percent_before}
          after={report.ram_percent_after}
          improvement={report.ram_percent_improvement}
        />
        <ImprovementStat
          label="Processador (CPU)"
          before={report.cpu_percent_before}
          after={report.cpu_percent_after}
          improvement={report.cpu_percent_improvement}
        />
      </div>

      <div className="shc-report-summary">
        <p className="shc-card-title">Recomendações aplicadas ({report.applied_count})</p>
        <ul className="shc-report-list">
          {report.applied_recommendations.map((r) => (
            <li key={`${r.recommendation_id}-${r.applied_at}`}>
              {r.recommendation_id} — {new Date(r.applied_at).toLocaleString()}
            </li>
          ))}
        </ul>
        {report.services_stopped.length > 0 && (
          <p className="shc-card-sub">{report.services_stopped.length} serviço(s) desligado(s).</p>
        )}
      </div>

      <p className="shc-checked-at">
        Período: {new Date(report.first_applied_at).toLocaleString()} até{' '}
        {new Date(report.last_applied_at).toLocaleString()}
      </p>
    </div>
  )
}
