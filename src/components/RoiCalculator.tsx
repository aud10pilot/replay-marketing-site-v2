"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// --- Types ---
type Inputs = {
  engineers: number;
  prsPerWeek: number;
  failureRatePercent: number;
  debugHoursPerFailure: number;
  engineerHourlyCost: number;
};

// --- Slider config ---
const fields: {
  key: keyof Inputs;
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  suffix?: string;
}[] = [
  {
    key: "engineers",
    label: "Engineers on the team",
    hint: "Including anyone who touches the test suite or reviews PRs.",
    min: 1,
    max: 50,
    step: 1,
    format: (v) => `${v}`,
  },
  {
    key: "prsPerWeek",
    label: "PRs opened per week",
    hint: "Across the whole team.",
    min: 1,
    max: 100,
    step: 1,
    format: (v) => `${v}`,
  },
  {
    key: "failureRatePercent",
    label: "Test failure rate",
    hint: "Percentage of PRs that have at least one test failure.",
    min: 5,
    max: 80,
    step: 5,
    format: (v) => `${v}%`,
    suffix: "%",
  },
  {
    key: "debugHoursPerFailure",
    label: "Avg. hours debugging a failure",
    hint: "Time from \"test failed\" to knowing the root cause and fix. Includes reproduction, investigation, and fix verification.",
    min: 0.5,
    max: 8,
    step: 0.5,
    format: (v) => `${v}h`,
  },
  {
    key: "engineerHourlyCost",
    label: "Avg. fully-loaded engineer cost",
    hint: "Salary + benefits + overhead, divided by working hours. $75–$150/hr is typical for US engineers.",
    min: 50,
    max: 250,
    step: 10,
    format: (v) => `$${v}/hr`,
  },
];

const REPLAY_MONTHLY_COST = 299;
// Replay reduces time-to-root-cause by ~85% based on 76% vs 61% benchmark + customer reports
const TIME_REDUCTION = 0.85;
const WEEKS_PER_MONTH = 4.33;

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}k`;
  return `$${Math.round(n)}`;
}

function formatHours(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k hrs`;
  return `${Math.round(n)} hrs`;
}

