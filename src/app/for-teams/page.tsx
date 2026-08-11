import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroUrlInput from "@/components/HeroUrlInput";

export const metadata: Metadata = {
  title: "Replay QA for Teams — Verification for Agent-Written Code",
  description:
    "Connect a GitHub repo in under two minutes. Replay QA tests every update, files root-caused bugs in your tracker, and keeps your team out of reproduction work. Built for startups, agencies, and dev shops.",
  alternates: { canonical: "/for-teams" },
  openGraph: {
    title: "Replay QA for Teams — Verification for Agent-Written Code",
    description:
      "Your agents ship faster than your team can verify. Replay QA is the layer that checks the work, on every push, without a test suite.",
  },
};

const audiences = [
  {
    label: "Startups",
    headline: "No QA hire, no time to write tests",
    body: "Three engineers and a roadmap that assumes six. Replay QA is the coverage you keep meaning to build, running from the day you connect the repo.",
  },
  {
    label: "Agencies",
    headline: "Ten client codebases, one team",
    body: "You touch each project once a quarter and hope nothing drifted. Replay QA keeps testing all of them while you're heads-down on the next engagement.",
  },
  {
    label: "Dev shops",
    headline: "Hand off the build, not the bug reports",
    body: "Ship with evidence the app works, and catch regressions during the contract instead of hearing about them from the client after it ends.",
  },
];

const benefits = [
  {
    title: "Set it and forget it",
    body: "Connect a GitHub repo in under two minutes. The Replay QA GitHub app runs a new pass whenever your codebase changes: every push to main, every pull request, or both. Configure it once and stop thinking about it.",
  },
  {
    title: "Works where you already work",
    body: "Bugs go to your tracker, not another dashboard nobody opens. GitHub Issues, Linear, Jira, or any endpoint that accepts a webhook. PR runs post the root cause and fix as a comment on the pull request.",
  },
  {
    title: "Everyone on the team, included",
    body: "Invite as many collaborators to a project as you want. Designers, PMs, and contractors can read a bug report and watch the recording without a seat license or a debugging background.",
  },
  {
    title: "One plan covers the team",
    body: "Priced on how much testing you run, not how many people are on the account. Adding a teammate costs nothing, so the person who spots the bug is never the person who can't file it.",
  },
  {
    title: "Your team stays on the hard problems",
    body: "Nobody reproduces a bug by hand or reads through a stack trace to find where it started. Every report arrives root-caused, with a suggested fix your coding agent can apply.",
  },
];

const faqs = [
  {
    q: "Do we need an existing test suite?",
    a: "No. Replay QA explores your app and writes its own Playwright tests based on what it finds. If you already have a suite, keep it. Replay QA runs alongside it and covers the surface area your tests don't.",
  },
  {
    q: "Will this flood our issue tracker?",
    a: "You control what gets filed. Submit bugs manually, only after Replay QA confirms them, or automatically for every report including unconfirmed ones. Confirmed-only is the safest setting to start with, and you can loosen it once you trust the signal.",
  },
  {
    q: "Can it test our staging or preview environments?",
    a: "Yes. Replay QA tests against whatever URL you point it at, including Vercel or Netlify preview deployments for pull requests. Authenticated apps work too: provide credentials and it gets past the login wall.",
  },
  {
    q: "What happens after we fix a bug?",
    a: "The webhook sends a callback URL with every report. POST to it when the fix ships and Replay QA marks the bug resolved, then re-enables that user journey for future runs so you find out immediately if it regresses.",
  },
  {
    q: "How is this different from our Playwright tests?",
    a: "Playwright runs the tests you wrote. Replay QA writes and maintains its own, covers the flows nobody got around to testing, and tells you the root cause when something fails instead of handing you a stack trace. Full comparison on the vs. test suites page.",
  },
  {
    q: "How much does it cost for a team?",
    a: "Pricing is based on how many analyses you run each month, not per seat. There's a free tier to try it on a real repo before you decide. See the pricing page for current plans.",
  },
];

