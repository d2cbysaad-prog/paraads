const row1 = [
  { label: 'Amount Spent', value: '$12,400' },
  { label: 'Reach', value: '284K' },
  { label: 'Impressions', value: '1.2M' },
  { label: 'CTR', value: '3.8%' },
]

const row2 = [
  { label: 'ROAS', value: '3.8x', highlight: true },
  { label: 'CPC', value: '$0.44' },
  { label: 'CPM', value: '$10.32' },
  { label: 'Purchases', value: '812' },
]

const bars = [3700, 5200, 6800, 9100, 11500, 14200, 16800, 19300]
const maxBar = Math.max(...bars)

export function AdsDashboard() {
  return (
    <div className="rounded-xl border border-border bg-[#111111] p-4 sm:p-5">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
        <span className="flex items-center gap-2 text-sm font-medium">
          <span aria-hidden="true">📊</span> Campaign Overview
        </span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">Jan 1 – Mar 31, 2024</span>
          <span className="flex items-center gap-1.5 text-xs text-success">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            Active
          </span>
        </div>
      </div>

      {/* Metric rows */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {row1.map((m) => (
          <div key={m.label} className="rounded-lg border border-border bg-background/60 p-3">
            <div className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">
              {m.label}
            </div>
            <div className="mt-1 font-mono text-base font-semibold">{m.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {row2.map((m) => (
          <div
            key={m.label}
            className={`rounded-lg border p-3 ${
              m.highlight ? 'border-blue/40 bg-blue/5' : 'border-border bg-background/60'
            }`}
          >
            <div className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">
              {m.label}
            </div>
            <div
              className={`mt-1 font-mono font-semibold ${
                m.highlight ? 'text-2xl text-blue' : 'text-base'
              }`}
            >
              {m.value}
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="mt-5 rounded-lg border border-border bg-background/60 p-4">
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-wide text-muted-foreground">
          <span>Weekly Revenue</span>
          <span>Wk 1 → Wk 8</span>
        </div>
        <div className="mt-4 flex items-end justify-between gap-2">
          {bars.map((value, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-32 w-full items-end">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-blue/30 to-blue"
                  style={{ height: `${(value / maxBar) * 100}%` }}
                  aria-hidden="true"
                />
              </div>
              <span className="font-mono text-[0.6rem] text-muted-foreground">
                {(value / 1000).toFixed(1)}K
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
