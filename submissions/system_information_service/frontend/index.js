/**
 * system_information_service — Frontend Entry Point
 * ======================================================
 * Module : system_information_service
 * Name   : System Information Service
 * Icon   : cpu
 * Color  : teal
 * Order  : 10
 *
 * Service Module sem UI obrigatória — página mínima só de identificação,
 * a função real do módulo é ser consumido por outros módulos via
 * Service Registry (ver docs/contracts/api.yaml). JS já compilado (não
 * .tsx): o Core só serve .js/.mjs como asset de módulo (Fase 3 §11) —
 * mesmo ajuste já aplicado em hello_world (TD-006).
 */

export const moduleConfig = {
  moduleId:    "system_information_service",
  title:       "System Information Service",
  icon:        "cpu",
  category:    "System",
  vendor:      "TechForge",
  route:       "/modules/system_information_service",
  description: "Fornece informações do sistema operacional e do runtime.",
}

function render(container) {
  container.innerHTML = ''
}

export default { render }
