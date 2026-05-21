"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Give it a URL",
    description:
      "Point Loop QA at any web app — a marketing site, a SaaS product, an internal tool, or all of the above. No configuration, no test files, no setup beyond the URL.",
    videoSrc: "/LoopQA_url.mp4",
  },
  {
    number: "02",
    title: "Discovers journeys and writes tests",
    description:
      "Loop QA explores your app the way a user would — navigating flows, filling forms, triggering interactions. It identifies meaningful user journeys and writes Playwright tests for each one. No human authoring required.",
    videoSrc: "/LoopQA_journeys.mp4",
  },
  {
    number: "03",
    title: "Runs tests with Replay recording",
    description:
      "Playwright executes every test in a Replay-instrumented browser. Every session is recorded deterministically — every function call, DOM mutation, network request, and state change captured. When something fails, nothing is lost.",
    videoSrc: "/LoopQA_recordingtests.mp4",
  },
  {
    number: "04",
    title: "Files detailed bug reports",
    description:
      "For every bug found, Loop QA files a report with everything needed to understand and fix it — without anyone having to reproduce it manually.",
    videoSrc: "/LoopQA_bugreport.mp4",
  },
];

export default function LoopQAHowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
        How it works
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 leading-tight">
        From URL to bug report — automatically
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
                  ? "border-brand-pink bg-brand-pink/[0.04] dark:bg-brand-pink/[0.06]"
                  : "border-transparent hover:border-border hover:bg-surface"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-sm font-bold tabular-nums ${
                    active === i ? "text-brand-pink" : "text-muted"
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

        {/* Right: video panel */}
        <div className="flex-1">
          <div className="rounded-2xl border border-border bg-surface overflow-hidden aspect-video flex items-center justify-center">
            {steps[active].videoSrc ? (
              <video
                key={steps[active].videoSrc}
                className="w-full h-full object-cover"
                src={steps[active].videoSrc}
                controls
                playsInline
                autoPlay
                muted
              />
            ) : (
              <div className="flex flex-col items-center gap-4 text-center px-8">
                <div className="w-14 h-14 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-pink ml-1">
                    <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">{steps[active].title}</p>
                  <p className="text-xs text-muted">Recording coming soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
