// Anel de progresso SVG feito à mão — sem dependência de biblioteca de
// gráfico (decisão do plano: gauges/sparklines hand-rolled).
const SIZE = 72
const STROKE = 8
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function colorFor(percent: number): string {
  if (percent >= 90) return 'hsl(var(--danger))'
  if (percent >= 75) return 'hsl(var(--warning))'
  return 'hsl(var(--accent))'
}

interface Props {
  label: string
  percent: number
}

export function Gauge({ label, percent }: Props) {
  const clamped = Math.max(0, Math.min(100, percent))
  const offset = CIRCUMFERENCE * (1 - clamped / 100)

  return (
    <div className="shc-gauge">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth={STROKE}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={colorFor(clamped)}
          strokeWidth={STROKE}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
        />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="shc-gauge-text">
          {Math.round(clamped)}%
        </text>
      </svg>
      <span className="shc-gauge-label">{label}</span>
    </div>
  )
}
