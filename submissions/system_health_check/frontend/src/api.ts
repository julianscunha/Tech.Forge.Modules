import type { ApplyResult, Dashboard, Recommendation, Report, Unavailable } from './types'

const BASE = '/api/v1/modules/system_health_check'

async function friendlyError(resp: Response): Promise<string> {
  try {
    const data = await resp.json()
    return data.detail ?? 'Falha ao processar a solicitação.'
  } catch {
    return 'Falha ao processar a solicitação.'
  }
}

export function isUnavailable(payload: unknown): payload is Unavailable {
  return typeof payload === 'object' && payload !== null && (payload as { status?: string }).status === 'unavailable'
}

export async function fetchDashboard(): Promise<Dashboard | Unavailable> {
  const resp = await fetch(`${BASE}/dashboard`)
  if (!resp.ok) throw new Error(await friendlyError(resp))
  return resp.json()
}

export async function fetchRecommendations(): Promise<{ recommendations: Recommendation[] } | Unavailable> {
  const resp = await fetch(`${BASE}/recommendations`)
  if (!resp.ok) throw new Error(await friendlyError(resp))
  return resp.json()
}

export async function applyRecommendation(id: string): Promise<ApplyResult> {
  const resp = await fetch(`${BASE}/recommendations/${encodeURIComponent(id)}/apply`, { method: 'POST' })
  if (!resp.ok) throw new Error(await friendlyError(resp))
  return resp.json()
}

export async function fetchReport(): Promise<Report> {
  const resp = await fetch(`${BASE}/report`)
  if (!resp.ok) throw new Error(await friendlyError(resp))
  return resp.json()
}
