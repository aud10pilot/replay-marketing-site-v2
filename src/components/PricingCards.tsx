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

  const teamPrice = annual ? 299 : 349;
  const teamBillingNote = annual ? "per month · billed annually" : "per month · billed monthly";

  return (
    <div className="bg-surface-tinted">
      <section className="px-6 py-20 max-w-7xl mx-auto">

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-10">
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

        <p className="text-center text-sm text-muted mb-10">
          Not sure if it&apos;s worth it?{" "}
          <a href="/roi-calculator" className="text-brand-purple hover:opacity-80 transition underline underline-offset-2">
            Calculate your team&apos;s ROI →
          </a>
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Free */}
          <div className="relative flex flex-col rounded-xl border border-border bg-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-2">
              Free
            </p>
            <h2 className="text-lg font-semibold tracking-tight mb-2 leading-snug">
              Try Replay with no commitment
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              25 analyses a month, no time limit, no credit card required.
            </p>

            <div className="font-semibold tracking-tight mb-1 leading-none text-[38px]">
              $0
            </div>
            <p className="text-xs text-muted mb-6">always free</p>

            <div className="h-px bg-border mb-5" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
              Includes
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "25 AI analyses per month",
                "CI Agent integration",
                "Replay MCP for IDE debugging",
                "Replay DevTools access",
                "Community support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted leading-snug">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://app.replay.io/sign-up"
              className="block w-full text-center py-3 rounded-xl text-sm font-medium transition border border-border text-muted hover:border-foreground/30 hover:text-foreground"
            >
              Get started free
            </a>
          </div>

          {/* Individual */}
          <div className="relative flex flex-col rounded-xl border border-border bg-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-2">
              Individual
            </p>
            <h2 className="text-lg font-semibold tracking-tight mb-2 leading-snug">
              For individuals using Replay beyond the basics
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              150 analyses a month — the right volume for solo builders running a handful of apps or workflows.
            </p>

            <div className="font-semibold tracking-tight mb-1 leading-none text-[38px]">
              <sup className="text-lg font-medium align-top mr-0.5">$</sup>
              49
            </div>
            <p className="text-xs text-muted mb-6">per month</p>

            <div className="h-px bg-border mb-5" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
              Everything in Free, plus
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "150 AI analyses per month",
                "Unlimited recordings",
                "All CI integrations",
                "All coding agent integrations",
                "Email support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted leading-snug">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://app.replay.io/sign-up"
              className="block w-full text-center py-3 rounded-xl text-sm font-medium transition border border-border text-muted hover:border-foreground/30 hover:text-foreground"
            >
              Get started
            </a>
          </div>

          {/* Team — featured */}
          <div className="relative flex flex-col rounded-xl border border-brand-pink bg-brand-pink/[0.03] dark:bg-brand-pink/[0.04] p-7">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-brand-pink text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                Most popular
              </span>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-pink mb-2">
              Team
            </p>
            <h2 className="text-lg font-semibold tracking-tight mb-2 leading-snug">
              For startups and small teams moving fast
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              500 analyses a month for teams that ship often and need consistent coverage — however they use Replay.
            </p>

            <div className="font-semibold tracking-tight mb-1 leading-none text-[38px] transition-all">
              <sup className="text-lg font-medium align-top mr-0.5">$</sup>
              {teamPrice}
            </div>
            <p className="text-xs text-muted mb-6">{teamBillingNote}</p>

            <div className="h-px bg-border mb-5" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
              Everything in Individual, plus
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "500 AI analyses per month",
                "All CI integrations (GitHub Actions, CircleCI, Jenkins, BuildKite)",
                "All coding agent integrations (Claude Code, Codex, Cursor, Copilot, Windsurf)",
                "Priority email support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted leading-snug">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://app.replay.io/sign-up"
              className="block w-full text-center py-3 rounded-xl text-sm font-medium transition bg-brand-pink text-white hover:opacity-90"
            >
              Get started
            </a>
          </div>

          {/* Enterprise */}
          <div className="relative flex flex-col rounded-xl border border-border bg-surface p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-2">
              Enterprise
            </p>
            <h2 className="text-lg font-semibold tracking-tight mb-2 leading-snug">
              For organizations using Replay at scale
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Custom analysis volume, contracts, and support — for however your organization uses Replay.
            </p>

            <div className="font-semibold tracking-tight mb-1 leading-none text-[30px]">
              Custom
            </div>
            <p className="text-xs text-muted mb-6">usage-based or seat-based · negotiated together</p>

            <div className="h-px bg-border mb-5" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
              Everything in Team, plus
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "Unlimited AI analyses",
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
