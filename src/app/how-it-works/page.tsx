import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import HeroUrlInput from "@/components/HeroUrlInput";
import ThemedVideo from "@/components/ThemedVideo";
import StepSideNav from "./StepSideNav";

export const metadata: Metadata = pageMetadata({
  title: "How Replay QA Works: From URL to Bug Report",
  description:
    "One URL in, a full QA team's worth of work out. See how Replay QA explores your app, runs every journey, time-travels through the recordings, and delivers root-caused bug reports automatically.",
  canonical: "/how-it-works",
  social: {
    description:
      "One URL in. A full QA team's worth of work out. Explore, test, analyze, report. Automatically.",
  },
});

// Steps alternate plain/tinted, ending tinted so the closing CTA keeps its panel.
type Tone = "plain" | "tinted";

// --- copy helpers (strings live in JS so apostrophes/em-dashes need no escaping) ---
function P(text: string, opts: { strong?: boolean } = {}) {
  const color = opts.strong ? "text-foreground font-medium" : "text-muted";
  return <p className={`text-base leading-relaxed max-w-[680px] mb-4 ${color}`}>{text}</p>;
}

function Checklist(items: string[]) {
  return (
    <ul className="list-none mt-4 pl-6 space-y-1.5 text-[15px] text-muted">
      {items.map((t) => (
        // flex keeps wrapped lines aligned with the text instead of tucking under the check
        <li key={t} className="flex gap-2 leading-relaxed">
          <span aria-hidden="true" className="text-brand-pink font-bold flex-shrink-0">
            &#10003;
          </span>
          <span>{t}</span>
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
    tone === "tinted"
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
          Replay QA acts like a swarm of seasoned app testers.
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
            tone="tinted"
            eyebrow="01 Start"
            headline="Drop in a URL. Replay QA takes it from there."
            media={
              <ThemedVideo
                lightSrc="/03-UrlInput-Light.webm"
                darkSrc="/03-UrlInput-Dark.webm"
                lightFallbackSrc="/03-UrlInput-Light.mp4"
                darkFallbackSrc="/03-UrlInput-Dark.mp4"
                className="w-full aspect-video"
                ariaLabel="A URL being typed into Replay QA to kick off a test run"
              />
            }
          >
            {P(
              "Paste any live web app URL and Replay QA gets to work immediately. No test suite to write or maintain. It handles all of it.",
            )}
          </Step>

          <Step
            index={1}
            eyebrow="02 Exploration"
            headline="It discovers the user journeys"
            media={
              // MP4 only: the VP9 WebM wouldn't autoplay reliably.
              <ThemedVideo
                lightSrc="/02-Exploration-v2-Light.mp4"
                darkSrc="/02-Exploration-v2-Dark.mp4"
                className="w-full aspect-video"
                ariaLabel="Replay QA agents exploring an app, mapping pages and user journeys as a growing web of connections"
              />
            }
          >
            {P(
              "Replay QA clicks through your app the way a new QA hire would, with no spec and no one to show them around. It finds the pages, the paths between them, and the journeys your users take most, including the ones nobody wrote down.",
            )}
          </Step>

          <Step
            index={2}
            tone="tinted"
            eyebrow="03 Testing"
            headline="It tests your app thoroughly"
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
              "Replay QA spins up a swarm of agents that runs all of the mapped journeys in parallel, in a browser. You can watch them work in real time.",
            )}
            {P(
              "Each journey test gets recorded, capturing every DOM mutation, every network call, every JavaScript frame. All the bits of data that will be used later to figure out why something doesn't work.",
            )}
          </Step>

          <Step
            index={3}
            eyebrow="04 Analysis"
            headline="It analyzes the failed tests"
            media={
              <ThemedVideo
                lightSrc="/04-Analysis-Light.webm"
                darkSrc="/04-Analysis-Dark.webm"
                lightFallbackSrc="/04-Analysis-Light.mp4"
                darkFallbackSrc="/04-Analysis-Dark.mp4"
                className="w-full aspect-video"
                ariaLabel="An agent scrubbing a Replay Recording timeline, flagging a broken button, a slow network call, and a contrast warning as the playhead moves"
              />
            }
          >
            {P(
              "For all tests that fail, our agents time-travel through the recordings to find out why. Because our recordings are deterministic, the session behaves identically every time it's replayed, so the agents work from the full runtime picture instead of a guess. They can see the state of the page, the network calls, and the code that ran.",
            )}
            {P("They're reading what your app did, not what the code says it should do.")}
            {Checklist([
              "Deep runtime bugs: React-Specific Component Failures, Elusive state mutations, Race conditions, Async timing",
              "UI glitches: layout shifts, broken buttons, elements hidden behind overlays",
              "Accessibility failures: WCAG contrast violations, missing ARIA labels, keyboard traps",
              "Performance problems: slow network calls, render-blocking resources, long tasks",
            ])}
          </Step>

          <Step
            index={4}
            tone="tinted"
            eyebrow="05 Reports"
            headline="It writes detailed bug reports"
            media={
              <ThemedVideo
                lightSrc="/05-Reports-Light.webm"
                darkSrc="/05-Reports-Dark.webm"
                lightFallbackSrc="/05-Reports-Light.mp4"
                darkFallbackSrc="/05-Reports-Dark.mp4"
                className="w-full aspect-video"
                ariaLabel="A bug report card assembling itself: video thumbnail, annotated screenshot, severity badge, and root-cause text"
              />
            }
          >
            {P(
              "The agents don't just find bugs, they write the report. Each one comes with everything needed to understand and fix the issue immediately.",
            )}
            {Checklist([
              "A video recording of the exact moment the bug occurs",
              "Annotated screenshots with problem areas highlighted",
              "A root cause analysis: specifically what, where, and why",
              "A suggested fix, ready to paste directly into your coding agent",
            ])}
            <div className="mt-4" />
            {P(
              "Bugs are grouped by type and severity so you always know where to start. If you connected a GitHub repo, reports go to your agent automatically, with no copy-pasting required.",
            )}
          </Step>

          <Step
            index={5}
            eyebrow="06 The Loop"
            headline="Fix. Ship. Verify"
            media={
              <ThemedVideo
                lightSrc="/06-TheLoop-Light.webm"
                darkSrc="/06-TheLoop-Dark.webm"
                lightFallbackSrc="/06-TheLoop-Light.mp4"
                darkFallbackSrc="/06-TheLoop-Dark.mp4"
                className="w-full aspect-video"
                ariaLabel="Flywheel diagram cycling through Ship, Test, Bugs Found, and Fix"
              />
            }
          >
            {P(
              "Apply the fixes from the Replay QA bug reports, ship it, and run it again. The same journeys re-run, confirming the fix and catching anything it broke. If you've made other changes to your app, they'll be detected and tested automatically.",
            )}
            {P(
              "If you're running this on a GitHub repo, a new test run will trigger on every push to Main and with every PR. (configurable)",
            )}
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
