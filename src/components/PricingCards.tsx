"use client";

import { useState } from "react";

const Check = () => (
  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30">
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      className="stroke-emerald-500"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="1.5,4.5 3.5,7 7.5,2" />
    </svg>
  </span>
);

export default function PricingCards() {
  const [annual, setAnnual] = useState(true);

  const price = annual ? 299 : 349;
  const billingNote = annual ? "per month · billed annually" : "per month · billed monthly";

  return (
    <div className="bg-surface-tinted">
      <section className="px-6 py-20 max-w-4xl mx-auto">

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setAnnual(false)}
            className={`text-sm font-medium transition ${!annual ? "text-foreground" : "text-muted"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-11 h-6 rounded-full border border-border bg-surface-hover transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-brand-pink shadow transition-transform duration-200 ${
                annual ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`text-sm font-medium transition flex items-center gap-2 ${annual ? "text-foreground" : "text-muted"}`}
          >
            Annual
            <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              Save 14%
            </span>
          </button>
        </div>

        <p className="text-center text-sm text-muted mb-8">
          Not sure if it&apos;s worth it?{" "}
          <a href="/roi-calculator" className="text-brand-purple hover:opacity-80 transition underline underline-offset-2">
            Calculate your team&apos;s ROI →
          </a>
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Replay Growth */}
          <div className="relative flex flex-col rounded-xl border border-brand-pink bg-brand-pink/[0.03] dark:bg-brand-pink/[0.04] p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-pink mb-2">
              Replay Growth
            </p>
            <h2 className="text-xl font-semibold tracking-tight mb-2 leading-snug">
              AI-assisted CI/CD for React and Next.js teams
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              When a test fails, Replay records it, your agent time-travels through
              the recording, and posts the root cause and a suggested fix as a PR comment.
            </p>

            <div className="font-semibold tracking-tight mb-1 leading-none text-[42px] transition-all">
              <sup className="text-xl font-medium align-top mr-0.5">$</sup>
              {price}
            </div>
            <p className="text-xs text-muted mb-6">{billingNote}</p>

            <div className="h-px bg-border mb-5" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
              Includes
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "Integrates with your test suite and GitHub PRs",
                "AI root cause analysis on test failures — automatically",
                "Suggested fixes fed back to your coding agent",
                "500 recordings per month included",
                "Playwright and Cypress support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted leading-snug">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://docs.replay.io/basics/replay-ci-agent/overview"
              className="block w-full text-center py-3 rounded-xl text-sm font-medium transition bg-brand-pink text-white hover:opacity-90"
            >
              Start integrating
            </a>
            <p className="text-center text-xs text-muted mt-3">
              14-day free trial · No credit card required
            </p>
          </div>

          {/* Enterprise */}
          <div className="relative flex flex-col rounded-xl border border-border bg-surface p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-2">
              Enterprise
            </p>
            <h2 className="text-xl font-semibold tracking-tight mb-2 leading-snug">
              For teams with high PR velocity or org-wide deployments
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Platform integrations, custom contracts, and dedicated support for
              teams running Replay at scale.
            </p>

            <div className="font-semibold tracking-tight mb-1 leading-none text-[34px]">
              Custom
            </div>
            <p className="text-xs text-muted mb-6">usage-based or seat-based · negotiated together</p>

            <div className="h-px bg-border mb-5" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
              Includes
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "Unlimited recordings",
                "Usage-based or seat-based — we'll find the right model together",
                "Priority support and dedicated onboarding",
                "SLA guarantees",
                "SSO and advanced access controls",
                "Roadmap input and joint planning",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted leading-snug">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="mailto:sales@replay.io"
              className="block w-full text-center py-3 rounded-xl text-sm font-medium transition border border-border text-muted hover:border-brand-pink hover:text-brand-pink hover:bg-brand-pink/[0.06]"
            >
              Talk to us
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
