import { useCallback, useEffect, useState } from 'react'
import { applyRecommendation, fetchRecommendations, isUnavailable } from '../api'
import type { Recommendation } from '../types'
import { severityClass, severityLabel } from './severity'

type ListState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'unavailable'; message: string }
  | { status: 'ok'; items: Recommendation[] }

// Por recomendação: idle (sem ação) → confirming (pediu confirmação, ainda
// não chamou a API) → applying (chamada em voo) → done (sucesso, mostra
// resultado) → error (falhou, mostra a mensagem e deixa tentar de novo).
type ApplyState =
  | { phase: 'idle' }
  | { phase: 'confirming' }
  | { phase: 'applying' }
  | { phase: 'done' }
  | { phase: 'error'; message: string }

export function Recommendations() {
  const [list, setList] = useState<ListState>({ status: 'loading' })
  const [applyStates, setApplyStates] = useState<Record<string, ApplyState>>({})

  const load = useCallback(() => {
    setList({ status: 'loading' })
    fetchRecommendations()
      .then((data) => {
        if (isUnavailable(data)) {
          setList({ status: 'unavailable', message: data.message })
        } else {
          setList({ status: 'ok', items: data.recommendations })
        }
      })
      .catch((err: Error) => setList({ status: 'error', message: err.message }))
  }, [])

  useEffect(() => {
    load()
  }, [load])

  function requestConfirm(id: string) {
    setApplyStates((prev) => ({ ...prev, [id]: { phase: 'confirming' } }))
  }

  function cancelConfirm(id: string) {
    setApplyStates((prev) => ({ ...prev, [id]: { phase: 'idle' } }))
  }

  async function confirmApply(id: string) {
    setApplyStates((prev) => ({ ...prev, [id]: { phase: 'applying' } }))
    try {
      await applyRecommendation(id)
      setApplyStates((prev) => ({ ...prev, [id]: { phase: 'done' } }))
      load()
    } catch (err) {
      setApplyStates((prev) => ({ ...prev, [id]: { phase: 'error', message: (err as Error).message } }))
    }
  }

  if (list.status === 'loading') return <div className="shc-empty">Carregando…</div>
  if (list.status === 'error') return <div className="shc-error">{list.message}</div>
  if (list.status === 'unavailable') return <div className="shc-error">{list.message}</div>
  if (list.items.length === 0) {
    return <div className="shc-empty">Nenhuma recomendação no momento — sistema em bom estado.</div>
  }

  return (
    <ul className="shc-rec-list">
      {list.items.map((rec) => {
        const applyState = applyStates[rec.id] ?? { phase: 'idle' }
        return (
          <li key={rec.id} className="shc-rec">
            <div className="shc-rec-header">
              <span className={severityClass(rec.severity)}>{severityLabel(rec.severity)}</span>
              <span className="shc-rec-title">{rec.title}</span>
            </div>
            <p className="shc-rec-desc">{rec.description}</p>

            {rec.actionable && applyState.phase === 'idle' && (
              <button className="shc-btn" onClick={() => requestConfirm(rec.id)}>
                Aplicar
              </button>
            )}
            {applyState.phase === 'confirming' && (
              <div className="shc-rec-confirm">
                <span>Confirmar esta ação?</span>
                <button className="shc-btn shc-btn--primary" onClick={() => confirmApply(rec.id)}>
                  Confirmar
                </button>
                <button className="shc-btn" onClick={() => cancelConfirm(rec.id)}>
                  Cancelar
                </button>
              </div>
            )}
            {applyState.phase === 'applying' && <span className="shc-rec-status">Aplicando…</span>}
            {applyState.phase === 'done' && <span className="shc-rec-status">Aplicado ✓</span>}
            {applyState.phase === 'error' && <span className="shc-error">{applyState.message}</span>}
          </li>
        )
      })}
    </ul>
  )
}
