"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Swap in the Replay browser",
    description:
      "One config change in your Playwright or Cypress setup — swap in the Replay-instrumented browser. No changes to your test code, no new dependencies to manage.",
    detail: "Works with Playwright and Cypress. Takes under 5 minutes to set up.",
  },
  {
    number: "02",
    title: "Every test run is recorded",
    description:
      "Replay captures every function call, DOM mutation, network request, and state change — deterministically. Whether the test passes or fails, the full session is recorded.",
    detail: "Minimal overhead — comparable to screen recording. Most teams don't notice a difference in build times.",
  },
  {
    number: "03",
    title: "Failures are analyzed automatically",
    description:
      "When a test fails, the CI Agent reads the recording and traces the failure sequence. It identifies the root cause with a confidence score — no human needs to reproduce the bug.",
    detail: "Analysis runs in minutes. Flaky tests are investigated individually, not rerrun and ignored.",
  },
  {
    number: "04",
    title: "Fix posted to your PR",
    description:
      "The root cause, evidence trail, and a suggested code change are posted as a PR comment — before your developer even opens the CI logs. They read the comment, apply the fix, and merge.",
    detail: "Works with GitHub, GitLab, and Bitbucket. Integrates with Claude Code, Cursor, Copilot, and other coding agents.",
  },
];

export default function CIAgentHowItWorks() {
  const [active, setActive] = useState(0);

  const icons = [
    // 01 — config/setup
    <svg key="01" width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-brand-purple" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>,
    // 02 — recording
    <svg key="02" width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-brand-purple" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>,
    // 03 — analysis
    <svg key="03" width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-brand-purple" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
    </svg>,
    // 04 — PR comment
    <svg key="04" width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-brand-purple" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>,
  ];

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <p className="text-sm font-medium uppercase tracking-widest text-brand-purple mb-4 text-center">
        How it works
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 leading-tight">
        From test failure to merged fix — automatically
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Left: tabs */}
        <div className="lg:w-[340px] shrink-0 flex flex-col gap-2">
          {steps.map((step, i) => (
            <button
              key={step.number}
              onClick={() => setActive(i)}
              className={`text-left rounded-xl px-5 py-5 transition-all border ${
                active === i
                  ? "border-brand-purple bg-brand-purple/[0.04] dark:bg-brand-purple/[0.06]"
                  : "border-transparent hover:border-border hover:bg-surface"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-sm font-bold tabular-nums ${
                    active === i ? "text-brand-purple" : "text-muted"
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`text-base font-semibold leading-snug ${
                    active === i ? "text-foreground" : "text-muted"
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {active === i && (
                <p className="text-sm text-muted leading-relaxed pl-8">
                  {step.description}
                </p>
              )}
            </button>
          ))}
        </div>

        {/* Right: content panel */}
        <div className="flex-1">
          <div className="rounded-2xl border border-border bg-surface overflow-hidden aspect-video flex flex-col items-center justify-center gap-6 px-12 text-center">
            <div className="w-16 h-16 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
              {icons[active]}
            </div>
            <div className="max-w-sm">
              <p className="text-sm font-semibold text-foreground mb-2">{steps[active].title}</p>
              <p className="text-sm text-muted leading-relaxed">{steps[active].description}</p>
            </div>
            <p className="text-xs text-muted/70 italic">{steps[active].detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