export default function ForTeamsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" aria-hidden="true" />
          Replay QA for Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
          Ship agent-written code without
          <br />
          <span className="text-brand-pink">becoming the QA team.</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
          Startups, agencies, and dev shops connect a GitHub repo in under two
          minutes. Replay QA tests every update, finds real bugs, and files them in your
          tracker with the root cause and a suggested fix.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://qa.replay.io/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Connect your repo
          </a>
          <a
            href="https://qa.replay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-7 py-3 text-sm font-medium text-muted border border-border hover:text-foreground hover:border-foreground/20 transition"
          >
            Try it on one URL first
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          Free to start &middot; No test suite &middot; No credit card
        </p>
      </section>

      {/* Audience */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.label} className="rounded-xl border border-border bg-surface p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-pink mb-3">
                {a.label}
              </p>
              <h2 className="text-base font-semibold tracking-tight mb-3 leading-snug">
                {a.headline}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">
            The problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight leading-tight mb-6">
            Agents made writing code cheap. Checking it didn&apos;t get cheaper.
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Your agent closes a ticket in ten minutes. Confirming it didn&apos;t quietly
              break checkout takes somebody forty minutes of clicking through the app. So
              on a busy week, nobody does it.
            </p>
            <p>
              The work still happens, just later and more expensively. A client emails
              about a broken signup form. An engineer spends an afternoon reproducing it.
              The fix takes twenty minutes once they can finally see what went wrong.
            </p>
            <p>
              <span className="text-foreground font-medium">
                Verification is the bottleneck now, and it&apos;s the part your team is
                still doing by hand.
              </span>
            </p>
          </div>
        </section>
      </div>

      {/* Benefits */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
          Why teams run it
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 leading-tight">
          A verification layer that runs itself
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`rounded-xl border border-border bg-surface p-7 ${
                i === benefits.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-base font-semibold tracking-tight mb-3">{b.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
            Setup
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-14 leading-tight">
            Two minutes once, then it&apos;s on
          </h2>
          <div className="flex flex-col gap-8">
            {[
              {
                n: 1,
                title: "Connect the repo",
                body: "Add your GitHub repo URL and authenticate. The Replay QA GitHub app installs itself. No config file, no test suite, no CI changes.",
              },
              {
                n: 2,
                title: "Choose when it runs",
                body: "Every push to main, every pull request, or both. Replay QA tests against your preview or staging environment and explores the app the way a user would.",
              },
              {
                n: 3,
                title: "Bugs land in your tracker",
                body: "Each one arrives with the root cause, a suggested fix, and a full Replay recording. When the run came from a pull request, Replay QA comments on that PR directly.",
              },
            ].map((step, i, arr) => (
              <div key={step.n} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-pink font-bold text-sm">{step.n}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-base font-semibold tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted text-center mt-12">
            Not on GitHub yet?{" "}
            <a
              href="https://qa.replay.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-pink hover:opacity-80 transition font-medium"
            >
              Point it at a URL
            </a>{" "}
            and get a bug report without connecting anything.
          </p>
        </section>
      </div>

      {/* FAQ */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
          Questions from team leads
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
        <p className="text-sm text-muted text-center mt-8">
          Comparing against your existing suite?{" "}
          <a
            href="/replay-vs-test-suites"
            className="text-brand-pink hover:opacity-80 transition font-medium"
          >
            Replay QA vs. Playwright and Selenium
          </a>
        </p>
      </section>

      {/* Bottom CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            Put it on a real repo this afternoon.
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            Start with a URL and see what Replay QA finds in your app, then connect the
            repo when you want it running on every push.
          </p>
          <HeroUrlInput />
          <p className="text-sm text-muted mt-8">
            Running Replay QA across a lot of projects?{" "}
            <a
              href="mailto:sales@replay.io"
              className="text-brand-pink hover:opacity-80 transition font-medium"
            >
              Talk to us
            </a>{" "}
            or{" "}
            <a
              href="/pricing"
              className="text-brand-pink hover:opacity-80 transition font-medium"
            >
              see plans
            </a>
            .
          </p>
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
