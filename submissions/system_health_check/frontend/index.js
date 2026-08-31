/**
 * system_health_check — Frontend Entry Point
 * ======================================================
 * Module : system_health_check
 * Name   : System Health Check
 * Icon   : activity
 * Color  : green
 *
 * Micro-frontend puro (sem framework) — o Module Host só exige um
 * default export com render(container). JS já compilado (não .tsx):
 * o Core só serve .js/.mjs como asset de módulo (Fase 3 §11), e este
 * módulo precisa de UI real, não só uma página de identificação.
 */

export const moduleConfig = {
  moduleId: 'system_health_check',
  title: 'System Health Check',
  icon: 'activity',
  category: 'System',
  vendor: 'TechForge',
  route: '/modules/system_health_check',
  description: 'Executa uma verificação simples de saúde do sistema.',
}

const API_URL = '/api/v1/modules/system_health_check/health'

function checkRow(check) {
  const row = document.createElement('div')
  row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:6px 0;font-size:13px;'
  const icon = document.createElement('span')
  icon.textContent = check.ok ? '✓' : '✗'
  icon.style.cssText = `color:${check.ok ? '#22c55e' : '#ef4444'};font-weight:600;width:16px;`
  const label = document.createElement('span')
  label.textContent = `${check.name} — ${check.message}`
  row.appendChild(icon)
  row.appendChild(label)
  return row
}

function render(container) {
  container.innerHTML = ''
  container.style.cssText = 'font-family:inherit;padding:4px 0;max-width:420px;'

  const button = document.createElement('button')
  button.textContent = 'Run Health Check'
  button.style.cssText =
    'padding:6px 14px;border-radius:6px;border:none;background:#16a34a;' +
    'color:white;font-size:13px;font-weight:500;cursor:pointer;'

  const result = document.createElement('div')
  result.style.cssText = 'margin-top:16px;'

  button.addEventListener('click', async () => {
    button.disabled = true
    button.textContent = 'Checking…'
    result.innerHTML = ''
    try {
      const resp = await fetch(API_URL)
      const data = await resp.json()

      if (data.status === 'unavailable') {
        const msg = document.createElement('div')
        msg.style.cssText = 'color:#f59e0b;font-size:13px;padding:8px 0;'
        msg.textContent = data.message || 'System Information Service is required.'
        result.appendChild(msg)
      } else {
        data.checks.forEach((check) => result.appendChild(checkRow(check)))
        const footer = document.createElement('div')
        footer.style.cssText = 'margin-top:8px;font-size:11px;color:#888;'
        footer.textContent = `Status: ${data.status} — Last Check: ${new Date(data.checked_at).toLocaleString()}`
        result.appendChild(footer)
      }
    } catch (err) {
      const msg = document.createElement('div')
      msg.style.cssText = 'color:#ef4444;font-size:13px;padding:8px 0;'
      msg.textContent = `Health check failed: ${err}`
      result.appendChild(msg)
    } finally {
      button.disabled = false
      button.textContent = 'Run Health Check'
    }
  })

  container.appendChild(button)
  container.appendChild(result)
}

export default { render }
