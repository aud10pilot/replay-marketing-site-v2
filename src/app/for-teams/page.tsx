import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import AutoplayVideo from "@/components/AutoplayVideo";
import Nav from "@/components/Nav";
import ThemedVideo from "@/components/ThemedVideo";
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

// The five stages of a run, in order. Each one names what Replay QA does and
// why that stage is the reason the next one is possible.
const stages = [
  {
    n: 1,
    title: "Explore",
    body: "No script tells it what to click. Agents map the app, find the journeys worth verifying, and work through them the way a new QA hire would in their first week.",
  },
  {
    n: 2,
    title: "Reproduce",
    body: "When something breaks, the agent drives it again to confirm it's real and not a flake. You never get a report for something nobody can reproduce.",
  },
  {
    n: 3,
    title: "Record",
    body: "Every session is captured deterministically: DOM mutations, network calls, and JavaScript frames. Replayed later, it behaves identically every time.",
  },
  {
    n: 4,
    title: "Investigate",
    body: "An agent time-travels back through the recording to the line that caused the failure, working from the full runtime picture instead of guessing from the code.",
  },
  {
    n: 5,
    title: "Report",
    body: "The finding lands as a root cause, a suggested fix, and the recording that proves it, written for whoever picks it up next.",
  },
];

// Workflow fit: the three places Replay QA touches an existing team's process,
// plus who can read the output once it lands there.
const workflow = [
  {
    title: "Connect a repo, then forget it",
    body: "Add your GitHub repo and authenticate. The Replay QA GitHub app installs itself and runs a new pass whenever your codebase changes: every push to main, every pull request, or both. No config file, no CI changes.",
  },
  {
    title: "Every pull request gets checked",
    body: "PR runs test against your preview deployment and post the root cause and suggested fix as a comment on the pull request, next to the diff that caused it.",
  },
  {
    title: "Bugs land in your tracker",
    body: "Not another dashboard nobody opens. GitHub Issues, Linear, Jira, or any endpoint that accepts a webhook. You control whether everything gets filed or only what Replay QA has confirmed.",
  },
  {
    title: "Everyone on the team can read it",
    body: "Invite as many collaborators to a project as you want. Designers, PMs, and contractors can read a report and watch the recording without a seat license or a debugging background.",
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
            Autonomous QA for teams shipping faster than manual verification can keep
            up.
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay QA autonomously explores every new build, reproduces the failures it
            finds, and sends your team evidence they can fix before users discover the
            bug.
          </p>
          <a
            href="https://qa.replay.io/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Test Replay QA on my app
          </a>
          <p className="text-xs text-muted mt-4">
            No credit card. No existing test suite required.
          </p>
        </section>
      </div>

      {/* Show the output */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
            What you get
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4 leading-tight">
            Bug reports your coding agent deserves
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Each report is prepared with coding agents in mind. A detailed root cause
            analysis, a suggested fix, a deterministic runtime recording, and all the
            context needed to do the job.
          </p>
          {/* Natural aspect (1756x1080), not aspect-video — cropping a UI
              recording would cut off the report text. */}
          <div className="rounded-xl border border-border overflow-hidden shadow-2xl">
            <AutoplayVideo
              src="/ReplayQA_exampleBug.mp4"
              className="w-full h-auto block"
            />
          </div>
        </section>
      </div>

      {/* The verification problem */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">
          The problem
        </p>
        <h2 className="text-3xl font-bold tracking-tight leading-tight mb-6">
          Your team ships 47 pull requests a week. Nobody can check them all.
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Agents wrote most of that code. Static analysis passes on all of it, because
            static analysis reads the code without ever running the app. Nobody can
            review 47 pull requests by hand, let alone click through what each one
            changed.
          </p>
          <p>
            So it ships to staging and looks fine, because the happy path is fine. Three
            days later an end user emails to say checkout is broken on their phone. An
            engineer loses an afternoon reproducing it, and the fix itself takes twenty
            minutes.
          </p>
          <p>
            <span className="text-foreground font-medium">
              Writing code got faster. Verifying it didn&apos;t, and it&apos;s still the
              part your team does by hand.
            </span>
          </p>
        </div>
      </section>

      {/* How Replay QA works — the five stages of a run */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          {/* Same clip as step 02 on /how-it-works */}
          <ThemedVideo
            lightSrc="/02-Exploration-v2-Light.webm"
            darkSrc="/02-Exploration-v2-Dark.webm"
            lightFallbackSrc="/02-Exploration-v2-Light.mp4"
            darkFallbackSrc="/02-Exploration-v2-Dark.mp4"
            className="w-full aspect-video mb-12"
            ariaLabel="Replay QA agents exploring an app, mapping pages and user journeys as a growing web of connections"
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
            How Replay QA works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4 leading-tight">
            An agentic testing harness that works like a swarm of QA testers
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Most QA tooling starts with flows your team defines. Replay QA begins by
            exploring the application and identifying flows worth verifying.
          </p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((s) => (
              <li
                key={s.title}
                className="rounded-xl border border-border bg-surface p-7"
              >
                <span className="inline-flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-7 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-pink font-bold text-xs">{s.n}</span>
                  </span>
                  <h3 className="text-base font-semibold tracking-tight leading-snug">
                    {s.title}
                  </h3>
                </span>
                <p className="text-sm text-muted leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
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

      {/* Workflow fit */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
          How it fits your workflow
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 leading-tight">
          It runs where your team already works
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Replay QA hooks into GitHub, comments on pull requests, and files into the
          tracker you already use. Nobody has to adopt a new tool to get the benefit.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {workflow.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-surface p-7">
              <h3 className="text-base font-semibold tracking-tight mb-3">{w.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Setup */}
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
            Test Replay QA on my app
          </a>
          <p className="text-xs text-muted mt-4">
            No credit card. No existing test suite required.
          </p>
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
