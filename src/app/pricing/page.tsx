import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Pricing — Replay",
  description:
    "Replay MCP gives your coding agent time-travel debugging. $299/month for self-healing CI/CD. Start with a 14-day free trial.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Replay",
    description:
      "Replay MCP gives your coding agent time-travel debugging. $299/month for self-healing CI/CD. Start with a 14-day free trial.",
  },
};

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

const faqs = [
  {
    q: "What does the 14-day trial include?",
    a: "Full access to everything — CI/CD integration, AI root cause analysis on every test failure, suggested fixes fed back to your coding agent, and all agent integrations. No credit card required to start.",
  },
  {
    q: "What happens after the trial ends?",
    a: "Recordings will continue but AI analysis pauses until you subscribe. Your CI/CD integration stays in place — you just won't get the root cause and suggested fix on new failures until you're on a paid plan.",
  },
  {
    q: "Which test frameworks and CI providers does it support?",
    a: "Replay works with Playwright and Cypress today, with Selenium and WebdriverIO in progress. It integrates with GitHub Actions, CircleCI, Jenkins, and any CI that can run a shell command. No changes to your existing tests required.",
  },
  {
    q: "Which coding agents does it work with?",
    a: "Claude Code, Codex, Cursor, Copilot, and Windsurf — any agent that supports MCP. Add Replay MCP once and it works across your tools.",
  },
  {
    q: "How is this different from Datadog, Sentry, or LogRocket?",
    a: "Those tools surface what went wrong. Replay shows your agent exactly why — every DOM mutation, network call, and JS execution frame, captured deterministically. Replay MCP analyzes the recording and generates a specific fix. No human needs to read a trace.",
  },
  {
    q: "Does recording slow down my CI?",
    a: "Minimal overhead — comparable to screen recording. Most teams run Replay in CI without noticing a difference in build times.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in relative px-6 pt-24 pb-16 max-w-4xl mx-auto text-center">
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(240,45,94,0.09) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            14-day free trial · No credit card required
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.08] tracking-tight mb-5">
            Self-healing CI/CD
            <br />
            <span className="text-brand-pink">for your coding agent.</span>
          </h1>

          <p className="text-lg text-muted max-w-lg mx-auto leading-relaxed">
            Replay records every test failure, your agent time-travels through
            the recording, and the fix lands on your PR — automatically.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* Replay MCP */}
            <div className="relative flex flex-col rounded-xl border border-brand-pink bg-brand-pink/[0.03] dark:bg-brand-pink/[0.04] p-8">
              <span className="absolute -top-px right-5 bg-brand-pink text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-b-lg tracking-wide">
                Most popular
              </span>

              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-pink mb-2">
                Replay MCP
              </p>
              <h2 className="text-xl font-semibold tracking-tight mb-2 leading-snug">
                Self-healing CI/CD for React and Next.js teams
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                When a test fails, Replay records it, your agent time-travels through
                the recording, and the fix lands on your PR.
              </p>

              <div className="font-semibold tracking-tight mb-1 leading-none text-[42px]">
                <sup className="text-xl font-medium align-top mr-0.5">$</sup>
                299
              </div>
              <p className="text-xs text-muted mb-6">per month · billed annually</p>

              <div className="h-px bg-border mb-5" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
                Includes
              </p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {[
                  "Integrates with your test suite and GitHub PRs",
                  "AI root cause analysis on every test failure — automatically",
                  "Suggested fixes fed back to your coding agent",
                  "Recordings per month included",
                  "Works with Claude Code, Codex, Cursor, Copilot, and Windsurf",
                  "Playwright and Cypress support · Selenium in progress",
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

      {/* Design Partner callout */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        <div className="rounded-xl border border-border bg-surface p-7 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-purple mb-1.5">
              Design partners
            </p>
            <h3 className="text-base font-semibold mb-1">Working with us? Get free access during the engagement.</h3>
            <p className="text-sm text-muted leading-relaxed max-w-lg">
              We&apos;re working with a small group of engineering teams to build and refine Replay. Design partners get full, free access in exchange for real usage and regular feedback.
            </p>
          </div>
          <a
            href="mailto:partners@replay.io"
            className="flex-shrink-0 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-muted hover:border-brand-purple hover:text-brand-purple hover:bg-brand-purple/[0.06] transition whitespace-nowrap"
          >
            Apply to partner
          </a>
        </div>
      </section>

      {/* Trial callout */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">Start integrating in 5 minutes.</h2>
        <p className="text-muted leading-relaxed max-w-xl mx-auto">
          Full access for 14 days. No credit card required. If you don&apos;t have the
          value moment within the first week, we want to hear why.
        </p>
      </section>

      {/* FAQ */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Common questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group rounded-xl border border-border bg-surface overflow-hidden"
      open={defaultOpen || undefined}
    >
      <summary className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium cursor-pointer list-none select-none hover:text-foreground transition [&::-webkit-details-marker]:hidden">
        {question}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="stroke-muted flex-shrink-0 transition-transform group-open:rotate-45"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M8 3v10M3 8h10" />
        </svg>
      </summary>
      <div className="px-5 pb-4 pt-3 text-sm text-muted leading-relaxed border-t border-border">
        {answer}
      </div>
    </details>
  );
}
