/**
 * system_health_check — Frontend Entry Point
 * ================================================
 * Contrato do Module Host: default export com render(container).
 * React/TypeScript compilado via Vite (lib mode, ESM único) — o Core só
 * serve .js estático, não compila .tsx. moduleConfig fica aninhado no
 * default export (não como export nomeado separado) pelo mesmo motivo
 * documentado em lead_tracker/frontend/src/main.tsx: com dois exports
 * nomeados o Rollup consolida tudo num `export { x as default, y }` sem a
 * substring literal "export default" que o validador oficial procura.
 */
import { createRoot, type Root } from 'react-dom/client'
import { App } from './App'

const moduleConfig = {
  moduleId: 'system_health_check',
  title: 'System Health Check',
  icon: 'activity',
  category: 'System',
  vendor: 'TechForge',
  route: '/modules/system_health_check',
  description: 'Hardware, métricas e recomendações de melhoria de desempenho.',
}

let root: Root | null = null

function render(container: HTMLElement) {
  root = createRoot(container)
  root.render(<App />)
}

export default { render, moduleConfig }