function SliderInput({
  field,
  value,
  onChange,
}: {
  field: (typeof fields)[number];
  value: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - field.min) / (field.max - field.min)) * 100;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between gap-4">
        <div>
          <label className="text-sm font-medium text-foreground">{field.label}</label>
          <p className="text-xs text-muted mt-0.5">{field.hint}</p>
        </div>
        <span className="text-sm font-semibold text-brand-pink whitespace-nowrap tabular-nums">
          {field.format(value)}
        </span>
      </div>
      <div className="relative h-1.5 rounded-full bg-border">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-brand-pink"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={field.min}
          max={field.max}
          step={field.step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          style={{ WebkitAppearance: "none" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-pink border-2 border-background shadow pointer-events-none"
          style={{ left: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-muted/50">
        <span>{field.format(field.min)}</span>
        <span>{field.format(field.max)}</span>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  highlight = false,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-6 flex flex-col gap-1 ${
        highlight
          ? "bg-brand-pink/10 border border-brand-pink/30"
          : "bg-surface border border-border"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-muted">{label}</p>
      <p
        className={`text-3xl font-bold tracking-tight leading-none ${
          highlight ? "text-brand-pink" : "text-foreground"
        }`}
      >
        {value}
      </p>
      {sub && <p className="text-xs text-muted mt-1">{sub}</p>}
    </div>
  );
}

export default function RoiCalculator() {
  const [inputs, setInputs] = useState<Inputs>({
    engineers: 8,
    prsPerWeek: 20,
    failureRatePercent: 30,
    debugHoursPerFailure: 2,
    engineerHourlyCost: 100,
  });

  const results = useMemo(() => {
    const failuresPerWeek = (inputs.prsPerWeek * inputs.failureRatePercent) / 100;
    const failuresPerMonth = failuresPerWeek * WEEKS_PER_MONTH;

    const totalDebugHoursPerMonth = failuresPerMonth * inputs.debugHoursPerFailure;
    const totalDebugCostPerMonth = totalDebugHoursPerMonth * inputs.engineerHourlyCost;

    const hoursSavedPerMonth = totalDebugHoursPerMonth * TIME_REDUCTION;
    const costSavedPerMonth = hoursSavedPerMonth * inputs.engineerHourlyCost;

    const netSavingsPerMonth = costSavedPerMonth - REPLAY_MONTHLY_COST;
    const roi = costSavedPerMonth / REPLAY_MONTHLY_COST;
    const paybackDays = (REPLAY_MONTHLY_COST / (costSavedPerMonth / 30));

    return {
      failuresPerMonth: Math.round(failuresPerMonth),
      totalDebugHoursPerMonth,
      totalDebugCostPerMonth,
      hoursSavedPerMonth,
      costSavedPerMonth,
      netSavingsPerMonth,
      roi,
      paybackDays: Math.round(paybackDays),
      annualSavings: costSavedPerMonth * 12,
    };
  }, [inputs]);

  const set = (key: keyof Inputs) => (v: number) =>
    setInputs((prev) => ({ ...prev, [key]: v }));

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Left: inputs */}
      <div className="lg:w-[420px] shrink-0 flex flex-col gap-7 rounded-2xl border border-border bg-surface p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-1">
            Your team
          </p>
          <p className="text-sm text-muted">
            Adjust to match your setup. We&apos;ll estimate how much debugging time and cost Replay removes.
          </p>
        </div>
        <div className="h-px bg-border" />
        <div className="flex flex-col gap-7">
          {fields.map((field) => (
            <SliderInput
              key={field.key}
              field={field}
              value={inputs[field.key]}
              onChange={set(field.key)}
            />
          ))}
        </div>
      </div>

      {/* Right: results */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Assumptions callout */}
        <div className="rounded-xl border border-border bg-surface-tinted px-5 py-4 text-xs text-muted leading-relaxed">
          <span className="font-semibold text-foreground">How we calculate this: </span>
          Based on your inputs, your team deals with{" "}
          <span className="text-foreground font-medium">~{results.failuresPerMonth} test failures/month</span>,
          consuming{" "}
          <span className="text-foreground font-medium">{formatHours(results.totalDebugHoursPerMonth)}</span>{" "}
          and{" "}
          <span className="text-foreground font-medium">{formatCurrency(results.totalDebugCostPerMonth)}</span>{" "}
          in engineering time. Replay eliminates ~85% of that investigation time by delivering root cause and a suggested fix directly on the PR.
        </div>

        {/* Key stats grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            label="Hours saved / month"
            value={formatHours(results.hoursSavedPerMonth)}
            sub={`${Math.round(results.hoursSavedPerMonth / inputs.engineers * 10) / 10} hrs per engineer`}
          />
          <StatCard
            label="Cost saved / month"
            value={formatCurrency(results.costSavedPerMonth)}
            sub={`vs. $${REPLAY_MONTHLY_COST}/mo for Replay`}
          />
          <StatCard
            label="Annual savings"
            value={formatCurrency(results.annualSavings)}
            sub="At current team size and failure rate"
          />
          <StatCard
            label="ROI"
            value={`${Math.round(results.roi)}×`}
            sub={`Replay pays for itself in ~${results.paybackDays} days`}
            highlight
          />
        </div>

        {/* Net savings bar */}
        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Monthly cost vs. savings
            </p>
            <p className="text-sm font-semibold text-foreground">
              Net: {formatCurrency(results.netSavingsPerMonth)}/mo
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-border flex-shrink-0" />
                <span className="text-xs text-muted">Replay cost</span>
                <span className="ml-auto text-xs font-medium">${REPLAY_MONTHLY_COST}/mo</span>
              </div>
              <div className="h-2 rounded-full bg-border overflow-hidden">
                <div
                  className="h-full rounded-full bg-border"
                  style={{ width: `${Math.min(100, (REPLAY_MONTHLY_COST / results.costSavedPerMonth) * 100)}%` }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-pink flex-shrink-0" />
                <span className="text-xs text-muted">Engineering time saved</span>
                <span className="ml-auto text-xs font-medium">{formatCurrency(results.costSavedPerMonth)}/mo</span>
              </div>
              <div className="h-2 rounded-full bg-brand-pink/20 overflow-hidden">
                <div className="h-full rounded-full bg-brand-pink" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark anchor */}
        <div className="rounded-xl border border-brand-purple/20 bg-brand-purple/5 px-5 py-4 text-xs text-muted leading-relaxed">
          <span className="font-semibold text-foreground">Backed by data: </span>
          On the{" "}
          <a
            href="https://blog.replay.io/web-debug-bench"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-purple hover:opacity-80 transition underline underline-offset-2"
          >
            Web Debug Bench
          </a>{" "}
          (177 real bugs), Claude Code + Replay MCP scored 76% vs. 61% without — a 15-point lift from time-travel debugging alone. Teams using Replay report reducing reproducibility time from 1–2 hours per engineer per day to near zero.
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://docs.replay.io/basics/replay-ci-agent/overview"
            className="flex-1 text-center rounded-full py-3 text-sm font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Start your 14-day free trial
          </a>
          <Link
            href="/pricing"
            className="flex-1 text-center rounded-full py-3 text-sm font-medium border border-border text-muted hover:border-foreground/20 hover:text-foreground transition"
          >
            View pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
