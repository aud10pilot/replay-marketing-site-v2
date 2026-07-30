// Decorative placeholder illustrations for the How-it-works steps.
// Static SVG/markup driven by CSS keyframes defined in globals.css.

export function IlloAnalysis() {
  return (
    <div className="w-[280px] px-1.5">
      <div className="relative h-2 rounded-full bg-foreground/10">
        {[15, 40, 65, 85].map((p, i) => (
          <span
            key={i}
            className="absolute -top-1 w-0.5 h-4 bg-red-400"
            style={{ left: `${p}%`, animation: `tickFlag 3s ease-in-out ${i * 0.4}s infinite` }}
          />
        ))}
        <div
          className="absolute -top-[5px] w-[18px] h-[18px] rounded-full bg-brand-pink border-2 border-background"
          style={{ animation: "scrubMove 3s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
}

export function IlloReports() {
  return (
    <div className="w-[240px] rounded-[10px] border border-border bg-background p-3.5 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span
          className="origin-left h-2 w-[70px] bg-red-400 rounded-full"
          style={{ animation: "riseLine 2s ease-out infinite" }}
        />
        <span className="text-[9px] text-muted">Severity: High</span>
      </div>
      {[90, 100, 60].map((w, i) => (
        <span
          key={i}
          className="origin-left h-1.5 bg-surface-hover rounded-full"
          style={{ width: `${w}%`, animation: `riseLine 2s ease-out ${0.2 + i * 0.2}s infinite` }}
        />
      ))}
    </div>
  );
}

export function IlloLoop() {
  return (
    <svg
      width={90}
      height={90}
      viewBox="0 0 90 90"
      style={{ animation: "spinLoop 4s linear infinite" }}
    >
      <circle
        cx={45}
        cy={45}
        r={34}
        fill="none"
        stroke="var(--brand-pink)"
        strokeWidth={3}
        strokeDasharray="12 10"
      />
      <path d="M45 11l8 8-8 4z" fill="var(--brand-pink)" />
    </svg>
  );
}
