import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Orb from "@/components/Orb";
import LoopQAHowItWorks from "./LoopQAHowItWorks";

export const metadata: Metadata = {
  title: "Loop QA — Autonomous QA for the Vibecoding Era",
  description:
    "Drop in a URL. Loop QA explores your app, writes Playwright tests, captures Replay recordings, and files detailed bug reports — automatically.",
  alternates: { canonical: "/loop-qa" },
  openGraph: {
    title: "Loop QA — Autonomous QA for the Vibecoding Era",
    description:
      "Drop in a URL. Loop QA explores your app, writes Playwright tests, captures Replay recordings, and files detailed bug reports — automatically.",
  },
};

const bugReportItems = [
  {
    label: "Replay recording",
    detail: "A full video replay of the session where the bug occurred — every click, every render, every network request.",
  },
  {
    label: "Runtime breakdown",
    detail: "Every function call, DOM mutation, state change, and network response at the moment of failure — the same data Replay MCP surfaces to coding agents.",
  },
  {
    label: "Root-cause analysis",
    detail: "Not just 'this assertion failed' — a trace of the exact sequence of events that caused it, with a confidence score.",
  },
  {
    label: "Suggested fix",
    detail: "A concrete code change recommendation based on the actual runtime evidence, not guesswork from the stack trace.",
  },
];

const bugTypes = [
  {
    label: "UX bugs",
    detail: "Broken interactions, unexpected flows, UI states that leave users stuck or confused.",
  },
  {
    label: "Accessibility bugs",
    detail: "Missing ARIA labels, keyboard navigation failures, contrast violations, and screen reader issues.",
  },
  {
    label: "Critical functionality",
    detail: "Network failures, backend errors, broken form submissions, and data integrity issues.",
  },
];

const useCases = [
  {
    title: "Software factories & vibecoding platforms",
    description:
      "Embed Loop QA as a quality gate in your AI-powered development platform. Every app generated gets automatically tested before it ships — no human QA required.",
  },
  {
    title: "A startup's first QA team",
    description:
      "You're moving fast and QA isn't headcount you can afford yet. Loop QA finds the bugs that slip through before your users do — at a fraction of the cost.",
  },
  {
    title: "Defense for internally vibecoded apps",
    description:
      "Internal tools built with AI move fast and break things. Loop QA gives you a continuous layer of coverage so the breakages get caught before they become incidents.",
  },
];

