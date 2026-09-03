export interface DiskInfo {
  mountpoint: string
  filesystem?: string
  total_bytes?: number
  used_percent?: number
}

export interface HardwareInfo {
  cpu_model: string
  physical_cores: number
  logical_cores: number
  ram_total_bytes: number
  disks: DiskInfo[]
}

export interface LiveMetrics {
  cpu_percent: number
  ram_percent: number
  disks: DiskInfo[]
}

export interface WindowsService {
  name: string
  display_name: string
  status: string
  start_type: string
}

export interface WindowsDriver {
  device_name: string
  manufacturer: string
  driver_version: string
  driver_date: string
}

export interface UpdateStatus {
  last_hotfix_date: string | null
  hotfix_count: number
}

export interface Dashboard {
  hardware: HardwareInfo
  metrics: LiveMetrics
  services: WindowsService[]
  drivers: WindowsDriver[]
  updates: UpdateStatus
  checked_at: string
}

export interface Unavailable {
  status: 'unavailable'
  checks: []
  message: string
  checked_at: string
}

export interface RecommendationAction {
  type: string
  params: Record<string, string>
}

export interface Recommendation {
  id: string
  category: 'performance' | 'service' | 'update'
  severity: 'info' | 'warning' | 'critical'
  title: string
  description: string
  actionable: boolean
  action: RecommendationAction | null
}

export interface ApplyResult {
  recommendation_id: string
  snapshot_id: number
  before: Dashboard
  after: Dashboard
}

export interface ReportNoData {
  status: 'no_data'
  applied_count: 0
  message: string
}

export interface ReportOk {
  status: 'ok'
  applied_count: number
  first_applied_at: string
  last_applied_at: string
  ram_percent_before: number | null
  ram_percent_after: number | null
  ram_percent_improvement: number | null
  cpu_percent_before: number | null
  cpu_percent_after: number | null
  cpu_percent_improvement: number | null
  services_stopped: string[]
  applied_recommendations: { recommendation_id: string; applied_at: string }[]
}

export type Report = ReportNoData | ReportOk
