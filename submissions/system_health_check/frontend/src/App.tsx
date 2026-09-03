import { useState } from 'react'
import { styles } from './styles'
import { Dashboard } from './dashboard/Dashboard'
import { Recommendations } from './recommendations/Recommendations'
import { ReportView } from './report/ReportView'

type Tab = 'dashboard' | 'recommendations' | 'report'

const TABS: { id: Tab; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'recommendations', label: 'Recomendações' },
  { id: 'report', label: 'Relatório' },
]

export function App() {
  const [tab, setTab] = useState<Tab>('dashboard')

  return (
    <div className="shc-root">
      <style>{styles}</style>
      <div className="shc-header">
        <h2>System Health Check</h2>
        <p>Hardware, métricas e recomendações de melhoria para este computador.</p>
      </div>
      <div className="shc-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={`shc-tab ${tab === t.id ? 'shc-tab--active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'dashboard' && <Dashboard />}
      {tab === 'recommendations' && <Recommendations />}
      {tab === 'report' && <ReportView />}
    </div>
  )
}
