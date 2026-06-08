import Image from "next/image";
import desertBgStamps from "@/images/desert-bg-stamps.png";
import travelogueDan from "@/images/Travelogue-DanAbramov.png";
import Footer from "@/components/Footer";
import { FAQSchema, OrganizationSchema } from "@/components/JsonLd";
import LogoMarquee from "@/components/LogoMarquee";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <OrganizationSchema />
      <FAQSchema
        items={[
          {
            q: "What is Replay QA?",
            a: "Replay QA is Replay's autonomous QA product. It captures what happens when code runs in the browser — every function call, DOM mutation, and network request — then analyzes that data to produce detailed, actionable bug reports with root cause, suggested fix, and a full Replay recording.",
          },
          {
            q: "Does Replay QA work with existing CI test suites?",
            a: "Yes. If you already have Playwright or Cypress tests running in CI, Replay QA records every test run and analyzes every failure — posting root cause and a suggested fix to your PR automatically. No changes to your test code required.",
          },
          {
            q: "Does Replay QA work with any web app?",
            a: "Yes. Replay QA works with any JavaScript or TypeScript web application. React apps get deeper analysis because Replay can inspect component state and re-renders, but Replay QA captures full execution data for any JS stack.",
          },
          {
            q: "What does a bug report include?",
            a: "Every bug report includes a root cause statement, a confidence score, the exact sequence of events that caused the failure, a suggested fix based on actual runtime evidence, and a full Replay recording so you can inspect every frame yourself.",
          },
          {
            q: "Can I embed Replay QA in my own system?",
            a: "Yes. Replay QA is available as an API for teams building software factories, AI coding platforms, or autonomous development pipelines. Every app your system generates can be automatically tested before it ships.",
          },
          {
            q: "How much does Replay QA cost?",
            a: "Replay is free to start — 25 analyses per month, no time limit, no credit card required. Paid plans start at $49/month for individuals and $299/month (annual) for teams.",
          },
        ]}
      />
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
              <a href="/qa" className="mt-5 text-sm font-medium text-brand-pink hover:opacity-80 transition">
                Learn more &rarr;
              </a>
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

      {/* It's all Replay — Technical unifier */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
          The technology
        </p>
        <h2 className="text-3xl font-bold text-center mb-4">
          Underneath it all — it&apos;s just Replay
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

      {/* Dan Abramov proof point callout */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="rounded-xl border border-border bg-surface p-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <a
              href="https://www.replay.io/blog/replay-time-travelogue-how-replay-mcp-helped-find-a-react-bug-faster-than-dan-abramov-did"
              className="flex-shrink-0 sm:w-72 hover:opacity-90 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={travelogueDan}
                alt="Replay Time Travelogue — Dan Abramov"
                className="border border-border w-full h-auto"
              />
            </a>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-2">Featured proof point</p>
              <h3 className="text-xl font-bold mb-3">Replay solved a bug that stumped Dan Abramov</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Dan had been manually debugging a React 19 race condition. Replay&apos;s agent traced it to root cause in 7 minutes — using the same time-travel recording data that powers Replay QA&apos;s analysis. The analysis identified the exact fix without any human intervention.
              </p>
              <a
                href="https://www.replay.io/blog/replay-time-travelogue-how-replay-mcp-helped-find-a-react-bug-faster-than-dan-abramov-did"
                className="text-sm font-medium text-brand-pink hover:opacity-80 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full story &rarr;
              </a>
            </div>
          </div>
          <blockquote className="border-t border-border pt-6 text-sm leading-relaxed italic text-muted text-center">
            <p>&ldquo;Replay.io is galaxy brain tooling. Real gamechanger.&rdquo;</p>
            <div className="mt-3 not-italic">
              <span className="text-xs font-semibold text-foreground block">Dan Abramov</span>
              <span className="text-xs text-muted">React Maintainer</span>
            </div>
          </blockquote>
        </div>
      </section>

      {/* Time Travelogue story cards */}
      <div className="relative overflow-hidden">
        <Image
          src={desertBgStamps}
          alt=""
          fill
          className="object-cover object-center opacity-10"
          aria-hidden="true"
        />
        <section className="relative px-6 py-20 max-w-4xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            Time Travelogues
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight">
            Deep-dive time-travel sessions
          </h2>
          <p className="text-muted text-center text-base max-w-2xl mx-auto mb-10">
            A running series of real debugging investigations — each one pitting Replay against a bug that stumped a human expert.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
              <p className="text-4xl font-bold text-brand-pink mb-3">7 min</p>
              <h3 className="text-base font-semibold mb-3">
                Replay solved a React bug faster than Dan Abramov did
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                Replay agents traced a React 19 race condition to root cause in as little as 7 minutes. Dan had been manually debugging the same bug.
              </p>
              <a
                href="https://www.replay.io/blog/replay-time-travelogue-how-replay-mcp-helped-find-a-react-bug-faster-than-dan-abramov-did"
                className="text-sm font-medium text-brand-pink hover:opacity-80 transition mb-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the story &rarr;
              </a>
              <p className="text-xs text-muted">— Mark Erikson</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
              <p className="text-4xl font-bold text-brand-pink mb-3">4–9 min</p>
              <h3 className="text-base font-semibold mb-3">
                The architectural fix Nadia spent days finding — solved automatically
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                Given a Replay recording and skill docs, an AI agent recommended the exact server-side prefetching fix Nadia had eventually discovered through days of manual investigation.
              </p>
              <a
                href="https://www.replay.io/blog/replay-time-travelogue-improving-nadias-debugging-with-ai-results-using-replay-mcp"
                className="text-sm font-medium text-brand-pink hover:opacity-80 transition mb-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the story &rarr;
              </a>
              <p className="text-xs text-muted">— Mark Erikson</p>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <div className="bg-surface-tinted">
        <section id="faq" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "What is Replay QA?",
                a: "Replay QA is Replay's autonomous QA product. It captures what happens when code runs in the browser — every function call, DOM mutation, and network request — then analyzes that data to produce detailed, actionable bug reports with root cause, suggested fix, and a full Replay recording.",
              },
              {
                q: "Does Replay QA work with existing CI test suites?",
                a: "Yes. If you already have Playwright or Cypress tests running in CI, Replay QA records every test run and analyzes every failure — posting root cause and a suggested fix to your PR automatically. No changes to your test code required.",
              },
              {
                q: "Does Replay QA work with any web app?",
                a: "Yes. Replay QA works with any JavaScript or TypeScript web application. React apps get deeper analysis because Replay can inspect component state and re-renders, but Replay QA captures full execution data for any JS stack.",
              },
              {
                q: "Can I embed Replay QA in my own autonomous system?",
                a: "Yes. Replay QA is available as an API for teams building software factories, AI coding platforms, or autonomous development pipelines. Every app your system generates can be automatically tested before it ships.",
              },
              {
                q: "What does a bug report include?",
                a: "Every bug report includes a root cause statement, a confidence score, the exact sequence of events leading to the failure, and a suggested fix — based on actual runtime evidence from the recording, not guesswork from the stack trace.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-border pb-6">
                <h3 className="text-base font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
            <div className="border-b border-border pb-6">
              <h3 className="text-base font-semibold mb-2">How much does this cost?</h3>
              <p className="text-sm text-muted leading-relaxed">
                Free plan includes 25 analyses per month — no time limit, no credit card required. Paid plans start at $49/month for individuals and $299/month (annual) for teams.{" "}
                <a href="/pricing" className="text-brand-purple hover:opacity-80 transition">
                  See full pricing →
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
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

      <Footer />
    </div>
  );
}
