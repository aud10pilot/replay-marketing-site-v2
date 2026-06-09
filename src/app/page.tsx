import Image from "next/image";
import Footer from "@/components/Footer";
import { FAQSchema, OrganizationSchema } from "@/components/JsonLd";
import LogoMarquee from "@/components/LogoMarquee";
import Nav from "@/components/Nav";
import Orb from "@/components/Orb";
import AutoplayVideo from "@/components/AutoplayVideo";
import LoopQAHowItWorks from "./qa/LoopQAHowItWorks";
import CopyPromptBlock from "./qa/CopyPromptBlock";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <OrganizationSchema />
      <FAQSchema
        items={[
          {
            q: "What is Replay QA?",
            a: "Replay QA is Replay's autonomous QA product. Drop in a URL and it explores your app, writes Playwright tests, captures Replay recordings, and files detailed bug reports — automatically.",
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
            q: "Does Replay QA work with existing CI test suites?",
            a: "Yes. If you already have Playwright or Cypress tests running in CI, Replay QA records every test run and analyzes every failure — posting root cause and a suggested fix to your PR automatically.",
          },
          {
            q: "Does Replay QA replace human QA teams?",
            a: "For most users, there's no human QA team to replace — Replay QA is the only QA layer they have. For teams that do have QA, Replay QA handles the autonomous discovery work so human QA can focus on what needs human judgment.",
          },
          {
            q: "How much does Replay QA cost?",
            a: "Replay is free to start — 25 analyses per month, no time limit, no credit card required. Paid plans start at $49/month for individuals and $299/month (annual) for teams.",
          },
        ]}
      />
      <Nav />

      {/* Hero */}
      <div className="relative overflow-visible">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-[640px] h-[640px] sm:w-[1232px] sm:h-[1232px]" style={{ position: "absolute", top: "41%", left: "50vw", transform: "translate(-50%, -50%)" }}>
            <Orb hue={264} hoverIntensity={0.3} rotateOnHover forceHoverState={false} />
          </div>
        </div>
        <section className="hero-fade-in relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
            Replay QA
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            AI writes the code.
            <br />
            <span className="text-brand-pink">Replay QA makes sure it works.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay QA finds the bugs in your web app and tells your agent exactly how to fix them — with a detailed, actionable bug report every time.
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
            Start free &middot; No credit card required
          </p>
        </section>

        <div className="relative z-10">
          <LogoMarquee />
        </div>
      </div>

      {/* Product video */}
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-border overflow-hidden aspect-video shadow-2xl">
          <AutoplayVideo
            src="/ReplayQA-Edit.mp4"
            className="w-full h-full object-cover"
          />
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

      {/* Three ways to use Replay QA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            One product. Three ways to use it.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 leading-tight">
            However you build, Replay QA has you covered
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mb-10">

            {/* For vibe coders */}
            <div className="rounded-xl border border-border bg-surface p-7 flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">For vibe coders</span>
              <h3 className="text-lg font-bold mb-3 leading-snug">Drop in a URL. Get a bug report.</h3>
              <p className="text-sm text-muted leading-relaxed flex-1">
                Replay QA explores your app, writes tests, records every session, and files detailed bug reports — with root cause, suggested fix, and a full Replay recording. No test suite, no QA team required.
              </p>
            </div>

            {/* For software factories */}
            <div className="rounded-xl border border-border bg-surface p-7 flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">For software factories</span>
              <h3 className="text-lg font-bold mb-3 leading-snug">Embed Replay QA in your pipeline.</h3>
              <p className="text-sm text-muted leading-relaxed flex-1">
                Building an AI coding platform or autonomous dev system? Embed Replay QA as a quality gate via API. Every app your system generates gets automatically tested before it ships.
              </p>
              <a href="mailto:sales@replay.io" className="mt-5 text-sm font-medium text-brand-pink hover:opacity-80 transition">
                Talk to us &rarr;
              </a>
            </div>

            {/* In CI */}
            <div className="rounded-xl border border-border bg-surface p-7 flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">In CI</span>
              <h3 className="text-lg font-bold mb-3 leading-snug">Analyze every test failure automatically.</h3>
              <p className="text-sm text-muted leading-relaxed flex-1">
                Already have tests in CI? Replay QA records every run, analyzes every failure, and posts root cause and fix to your PR automatically. No manual debugging.
              </p>
              <a href="/ci-agent" className="mt-5 text-sm font-medium text-brand-pink hover:opacity-80 transition">
                Learn more &rarr;
              </a>
            </div>

          </div>

          {/* Common thread callout */}
          <div className="rounded-xl border border-brand-pink/20 bg-brand-pink/[0.03] px-8 py-6 text-center max-w-3xl mx-auto">
            <p className="text-sm text-muted leading-relaxed">
              In every case, you get the same thing: a <span className="text-foreground font-medium">detailed, actionable bug report</span> with root cause, suggested fix, and a full Replay recording — so your agent knows exactly what to fix and how.
            </p>
          </div>
        </section>
      </div>

      {/* Ask Your Agent */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
          Ask Your Agent
        </p>
        <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
          One prompt. Your agent does the rest.
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-10">
          Try feeding this prompt to your coding agent to see the magic unfold.
        </p>
        <CopyPromptBlock prompt={`Set up a continuous QA loop for the app we're building using Replay QA (https://loop-qa.replay.io).

Drive everything through the REST API at https://loop-qa.replay.io/api/v1 — read the OpenAPI spec at /api/v1/openapi.json first; it documents the full workflow. Authenticate with my API token ("Authorization: Bearer lqa_..."), asking me for it if needed.

Your job:
1. Create a QA project for the running app — give it the target_url and a short note on the key flows. If the app is only reachable from this machine (e.g. http://localhost:3000), enable the reverse proxy and follow the spec's setup steps.
2. Let QA run — poll the project status and don't kick off explorations or test runs yourself; QA drives those.
3. For each open bug, read its full root-caused report and apply the fix directly in the codebase, then mark it fixed via the API.
4. Keep looping until no open bugs remain.`} />
        <p className="text-xs text-muted text-center mt-5">
          Works with Codex, Claude Code, Cursor, and any agent you&apos;re using.
        </p>
      </section>

      {/* Technology */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            The technology
          </p>
          <h2 className="text-3xl font-bold text-center mb-4">
            Underneath it all: our time-travel debugger.
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Whether you&apos;re running Replay QA on a web app or analyzing a CI failure, the same recording engine is at work. Replay captures the full browser runtime deterministically — making AI analysis possible where it wasn&apos;t before.
          </p>
          <div className="max-w-3xl mx-auto rounded-xl border border-border overflow-hidden">
            {[
              { label: "Render chains", detail: "Which component re-rendered, what triggered it, what changed" },
              { label: "State flow", detail: "Redux actions, React state updates, context changes across the component tree" },
              { label: "Network timing", detail: "Every request and response, with exact payload and timing data" },
              { label: "JS execution", detail: "Every function call on every frame, with arguments and return values" },
              { label: "DOM mutations", detail: "What changed in the DOM, when, and what code caused it" },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                className={`flex items-baseline gap-6 px-6 py-4 ${i < arr.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-surface" : "bg-surface-tinted"}`}
              >
                <span className="w-36 flex-shrink-0 text-sm font-semibold text-foreground">{row.label}</span>
                <span className="text-sm text-muted leading-relaxed">{row.detail}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted italic mt-8">
            This isn&apos;t guessing from error messages. It&apos;s reading the actual execution.
          </p>
        </section>
      </div>

      {/* Use cases */}
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

      {/* Social Proof */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            What developers are saying
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Teams at Vercel, Glide, Tablecheck, Pantheon, and more use Replay
            every day.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                quote:
                  "Before Replay we spent somewhere between 1–2 hours per day per dev in this reproducibility purgatory.",
                name: "Mark Probst",
                role: "VP Engineering",
                company: "Glide",
                avatar: "/avatars/mark-probst.svg",
                logo: "/logos/glide.svg",
              },
              {
                quote:
                  "The tools that we were using before were barely better than useless. You'd say thanks for the console log screenshot and spend 2–3 days trying to recreate the issues.",
                name: "Shane Duff",
                role: "Front End Lead",
                company: "Pantheon",
                avatar: "/avatars/shane-duff.svg",
                logo: "/logos/pantheon.png",
              },
              {
                quote:
                  "Next.js App Router is now stable in 13.4. Wouldn't have been possible without Replay, we investigated so many super complicated bugs.",
                name: "Tim Neutkins",
                role: "Co-author of Next.js",
                company: "Vercel",
                avatar: "/avatars/tim-neutkins.svg",
                logo: "/logos/vercel.svg",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border bg-surface flex flex-col overflow-hidden"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <blockquote className="text-sm leading-relaxed flex-1 mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="border-t border-border px-6 py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-hover overflow-hidden flex-shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold leading-tight">{t.name}</div>
                      <div className="text-muted text-xs">{t.role}, {t.company}</div>
                    </div>
                  </div>
                  <Image
                    src={t.logo}
                    alt={t.company}
                    width={80}
                    height={24}
                    className="h-5 w-auto object-contain opacity-50 dark:invert dark:opacity-40 flex-shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Replay.io is galaxy brain tooling. Real gamechanger.",
                name: "Dan Abramov",
                role: "React Maintainer",
              },
              {
                quote:
                  "After seeing what Replay can do, I'm going to set up a lot more Playwright tests on my PRs. Was afraid to before, due to the extra work of debugging failed tests.",
                name: "Ben Ruckman",
                role: "Co-founder, Getmallow.com",
              },
              {
                quote:
                  "If I don't immediately know the answer to a bug, I immediately reach for Replay.io. It's like HMR for repros.",
                name: "Sebastian Markbåge",
                role: "React Maintainer",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border bg-surface p-6 flex flex-col"
              >
                <blockquote className="text-sm leading-relaxed mb-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <br />
                  <span className="text-muted">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 max-w-3xl mx-auto">
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
              q: "Does Replay QA replace human QA teams?",
              a: "For most of our users, there's no human QA team to replace — Replay QA is the only QA layer they have. For teams that do have QA, Replay QA handles the autonomous discovery work: exploring the app, finding the broken flows, and filing the bug reports. That frees human QA to focus on what actually needs human judgment: subjective UX calls, accessibility audits with real assistive tech, and sign-off on high-stakes releases.",
            },
            {
              q: "How much does this cost?",
              a: <>Free plan includes 25 analyses per month — no time limit, no credit card required. Paid plans start at $49/month for individuals and $299/month (annual) for teams.{" "}<a href="/pricing" className="text-brand-pink hover:opacity-80 transition">See full pricing &rarr;</a></>,
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-surface overflow-hidden"
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

      {/* Final CTA */}
      <div className="bg-surface-tinted">
        <section id="cta" className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Ready to let Replay QA find your bugs?
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Drop in a URL and Replay QA takes it from there — no test suite, no QA team required.
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
          <p className="text-xs text-muted mt-3">Start free &middot; No credit card required</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
