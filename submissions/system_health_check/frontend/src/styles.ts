// Só os tokens de tema já definidos pelo Core (hsl(var(--...))) — sem cor
// inventada, mesma convenção de lead_tracker/frontend/src/styles.ts.
export const styles = `
.shc-root { padding: 24px; font-family: inherit; color: hsl(var(--text)); max-width: 720px; }
.shc-header { margin-bottom: 16px; }
.shc-header h2 { font-size: 15px; font-weight: 600; margin: 0 0 4px; }
.shc-header p { font-size: 11px; color: hsl(var(--text-muted)); margin: 0; }

.shc-tabs { display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid hsl(var(--border)); }
.shc-tab {
  all: unset; cursor: pointer; padding: 8px 12px; font-size: 12px; font-weight: 500;
  color: hsl(var(--text-muted)); border-bottom: 2px solid transparent;
}
.shc-tab:focus-visible { outline: 2px solid hsl(var(--accent)); outline-offset: 2px; }
.shc-tab--active { color: hsl(var(--text)); border-bottom-color: hsl(var(--accent)); }

.shc-empty { font-size: 12px; color: hsl(var(--text-muted)); padding: 24px 0; text-align: center; }
.shc-error { font-size: 12px; color: hsl(var(--danger)); padding: 12px 0; }

.shc-gauges { display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; }
.shc-gauge { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.shc-gauge-text { font-size: 13px; font-weight: 600; fill: hsl(var(--text)); }
.shc-gauge-label { font-size: 11px; color: hsl(var(--text-muted)); }

.shc-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
.shc-card { padding: 12px; border-radius: 8px; border: 1px solid hsl(var(--border)); background: hsl(var(--bg-elevated)); }
.shc-card-title { font-size: 11px; color: hsl(var(--text-muted)); margin: 0 0 4px; }
.shc-card-value { font-size: 13px; font-weight: 600; margin: 0 0 2px; word-break: break-word; }
.shc-card-sub { font-size: 11px; color: hsl(var(--text-muted)); margin: 0; }

.shc-checked-at { font-size: 10px; color: hsl(var(--text-muted)); margin-top: 16px; }

.shc-rec-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.shc-rec { padding: 12px; border-radius: 8px; border: 1px solid hsl(var(--border)); background: hsl(var(--bg-elevated)); }
.shc-rec-header { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.shc-rec-title { font-size: 12px; font-weight: 600; }
.shc-rec-desc { font-size: 11px; color: hsl(var(--text-muted)); margin: 0 0 8px; }
.shc-rec-confirm { display: flex; align-items: center; gap: 8px; font-size: 11px; color: hsl(var(--text-muted)); }
.shc-rec-status { font-size: 11px; color: hsl(var(--text-muted)); }

.shc-severity { display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight: 600; }
.shc-severity--info { background: hsl(var(--bg-subtle)); color: hsl(var(--text-muted)); border: 1px solid hsl(var(--border)); }
.shc-severity--warning { background: hsl(var(--warning) / 0.15); color: hsl(var(--warning)); }
.shc-severity--critical { background: hsl(var(--danger) / 0.15); color: hsl(var(--danger)); }

.shc-btn {
  font-size: 11px; padding: 6px 10px; border-radius: 6px; cursor: pointer;
  border: 1px solid hsl(var(--border)); background: hsl(var(--bg)); color: hsl(var(--text));
}
.shc-btn--primary { background: hsl(var(--accent)); color: hsl(var(--accent-foreground, white)); border-color: transparent; }

.shc-stat { padding: 12px; border-radius: 8px; border: 1px solid hsl(var(--border)); background: hsl(var(--bg-elevated)); }
.shc-stat-arrow { color: hsl(var(--text-muted)); }
.shc-stat-delta--good { color: hsl(var(--success)); }
.shc-stat-delta--bad { color: hsl(var(--danger)); }

.shc-report-summary { margin-top: 16px; }
.shc-report-list { list-style: none; margin: 8px 0 0; padding: 0; font-size: 11px; color: hsl(var(--text-muted)); display: flex; flex-direction: column; gap: 4px; }
`
