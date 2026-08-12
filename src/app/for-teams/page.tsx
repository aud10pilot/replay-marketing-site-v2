import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";
import Footer from "@/components/Footer";

export const metadata: Metadata = pageMetadata({
  title: "Replay QA for Teams — Verification for Agent-Written Code",
  description:
    "Replay QA explores your app, finds what's broken, works out why, and delivers a fix your coding agent can apply. Connect a GitHub repo and it runs on every update. Built for startups, agencies, and dev shops.",
  canonical: "/for-teams",
  social: {
    description:
      "Autonomous QA for teams who ship faster than they can verify. A swarm of agents explores your app, root-causes what breaks, and hands your coding agent the fix.",
  },
});

// The two timelines are deliberately parallel: same team, same 47 pull requests,
// same checkout bug. Only who finds it and how long it takes changes, so the
// elapsed-time phrases in each list are what carry the contrast.
const weekNow = [
  "Your team merges 47 pull requests. Agents wrote most of the code.",
  "Static analysis passes on all of them. It reads the code without ever running the app.",
  "Nobody can review 47 pull requests by hand, let alone click through what they changed.",
  "It ships to staging and looks fine, because the happy path is fine.",
  "Three days later, an end user emails to say checkout is broken on their phone.",
  "An engineer loses an afternoon reproducing it. The fix itself takes twenty minutes.",
];

const weekWithReplay = [
  "The same 47 pull requests merge. A swarm of agents explores the app on every one.",
  "Minutes later, it finds checkout dead on mobile Safari and time-travels back to the cause.",
  "A ticket lands in your tracker with the root cause, a suggested fix, and the recording.",
  "Your coding agent applies the fix. The next run confirms it holds.",
  "You ship. Nobody hears from an end user.",
];

const swarm = [
  {
    title: "They decide where to go",
    body: "No script tells them what to click. Each agent maps the app, picks a journey worth testing, and works through it the way a new QA hire would in their first week.",
  },
  {
    title: "They run in parallel",
    body: "Sessions happen side by side, not one after another. Coverage scales with how much you ship instead of how many hours your team has left over.",
  },
  {
    title: "They investigate what they find",
    body: "Every session is recorded deterministically. When one breaks, an agent time-travels back through the recording to the line that caused it, then writes the report.",
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
    title: "Bug reports your coding agent deserves",
    body: "Each bug report is prepared with coding agents in mind. A detailed root cause analysis, a suggested fix, a deterministic runtime recording, and all the context needed to do the job.",
  },
];

// Each step's visual. `asset` is the basename the finished clips should use in
// public/, so swapping a placeholder for real media is a one-line change: see
// the ThemedVideo example in StepMedia below.
const setupSteps = [
  {
    n: 1,
    title: "Connect the repo",
    body: "Add your GitHub repo URL and authenticate. The Replay QA GitHub app installs itself. No config file, no test suite, no CI changes.",
    asset: "Teams-01-Connect",
    caption:
      "Pasting a GitHub repo URL, the OAuth prompt, and the Replay QA GitHub app confirming install. Ends on the connected-repo state.",
  },
  {
    n: 2,
    title: "Choose when it runs",
    body: "Every push to main, every pull request, or both. Replay QA tests against your preview or staging environment and explores the app the way a user would.",
    asset: "Teams-02-Triggers",
    caption:
      "The trigger settings panel: toggles for push-to-main and pull request, then a run kicking off automatically after a commit lands.",
  },
  {
    n: 3,
    title: "Bugs land in your tracker",
    body: "Each one arrives with the root cause, a suggested fix, and a full Replay recording. When the run came from a pull request, Replay QA comments on that PR directly.",
    asset: "Teams-03-BugReport",
    caption:
      "A finished bug report filing itself as a Linear issue, alongside the same report posted as a comment on a GitHub pull request.",
  },
];

