import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import HeroUrlInput from "@/components/HeroUrlInput";
import ThemedVideo from "@/components/ThemedVideo";
import StepSideNav from "./StepSideNav";
import {
  IlloAnalysis,
  IlloReports,
  IlloLoop,
} from "./StepIllos";

export const metadata: Metadata = {
  title: "How Replay QA Works — From URL to Bug Report",
  description:
    "One URL in, a full QA team's worth of work out. See how Replay QA explores your app, runs every journey, time-travels through the recordings, and delivers root-caused bug reports — automatically.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How Replay QA Works — From URL to Bug Report",
    description:
      "One URL in. A full QA team's worth of work out. Explore, test, analyze, report — automatically.",
  },
};

type Tone = "plain" | "tinted" | "dark";

// --- copy helpers (strings live in JS so apostrophes/em-dashes need no escaping) ---
function P(text: string, opts: { strong?: boolean } = {}) {
  const color = opts.strong ? "text-foreground font-medium" : "text-muted";
  return <p className={`text-base leading-relaxed max-w-[680px] mb-4 ${color}`}>{text}</p>;
}

function Checklist(items: string[]) {
  return (
    <ul className="list-none p-0 mt-4 space-y-1.5 text-[15px] text-muted">
      {items.map((t) => (
        <li key={t} className="leading-relaxed">
          <span className="text-brand-pink font-bold mr-1.5">&#10003;</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

function Step({
  index,
  eyebrow,
  headline,
  caption,
  illo,
  media,
  tone = "plain",
  children,
}: {
  index: number;
  eyebrow: string;
  headline: string;
  caption?: string;
  illo?: ReactNode;
  /** Finished artwork for this step; replaces the placeholder block entirely. */
  media?: ReactNode;
  tone?: Tone;
  children: ReactNode;
}) {
  const shell =
    tone === "dark"
      ? "bg-surface-tinted dark:bg-[#050507] rounded-2xl px-6 sm:px-10 py-12 my-6"
      : tone === "tinted"
        ? "bg-surface-tinted rounded-2xl px-6 sm:px-10 py-12 my-6"
        : "py-14";

  return (
    <section id={`step-${index}`} className={`scroll-mt-24 ${shell}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-pink mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight tracking-tight mb-5">{headline}</h2>
      {children}

      {media ? (
        <div className="mt-10">{media}</div>
      ) : (
        /* placeholder illustration */
        <div
          className="relative mt-10 rounded-2xl border border-dashed border-border flex flex-col items-center justify-center text-center gap-2.5 text-[13px] p-6 min-h-[220px] text-muted"
          style={{
            background:
              "repeating-linear-gradient(135deg, var(--surface), var(--surface) 10px, var(--surface-hover) 10px, var(--surface-hover) 20px)",
          }}
        >
          <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-foreground text-background">
            Placeholder
          </span>
          {illo}
          <span className="max-w-[420px]">{caption}</span>
        </div>
      )}
    </section>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in text-center px-6 pt-[72px] pb-8 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
          How Replay QA works
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-4">
          Replay QA acts like a swarm of seasoned QA engineers.
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          It explores your app on its own, detects the user journeys, and comes back with bug reports
          so your agent can fix them.
        </p>
      </section>

      {/* Steps + side nav */}
      <div className="flex gap-12 max-w-6xl mx-auto px-6">
        <StepSideNav />

        <div className="flex-1 min-w-0">
          <Step
            index={0}
            eyebrow="01 Start"
            headline="Drop in a URL. That's it."
            media={
              <ThemedVideo
                lightSrc="/03-UrlInput-Light.webm"
                darkSrc="/03-UrlInput-Dark.webm"
                className="w-full aspect-video"
                ariaLabel="A URL being typed into Replay QA to kick off a test run"
              />
            }
          >
            {P(
              "Paste any live web app URL and Replay QA gets to work immediately. No test suite to write — Replay QA handles that. No QA team to brief — it's like having eight seasoned QA engineers operating at once. No setup of any kind.",
            )}
            {P(
              "If you want a continuous quality gate instead of on-demand testing, connect a GitHub repo — Replay QA installs as a GitHub app and runs automatically on every push or pull request.",
            )}
          </Step>

          <Step
            index={1}
            tone="tinted"
            eyebrow="02 Exploration"
            headline="Replay QA figures out what your app does"
            media={
              <ThemedVideo
                lightSrc="/02-Exploration-v2-Light.webm"
                darkSrc="/02-Exploration-v2-Dark.webm"
                className="w-full aspect-video"
                ariaLabel="Replay QA agents exploring an app, mapping pages and user journeys as a growing web of connections"
              />
            }
          >
            {P(
              "Before a single test runs, Replay QA explores your app the way a QA engineer would on day one. It navigates the interface, identifies what flows exist, and maps the key user journeys that matter most: onboarding, core actions, edge cases.",
            )}
            {P(
              "This is powered by a bespoke exploration harness we've spent years building — purpose-built for autonomous discovery, not adapted from something else.",
            )}
          </Step>

          <Step
            index={2}
            eyebrow="03 Testing"
            headline="A swarm of agents runs every journey — and records everything"
            media={
              <ThemedVideo
                lightSrc="/03-Testing-Light.webm"
                darkSrc="/03-Testing-Dark.webm"
                lightFallbackSrc="/03-Testing-Light.mp4"
                darkFallbackSrc="/03-Testing-Dark.mp4"
                className="w-full aspect-video"
                ariaLabel="Parallel agent sessions running user journeys while every DOM mutation, network call, and JavaScript frame is recorded"
              />
            }
          >
            {P(
              "Once the journeys are mapped, a fleet of Replay QA agents spins up in parallel virtual containers and runs them using Playwright — interacting with your app exactly as a real user would. You can watch them work in real time.",
            )}
            {P(
              "What makes this different from any other automated testing tool is what happens underneath: every session is captured as a Replay Recording — every DOM mutation, every network call, every JavaScript execution frame.",
            )}
            {P(
              "Before AI, reproducing a bug was the job. With Replay Recordings, you will never need to reproduce a bug yourself again.",
            )}
          </Step>

          <Step
            index={3}
            tone="dark"
            eyebrow="04 Analysis"
            headline="Then the agents go back in time"
            illo={<IlloAnalysis />}
            caption="A Replay Recording timeline being scrubbed by an agent — as the playhead moves, annotations flag issues: a red outline on a broken button, a highlight on a slow network call, a contrast warning."
          >
            {P(
              "This is where Replay QA does something no other QA tool can. With the recordings captured, a second wave of agents moves through them — backwards, forwards, frame by frame — looking for exactly where things went wrong. This isn't static code analysis or a linter with opinions. It's a live interrogation of your app's actual runtime behavior.",
            )}
            {Checklist([
              "UI glitches — layout shifts, broken buttons, elements hidden behind overlays",
              "Accessibility failures — WCAG contrast violations, missing ARIA labels, keyboard traps",
              "Performance problems — slow network calls, render-blocking resources, long tasks",
              "Deep runtime bugs — errors invisible to every other tool",
            ])}
            <div className="mt-4" />
            {P(
              "Replay's time-travel debugger is proprietary technology we've been building since before AI coding agents existed. It was built to make the invisible visible. Now it powers an autonomous agent swarm doing the work of a senior QA engineer — at the speed of a computer.",
            )}
          </Step>

          <Step
            index={4}
            tone="tinted"
            eyebrow="05 Reports"
            headline="Every bug. Documented. Prioritized. Ready to fix."
            illo={<IlloReports />}
            caption="A rendered bug report card: video thumbnail, annotated screenshot, severity badge, and root-cause text — real and detailed, not a wireframe."
          >
            {P(
              "The agents don't just find bugs — they write the report. Each one comes with everything needed to understand and fix the issue immediately.",
            )}
            {Checklist([
              "A video recording of the exact moment the bug occurs",
              "Annotated screenshots with problem areas highlighted",
              "A root cause analysis — specifically what, where, and why",
              "A suggested fix, ready to paste directly into your coding agent",
            ])}
            <div className="mt-4" />
            {P(
              "Bugs are grouped by type and severity so you always know where to start. If you connected a GitHub repo, reports go to your agent automatically — no copy-pasting required.",
            )}
          </Step>

          <Step
            index={5}
            eyebrow="06 The Loop"
            headline="Fix. Ship. Run it again."
            illo={<IlloLoop />}
            caption="Flywheel diagram: Ship → Test → Bugs Found → Fix → Ship. GitHub path runs automatically; URL path runs on demand."
          >
            {P(
              "QA isn't a one-time event. After your coding agent applies the fixes and you push an update, run Replay QA again — it re-tests the same journeys to confirm the bugs are truly gone, and looks for anything new that crept in during the fix.",
            )}
            {P(
              "For teams shipping continuously, connecting a GitHub repo makes this automatic. Every push. Every PR. The loop runs without anyone having to think about it.",
            )}
            {P("The result: bugs get caught before users do. Every time.", { strong: true })}
          </Step>

          {/* Final CTA */}
          <section
            id="step-6"
            className="scroll-mt-24 bg-surface-tinted rounded-2xl px-6 sm:px-10 py-16 my-6 text-center"
          >
            <h2 className="text-3xl font-bold leading-tight mb-4">Try it on your app for free.</h2>
            <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
              Give Replay QA a URL. No test suite, no QA team, no credit card required.
            </p>
            <HeroUrlInput />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
