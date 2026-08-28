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
 * Service Registry (ver docs/contracts/api.yaml).
 */
import type { ModulePageConfig } from '../../../sdk/frontend/src/contracts/index'

export const moduleConfig: ModulePageConfig = {
  moduleId:    "system_information_service",
  title:       "System Information Service",
  icon:        "cpu",
  category:    "System",
  vendor:      "TechForge",
  route:       "/modules/system_information_service",
  description: "Fornece informações do sistema operacional e do runtime.",
}

export default function SystemInformationServicePage() {
  return null
}