export default function LoopQAPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-[640px] h-[640px] sm:w-[1232px] sm:h-[1232px]" style={{ position: "absolute", top: "41%", left: "50vw", transform: "translate(-50%, -50%)" }}>
            <Orb hue={264} hoverIntensity={0.3} rotateOnHover forceHoverState={false} />
          </div>
        </div>
        <section className="hero-fade-in relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
            Autonomous QA
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Drop in a URL.
            <br />
            <span className="text-brand-pink">Loop QA finds the bugs.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Autonomous QA that explores your app, finds the bugs, and tells you exactly how to fix them. No test suite to write, no QA team required.
          </p>
          <a
            href="https://loop-qa.replay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Try Loop QA &rarr;
          </a>
          <p className="text-xs text-muted text-center mt-3">
            No test suite required &middot; Works with any web app
          </p>
        </section>

        {/* Video */}
        <div className="relative z-10 px-6 pb-20 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border overflow-hidden aspect-video shadow-2xl">
            <video
              className="w-full h-full object-cover"
              src="/LoopQA_PlaceholderProductOverview.mp4"
              controls
              playsInline
              poster="/loopQa_screenshot.png"
            />
          </div>
        </div>
      </div>

      {/* How Loop QA Works */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 leading-tight">How Loop QA Works</h2>
        <p className="text-muted max-w-2xl mb-12 leading-relaxed">
          Loop QA autonomously tests your web app through four stages, each building on the last to deliver thorough coverage and actionable bug reports.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Exploration */}
          <div className="rounded-xl border border-border bg-surface p-7">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-muted mb-5">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
            <h3 className="text-base font-semibold mb-3">Exploration</h3>
            <p className="text-sm text-muted leading-relaxed">
              Agents map your app by navigating pages, clicking, and filling forms. Each exploration yields <span className="font-semibold text-foreground">journeys</span> — structured flows that mirror how people actually use the product.
            </p>
          </div>

          {/* Journey Testing */}
          <div className="rounded-xl border border-border bg-surface p-7">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-muted mb-5">
              <circle cx="6" cy="19" r="3" />
              <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
              <circle cx="18" cy="5" r="3" />
            </svg>
            <h3 className="text-base font-semibold mb-3">User Journey Testing</h3>
            <p className="text-sm text-muted leading-relaxed">
              Journeys replay automatically in a real browser and are captured as Replay sessions. Failures surface with links to the exact recording.
            </p>
          </div>

          {/* Polish */}
          <div className="rounded-xl border border-border bg-surface p-7">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-muted mb-5">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            <h3 className="text-base font-semibold mb-3">UX Audit</h3>
            <p className="text-sm text-muted leading-relaxed">
              A structured review that catches issues automated tests routinely skip: layout problems, UX friction, accessibility gaps, and edge-case rendering.
            </p>
          </div>

          {/* Bug Root Causes */}
          <div className="rounded-xl border border-border bg-surface p-7">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-muted mb-5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <h3 className="text-base font-semibold mb-3">Bug Root Causes</h3>
            <p className="text-sm text-muted leading-relaxed">
              Every bug includes analysis traced through the recording—from what you see back through network, state, and rendering—with evidence deep-linked into the session.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 leading-tight">
            Apps ship faster than ever.
            <br />
            <span className="text-brand-pink">QA hasn&apos;t kept up.</span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              AI coding tools have compressed development cycles from weeks to hours. A solo founder or a small team can now ship a full web app in a day. But the way we test software hasn&apos;t changed — it still requires engineers to write test suites, QA teams to run them, and someone to triage what breaks.
            </p>
            <p>
              The result: vibecoded apps ship without meaningful test coverage. Internal tools get deployed with no QA layer at all. And the bugs your users hit are the first signal that something is wrong.
            </p>
            <p>
              <span className="text-foreground font-medium">Loop QA closes the gap. Give it a URL and it takes care of the rest.</span>
            </p>
          </div>
        </section>
      </div>

      <LoopQAHowItWorks />

      {/* Bug Reports */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            Bug reports
          </p>
          <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
            Every bug comes with a full evidence trail
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-14">
            Not just &ldquo;assertion failed on line 42.&rdquo; Loop QA gives you everything you need to understand what went wrong and fix it.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {bugReportItems.map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold mb-2">{item.label}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bug types */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
          Three categories of bugs, covered automatically
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-14">
          Loop QA doesn&apos;t just check that buttons render. It looks for the bugs that actually hurt users.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {bugTypes.map((type) => (
            <div key={type.label} className="rounded-xl border border-border bg-surface p-7">
              <h3 className="text-base font-semibold mb-3">{type.label}</h3>
              <p className="text-sm text-muted leading-relaxed">{type.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            Use cases
          </p>
          <h2 className="text-3xl font-bold text-center mb-14 leading-tight">
            Who Loop QA is for
          </h2>
          <div className="flex flex-col gap-5">
            {useCases.map((uc, i) => (
              <div key={uc.title} className="rounded-xl border border-border bg-surface p-7 flex gap-5">
                <div className="w-8 h-8 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-pink font-bold text-xs">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Powered by */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted mb-6">Powered by</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex-1 rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold mb-2">Playwright</h3>
            <p className="text-sm text-muted leading-relaxed">
              Industry-standard browser automation. Loop QA writes and runs real Playwright tests against your app — the same tooling your engineering team already trusts.
            </p>
          </div>
          <div className="flex-1 rounded-xl border border-brand-purple/30 bg-brand-purple/5 p-6">
            <h3 className="text-sm font-semibold mb-2 text-brand-purple">Replay</h3>
            <p className="text-sm text-muted leading-relaxed">
              Time-travel debugging infrastructure. Every test run is recorded deterministically — so when a bug surfaces, the full execution is already captured and ready to analyze.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Ready to let Loop QA
            <br />
            <span className="text-brand-pink">find your bugs?</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Drop in a URL and Loop QA takes it from there — journeys, tests, recordings, and bug reports filed automatically.
          </p>
          <a
            href="https://loop-qa.replay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Try Loop QA &rarr;
          </a>
          <p className="text-xs text-muted mt-3">No test suite required &middot; Works with any web app</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
