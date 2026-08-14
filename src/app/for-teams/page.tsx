import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import AutoplayVideo from "@/components/AutoplayVideo";
import Nav from "@/components/Nav";
import ThemedVideo from "@/components/ThemedVideo";
import WarpSpeedBg from "@/components/WarpSpeedBg";
import Footer from "@/components/Footer";
import Testimonials, { type Testimonial } from "./Testimonials";

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

// The three stages of a run, in order.
const stages = [
  {
    n: 1,
    title: "Explore",
    body: "Agents map the app, quickly discover user journeys, and work through them the way a new QA hire would in their first week.",
  },
  {
    n: 2,
    title: "Test & Record",
    body: "Agents then write tests that they run while puppeting your app in our Chromium browser, capturing deterministic runtime recordings of every session.",
  },
  {
    n: 3,
    title: "Investigate & Report",
    body: "Our QA agents look for bugs across a range of types: deep runtime bugs, UI glitches, accessibility issues, and performance problems (more coming soon). They deliver robust bug reports with a root cause and a suggested fix.",
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

// The three setup steps, walked through in the video above them.
const setupSteps = [
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
];

// Quotes are verbatim. Handles are shown as written by each person; the links
// are the URLs they gave us, so Kaitee's points at the specific post.
const testimonials: Testimonial[] = [
  {
    quote:
      "Love the tooling! Our QA workflows and bug discovery has become 10X faster. The devs are able to cycle through loopholes much faster and delivery timelines have been enhanced",
    name: "Harshil Tomar",
    handle: "@Hartdrawss",
    href: "https://x.com/Hartdrawss",
    image: "/testimonial_photos/harshiltomar.jpg",
  },
  {
    quote:
      "Blown away by what Replay QA discovered for my solo startup, helped me identify and fix bugs that could potentially affect conversions.",
    name: "Peter Mick",
    handle: "@ThePeterMick",
    href: "https://x.com/ThePeterMick",
    image: "/testimonial_photos/petermick.jpg",
  },
  {
    quote:
      "Connecting my GitHub repository took only a few seconds, and the first run uncovered issues across functionality, UX, and accessibility that would've been easy to miss manually.",
    name: "Kaitee",
    handle: "@KaiteeShiks",
    href: "https://x.com/KaiteeShiks/status/2079904638191735181",
    image: "/testimonial_photos/kaiteeshiks.jpg",
  },
];

type Faq = { q: string; a: React.ReactNode };

// Asked inline under "What you get" — all about the output itself.
const outputFaqs: Faq[] = [
  {
    q: "What types of issues does Replay QA look for?",
    a: "Deep runtime bugs (race conditions, async timing, elusive state mutations, React component failures), UI glitches (layout shifts, broken buttons, elements hidden behind overlays), accessibility failures (WCAG contrast violations, missing ARIA labels, keyboard traps), and performance problems (slow network calls, render-blocking resources, long tasks). We've got plans to continue rolling out new QA capabilities.",
  },
  {
    q: "How does Replay QA find these issues? Are you analyzing code?",
    a: "Not the way a static analyzer does. Replay QA drives your running app in a browser and records what actually happens: every DOM mutation, every network call, every JavaScript frame. Those recordings are deterministic, so the same session behaves identically on every replay and an agent can return to the exact moment things went wrong. Your code does come into it. When your deployed app ships source maps, agents tie that recorded execution back to your original source and step through the functions that ran, which is what makes deeper React problems like elusive state mutations and component-level failures findable. Without source maps Replay QA still finds functional bugs, UI glitches, accessibility failures, and performance problems, it just can't go as deep on React internals. Either way it starts from what the app did at runtime, which is how it catches a race condition that only shows up under real timing, or a button made unclickable by an overlay — neither of which exists in the source to be scanned.",
  },
  {
    q: "Does Replay QA also fix the bugs it finds?",
    a: "No, and that's deliberate. Replay QA finds the bug, works out the root cause, and writes a suggested fix, but applying it stays with your team. The report is built so your coding agent can act on it directly, which means you keep the review step on anything that touches your codebase.",
  },
  {
    q: "Can I push bug reports into our issue tracker?",
    a: "Yes. GitHub Issues, Linear, Jira, or any endpoint that accepts a webhook. You control what gets filed: manually, only after Replay QA confirms a bug, or automatically for every report including unconfirmed ones. Confirmed-only is the safest place to start. When a run came from a pull request, the root cause and fix are also posted as a comment on that PR.",
  },
  {
    q: "Does Replay QA categorize and prioritize the issues it finds?",
    a: "Yes. Reports are grouped by type and severity, and each root-cause analysis carries a confidence score, so you can start with the high-severity, high-confidence findings instead of reading the whole list.",
  },
];

// Asked inline under "How Replay QA works" — all about the mechanism.
const mechanismFaqs: Faq[] = [
  {
    q: "Do I need to have a test suite in place?",
    a: "No. Replay QA explores your app and writes its own Playwright tests based on what it finds. If you already have a suite, keep it. Replay QA runs alongside it and covers the surface area your tests don't.",
  },
  {
    q: "How does Replay QA find the root cause of an issue?",
    a: "Every session is recorded deterministically, so it replays identically every time instead of behaving differently on each attempt. When a test fails, an agent time-travels back through that recording to the moment things went wrong and inspects the actual runtime: the state of the page, the network calls, and the code that ran. It reports what your app did, not what the code says it should do.",
  },
  {
    q: "How are these recordings different from production monitoring like FullStory, LogRocket, or Datadog?",
    a: "Those tools watch real users in production and tell you something went wrong after it already affected someone. They capture session replay, logs, and traces, which is genuinely useful, but you're still reconstructing the cause from the outside. Replay records the actual JavaScript execution during testing, before the code ships, and an agent steps through it to find the line responsible. Different job: monitoring tells you production is unhealthy, Replay QA tells you why a specific change broke and how to fix it.",
  },
];

const faqs: Faq[] = [
  {
    q: "How does Replay QA connect to my GitHub repository?",
    a: "During project setup you'll be taken through the GitHub authentication flow, where you'll be prompted to install the Replay QA GitHub app and specify which repositories it can monitor. Once the app is added to a repository, it listens for changes like pushes to main or new pull requests. You configure which events trigger a new test run.",
  },
  {
    q: "Can it test our staging or preview environments?",
    a: "Yes. Replay QA tests against whatever URL you point it at, including Vercel or Netlify preview deployments for pull requests.",
  },
  {
    q: "Can Replay QA test my app if it has authentication enabled?",
    a: "Yes. Replay QA can create its own accounts as needed, as long as they're email and password (Google Auth and other OAuth providers won't work). You can also give the agent one or more sets of test account credentials and it will use them, which is great for testing role-specific areas of an app.",
  },
  {
    q: "How does Replay QA handle bot detection, like Cloudflare?",
    a: "This is a tricky one. If you're able to disable bot detection while Replay QA tests your app, that's the recommendation. Otherwise we won't be able to pass that Turing test.",
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
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed text-balance">
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
          <p className="text-muted text-center max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
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
          <div className="space-y-2 mt-12 max-w-3xl mx-auto">
            {outputFaqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
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
        <div className="space-y-4 text-muted leading-relaxed text-pretty">
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

      {/* How Replay QA works — the three stages of a run */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
            How Replay QA works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4 leading-tight">
            An agentic testing harness that works like a swarm of QA testers
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Most QA tooling starts with flows your team defines. Replay QA begins by
            exploring the application and identifying flows worth verifying.
          </p>
          {/* Same clip as step 02 on /how-it-works. MP4 only — the VP9 WebM
              wouldn't autoplay reliably.

              Neither encode carries alpha, but the light clip's background is
              pure #ffffff and the dark one's is pure #000000. multiply drops
              white to nothing against any backdrop, screen does the same for
              black, so the clip sits on the tinted panel without a hard edge. */}
          <ThemedVideo
            lightSrc="/02-Exploration-v2-Light.mp4"
            darkSrc="/02-Exploration-v2-Dark.mp4"
            className="w-full aspect-video mb-12 mix-blend-multiply dark:mix-blend-screen"
            ariaLabel="Replay QA agents exploring an app, mapping pages and user journeys as a growing web of connections"
          />
          <ol className="grid md:grid-cols-3 gap-6">
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
                <p className="text-sm text-muted leading-relaxed text-pretty">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="space-y-2 mt-12 max-w-3xl mx-auto">
            {mechanismFaqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
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

      {/* Workflow fit */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
          How it fits your workflow
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 leading-tight">
          It runs where your team already works
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
          Replay QA hooks into GitHub, comments on pull requests, and files into the
          tracker you already use. Nobody has to adopt a new tool to get the benefit.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {workflow.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-surface p-7">
              <h3 className="text-base font-semibold tracking-tight mb-3">{w.title}</h3>
              <p className="text-sm text-muted leading-relaxed text-pretty">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials. Brand-pink tint rather than bg-surface-tinted so this band
          reads as its own treatment and the plain/tinted alternation either side
          of it still holds. */}
      <div className="bg-brand-pink/[0.04] border-y border-brand-pink/15">
        <section className="px-6 py-20 max-w-3xl mx-auto text-center">
          <Testimonials items={testimonials} />
        </section>
      </div>

      {/* Setup */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
          Setup
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10 leading-tight">
          Connect a GitHub repo in 5 minutes or less
        </h2>
        {/* Natural aspect (1660x1080); the clip has no audio track despite the
            filename, so muted autoplay loses nothing. */}
        <div className="rounded-xl border border-border overflow-hidden shadow-2xl mb-14">
          <AutoplayVideo
            src="/ReplayQA_githubSetupFlow_audiopilot.mp4"
            className="w-full h-auto block"
          />
        </div>
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
                <p className="text-sm text-muted leading-relaxed text-pretty">{step.body}</p>
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
          <p className="text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed text-balance">
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
    /* Transparent shell so the question row always picks up whatever background
       its section has; the answer panel below sits on --background. */
    <details
      className="group rounded-xl border border-border bg-transparent overflow-hidden"
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
      <div className="bg-background px-5 pb-4 pt-3 text-sm text-muted leading-relaxed text-pretty border-t border-border">
        {answer}
      </div>
    </details>
  );
}
