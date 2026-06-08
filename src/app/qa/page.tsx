import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Orb from "@/components/Orb";
import LoopQAHowItWorks from "./LoopQAHowItWorks";

export const metadata: Metadata = {
  title: "Replay QA — Autonomous QA for the Vibecoding Era",
  description:
    "Drop in a URL. Replay QA explores your app, writes Playwright tests, captures Replay recordings, and files detailed bug reports — automatically.",
  alternates: { canonical: "/qa" },
  openGraph: {
    title: "Replay QA — Autonomous QA for the Vibecoding Era",
    description:
      "Drop in a URL. Replay QA explores your app, writes Playwright tests, captures Replay recordings, and files detailed bug reports — automatically.",
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
    title: "Teams with existing CI test suites",
    description:
      "Already running Playwright or Cypress in CI? Replay QA records every test run and analyzes every failure — posting root cause and a suggested fix to your PR automatically.",
  },
  {
    title: "Software factories & vibecoding platforms",
    description:
      "Embed Replay QA as a quality gate in your AI-powered development platform. Every app generated gets automatically tested before it ships — no human QA required.",
  },
  {
    title: "Early-stage startups without dedicated QA",
    description:
      "You're moving fast and QA isn't headcount you can afford yet. Replay QA finds the bugs before your users do — at a fraction of the cost of a QA hire.",
  },
  {
    title: "Companies that have vibecoded internal apps",
    description:
      "Internal tools built with AI move fast and break things. Replay QA gives you a continuous layer of coverage so breakages get caught before they become incidents.",
  },
  {
    title: "Individual vibecoders",
    description:
      "Building solo with AI? Replay QA acts as your QA layer — catching the bugs that slip through when you're moving fast and shipping constantly.",
  },
  {
    title: "Agencies & Dev Shops",
    description:
      "Deliver higher-quality work to clients without adding QA overhead. Replay QA tests every project automatically before handoff.",
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
            <span className="text-brand-pink">Replay QA finds the bugs.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Autonomous QA that explores your app, finds the bugs, and tells you exactly how to fix them. No test suite to write, no QA team required.
          </p>
          <a
            href="https://qa.replay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Try Replay QA &rarr;
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
              <span className="text-foreground font-medium">Replay QA closes the gap. Give it a URL and it takes care of the rest.</span>
            </p>
          </div>
        </section>
      </div>

      <LoopQAHowItWorks />

      {/* Use cases */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            Use cases
          </p>
          <h2 className="text-3xl font-bold text-center mb-14 leading-tight">
            Who is Replay QA for?
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-xl border border-border bg-surface p-7">
                <h3 className="text-base font-semibold mb-2">{uc.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{uc.description}</p>
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-brand-pink/40 bg-brand-pink/[0.03] p-7 flex flex-col justify-center">
              <h3 className="text-base font-semibold mb-2">Don&apos;t see your use case?</h3>
              <p className="text-sm text-muted leading-relaxed">
                We want to hear about how you&apos;d like to use Replay QA.{" "}
                <a href="mailto:sales@replay.io" className="text-brand-pink hover:opacity-80 transition">Let&apos;s talk.</a>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Common questions</h2>
        <div className="space-y-2">
          {[
            {
              q: "What kinds of apps can Replay QA test?",
              a: "Any web app accessible via a URL — marketing sites, SaaS products, internal tools, or all of the above. Replay QA explores whatever is at the URL you provide.",
            },
            {
              q: "Do I need to write any tests or config?",
              a: "No. Replay QA discovers user journeys and writes Playwright tests automatically. You provide a URL — it takes care of everything else.",
            },
            {
              q: "What does a bug report include?",
              a: "Every bug comes with a Replay recording of the session, a full runtime breakdown (function calls, DOM mutations, network requests, state changes), a root-cause analysis with confidence score, and a suggested fix.",
            },
            {
              q: "Can I integrate Replay QA into my existing agentic system?",
              a: <>Absolutely. If you&apos;ve built a software factory, a vibecoding platform, or want to include Replay QA in your software development life cycle, <a href="mailto:sales@replay.io" className="text-brand-pink hover:opacity-80 transition">let&apos;s talk</a>.</>,
            },
            {
              q: "How is this different from a traditional test suite?",
              a: "A traditional test suite only checks what engineers explicitly wrote tests for. Replay QA explores your app autonomously, discovers flows you didn't anticipate, and catches bugs that never would have had a test written against them.",
            },
            {
              q: "How much does Replay QA cost?",
              a: <>For casual use, it is completely free. If you&apos;d like to use Replay QA at scale, <a href="mailto:sales@replay.io" className="text-brand-pink hover:opacity-80 transition">let&apos;s talk</a>.</>,
            },
            {
              q: "Does Replay QA replace human QA teams?",
              a: "For most of our users, there's no human QA team to replace — Replay QA is the only QA layer they have. For teams that do have QA, Replay QA handles the autonomous discovery work: exploring the app, finding the broken flows, and filing the bug reports. That frees human QA to focus on what actually needs human judgment: subjective UX calls, accessibility audits with real assistive tech, and sign-off on high-stakes releases.",
            },
            {
              q: "How do I get started?",
              a: "Head to loop-qa.replay.io, drop in a URL, and Replay QA gets to work. No setup, no credit card required to try it.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-surface overflow-hidden"
              open={i === 3 || undefined}
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium cursor-pointer list-none select-none hover:text-foreground transition [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-muted flex-shrink-0 transition-transform group-open:rotate-45" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-3 text-sm text-muted leading-relaxed border-t border-border">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Ready to let Replay QA
            <br />
            <span className="text-brand-pink">find your bugs?</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Drop in a URL and Replay QA takes it from there — journeys, tests, recordings, and bug reports filed automatically.
          </p>
          <a
            href="https://qa.replay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Try Replay QA &rarr;
          </a>
          <p className="text-xs text-muted mt-3">No test suite required &middot; Works with any web app</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