const faqs: { q: string; a: React.ReactNode }[] = [
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
    q: "Can it test apps running on localhost?",
    a: "Yes. We run a reverse proxy so Replay QA can reach a web app on your machine. Paste your localhost URL during project setup and we'll walk you through the rest.",
  },
  {
    q: "What happens after we fix a bug?",
    a: "The webhook sends a callback URL with every report. POST to it when the fix ships and Replay QA marks the bug resolved, then re-enables that user journey for future runs so you find out immediately if it regresses.",
  },
  {
    q: "How is this different from our Playwright tests?",
    a: "Playwright is a test runner: it executes the scripts a person wrote, in the order they wrote them. Replay QA is a swarm of agents that explores the app on its own, decides what's worth testing, and root-causes anything it breaks. It uses Playwright internally to drive the sessions. Full comparison on the vs. test suites page.",
  },
  {
    q: "How much does it cost for a team?",
    a: (
      <>
        Pricing is based on how many analyses you run each month, not per seat.
        There&apos;s a free tier to try it on a real repo before you decide. See the{" "}
        <a
          href="/pricing"
          className="text-brand-pink hover:opacity-80 transition font-medium"
        >
          pricing page
        </a>{" "}
        for current plans.
      </>
    ),
  },
];

export default function ForTeamsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <WarpSpeedBg
          className="absolute inset-0 opacity-30 dark:opacity-40"
          config={{
            speed: 10,
            targetSpeed: 10,
            speedAdjFactor: 0.8,
            density: 0.7,
            starSize: 2,
            warpEffect: true,
            warpEffectLength: 5,
            depthFade: true,
            shape: "square",
            backgroundColor: "#FFFFFF",
            starColor: "hsl(263,45%,7%)",
          }}
          darkConfig={{
            backgroundColor: "hsl(263,45%,7%)",
            starColor: "#FFFFFF",
          }}
        />
        <section className="hero-fade-in relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" aria-hidden="true" />
            Replay QA for Teams
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            Autonomous QA for teams who ship{" "}
            <span className="text-brand-pink italic">frickin&apos; fast.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay QA lets you ship even faster with its always-on verification.
            Perfect for fast-moving teams at startups, agencies and dev shops.
          </p>
          <a
            href="https://qa.replay.io/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Get started for free
          </a>
          <p className="text-xs text-muted mt-4">
            Set up in under 5min &bull; No credit card &bull; No test suite required
          </p>
        </section>
      </div>

      {/* The week now */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">
            The problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight leading-tight mb-10">
            The week you&apos;re having now
          </h2>
          <WeekTimeline items={weekNow} accent="muted" />
          <p className="text-foreground font-medium leading-relaxed mt-10">
            Verification is the bottleneck now, and it&apos;s the part your team is still
            doing by hand.
          </p>
        </section>
      </div>

      {/* The same week, with Replay QA */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">
          The same week, with Replay QA
        </p>
        <h2 className="text-3xl font-bold tracking-tight leading-tight mb-10">
          The same bug, found in minutes
        </h2>
        <WeekTimeline items={weekWithReplay} accent="pink" />
        <p className="text-foreground font-medium leading-relaxed mt-10">
          Same forty-seven pull requests, same team, still no QA hire. An agent found
          the bug minutes after the merge instead of an end user finding it three days
          later.
        </p>
      </section>

      {/* How it does that — the swarm */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
            How it does that
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4 leading-tight">
            An agentic testing harness that works like a swarm of QA testers
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Every other tool in this category runs the tests a person wrote, in the order
            they wrote them. Replay QA puts a swarm of agents in your app instead. They
            explore it, break it, and explain what happened.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {swarm.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-surface p-7">
                <h3 className="text-base font-semibold tracking-tight mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted text-center mt-10">
            <a
              href="/how-it-works"
              className="text-brand-pink hover:opacity-80 transition font-medium"
            >
              Learn more
            </a>{" "}
            about how it works.
          </p>
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
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-surface p-7">
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
          Up and running in under 5 minutes
        </h2>
        <div className="flex flex-col gap-8">
          {setupSteps.map((step, i, arr) => (
            <div key={step.n} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-pink font-bold text-sm">{step.n}</span>
                </div>
                {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="flex-1 min-w-0 pb-2">
                <h3 className="text-base font-semibold tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                <StepMedia asset={step.asset} caption={step.caption} />
              </div>
            </div>
          ))}
        </div>
          <p className="text-sm text-muted text-center mt-12">
            Not ready to connect a repo?{" "}
            <a
              href="https://qa.replay.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-pink hover:opacity-80 transition font-medium"
            >
              Point it at a staging or production URL
            </a>{" "}
            to see it in action.
          </p>
        </section>
      </div>

      {/* FAQ */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
        <p className="text-sm text-muted text-center mt-8">
          Comparing against your existing tool stack?{" "}
          <a
            href="/replayqa-comparisons"
            className="text-brand-pink hover:opacity-80 transition font-medium"
          >
            Replay QA Comparisons
          </a>
        </p>
      </section>

      {/* Bottom CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            Test it on your own repo
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            In just a few minutes, Replay QA will start exploring your app to identify
            the user journeys, and hunting for bugs.
          </p>
          <a
            href="https://qa.replay.io/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Get started for free
          </a>
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

/**
 * One shipping story as a timeline. A single rail runs the full height behind
 * the markers rather than a segment per row, which is what stops the list
 * reading as bullet points. The rail is inset top and bottom so it starts and
 * ends at the first and last dot instead of floating past them.
 */
function WeekTimeline({ items, accent }: { items: string[]; accent: "muted" | "pink" }) {
  const dot =
    accent === "pink"
      ? "bg-brand-pink border-brand-pink"
      : "bg-surface border-muted/50";

  return (
    <ol className="relative flex flex-col">
      <div
        aria-hidden="true"
        className="absolute left-[6px] top-3 bottom-3 w-0.5 bg-border"
      />
      {items.map((event) => (
        <li key={event} className="relative flex gap-6 pb-9 last:pb-0">
          <span
            className={`relative z-10 w-3.5 h-3.5 rounded-full border-2 mt-1.5 flex-shrink-0 ${dot}`}
          />
          <p className="flex-1 text-base leading-relaxed text-muted">{event}</p>
        </li>
      ))}
    </ol>
  );
}

/**
 * Placeholder for a setup-step visual. Drop the finished clips into public/ as
 * `{asset}-Light.webm` / `-Dark.webm` (plus matching .mp4 for Safari) and
 * replace the body of this component with:
 *
 *   <ThemedVideo
 *     lightSrc={`/${asset}-Light.webm`}
 *     darkSrc={`/${asset}-Dark.webm`}
 *     lightFallbackSrc={`/${asset}-Light.mp4`}
 *     darkFallbackSrc={`/${asset}-Dark.mp4`}
 *     className="w-full aspect-video rounded-xl border border-border mt-5"
 *     ariaLabel={caption}
 *   />
 *
 * An animated GIF works too: swap in a next/image with the same wrapper classes.
 */
function StepMedia({ asset, caption }: { asset: string; caption: string }) {
  return (
    <div
      className="relative mt-5 rounded-xl border border-dashed border-border aspect-video flex flex-col items-center justify-center text-center gap-2.5 p-6 text-[13px] text-muted"
      style={{
        background:
          "repeating-linear-gradient(135deg, var(--surface), var(--surface) 10px, var(--surface-hover) 10px, var(--surface-hover) 20px)",
      }}
    >
      <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-foreground text-background">
        Placeholder
      </span>
      <span className="max-w-[440px] leading-relaxed">{caption}</span>
      <code className="font-mono text-[11px] text-muted/70 bg-background/60 px-2 py-1 rounded">
        {asset}-&#123;Light,Dark&#125;
      </code>
    </div>
  );
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: React.ReactNode;
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
