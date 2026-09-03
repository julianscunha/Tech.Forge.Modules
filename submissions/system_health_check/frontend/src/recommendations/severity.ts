import type { Recommendation } from '../types'

export function severityLabel(severity: Recommendation['severity']): string {
  if (severity === 'critical') return 'Crítico'
  if (severity === 'warning') return 'Atenção'
  return 'Info'
}

export function severityClass(severity: Recommendation['severity']): string {
  return `shc-severity shc-severity--${severity}`
}
