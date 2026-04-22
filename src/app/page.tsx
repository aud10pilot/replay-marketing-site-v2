import Image from "next/image";
import FeatureTabs from "@/components/FeatureTabs";
import TwoWaysToConnect from "@/components/TwoWaysToConnect";
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
            q: "What is the Replay CI Agent?",
            a: "The Replay CI Agent is a GitHub bot that watches your PRs, records every Playwright and Cypress test run, and — when a test fails — analyzes the recording and posts the root cause plus a suggested fix as a PR comment. No manual debugging required.",
          },
          {
            q: "What is Replay MCP?",
            a: "Replay MCP is a Model Context Protocol server that gives your coding agent time-travel debugging capabilities. It connects Replay\u2019s recording engine to Cursor, Claude Code, Codex, Copilot, and Windsurf — so your agent can step through any recorded execution and identify the root cause of a bug directly.",
          },
          {
            q: "Which test frameworks does it support?",
            a: "Replay works with Playwright and Cypress today, with Selenium and WebdriverIO support in progress. Point it at your existing test suite \u2014 no changes to your tests required.",
          },
          {
            q: "How is this different from Datadog, Sentry, or LogRocket?",
            a: "Those tools surface what went wrong. Replay shows your agent exactly why \u2014 every DOM mutation, network call, and JS execution frame, captured deterministically. Replay MCP analyzes the recording and generates a specific fix. No human needs to read a trace.",
          },
          {
            q: "Does recording slow down my CI?",
            a: "Minimal overhead \u2014 comparable to screen recording. Most teams run Replay in CI without noticing a difference in build times.",
          },
          {
            q: "Is it free?",
            a: "Yes. The CI Agent and Replay MCP are free to get started. No credit card required.",
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
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-6">
            Self-Healing CI/CD
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            When a test fails,
            <br />
            <span className="text-brand-pink">your agent fixes it.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay records every test run. When something breaks, your coding
            agent time-travels through the recording, traces the root cause, and
            posts the fix — directly on your PR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.replay.io/basics/replay-ci-agent/overview"
              className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              Install the CI Agent &rarr;
            </a>
            <a
              href="https://docs.replay.io/basics/replay-mcp/overview"
              className="inline-block rounded-full px-8 py-3.5 text-base font-medium border border-border hover:bg-surface transition"
            >
              Add Replay MCP
            </a>
          </div>
        </section>

        {/* Logo Marquee */}
        <div className="relative z-10">
          <LogoMarquee />
        </div>
      </div>

      {/* Problem */}
      <div className="bg-surface-tinted">
        <section id="problem" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 leading-tight">
            Your CI fails.
            <br />
            <span className="text-brand-pink">Your team debugs. Repeat.</span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              A test fails in CI. The stack trace tells you what broke — not why.
              Someone opens DevTools, reproduces it locally if they&apos;re lucky,
              reads through state and network calls, and eventually figures out
              the root cause. That&apos;s an hour per failure. Multiply by your
              team.
            </p>
            <p>
              Your coding agents make this worse. They can write code faster than
              ever, but when something breaks at runtime they&apos;re debugging
              blind — guessing at fixes, looping on the same failure, burning
              tokens without making progress.{" "}
              <span className="text-foreground font-medium">
                The bottleneck isn&apos;t writing code. It&apos;s what happens when it breaks.
              </span>
            </p>
            <p>
              So teams do the rational thing: they avoid writing more automated
              tests, because the maintenance overhead isn&apos;t worth it. Coverage
              stagnates. Confidence erodes.
            </p>
          </div>
        </section>
      </div>

      {/* Solution Bridge */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4">
          That&apos;s why we built Replay
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          Give your agent
          <br className="hidden sm:block" />
          the power of time-travel
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Replay captures a deterministic recording of every test run — every DOM
          change, network request, JS execution frame, and state update. When a
          test fails, your coding agent time-travels through the recording, traces
          the exact causal chain from failure to root cause, and delivers a
          specific fix. No guessing. No manual debugging. No human required.
        </p>
      </section>

      {/* How It Works — 3 steps */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            From test failure to merged fix
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16">
            The full loop — automatically.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Test fails in CI",
                body: "Replay records the full runtime for every Playwright and Cypress run. The recording is deterministic — every DOM mutation, network call, and JS frame, losslessly captured.",
              },
              {
                step: "02",
                title: "Agent time-travels",
                body: "Replay MCP gives your coding agent access to the recording. It steps forward and backward through the execution, traces the causal chain, and identifies the exact line that caused the failure.",
              },
              {
                step: "03",
                title: "Fix lands on your PR",
                body: "The CI Agent posts root cause analysis and a specific fix as a PR comment. You review it — or in v2, let the agent apply it automatically and close the self-healing loop.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-border bg-surface p-8">
                <div className="text-3xl font-bold text-brand-pink/30 mb-4 font-mono">{item.step}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Two Products */}
      <TwoWaysToConnect />

      {/* How It Works — Interactive Tabs */}
      <div id="how-it-works" className="bg-surface-tinted">
        <FeatureTabs />
      </div>

      {/* Key Benefits */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          What changes when CI heals itself
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          The downstream effects of removing manual debugging from your workflow.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Write more tests, not fewer
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              The reason teams stop writing tests is maintenance overhead. When
              Replay fixes broken tests automatically, that overhead disappears —
              and coverage expands instead of stagnating.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Review PRs, not stack traces
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Root cause and specific fix delivered as a PR comment. Your
              engineers spend their time on code review and feature work — not
              chasing down what broke and why.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Agents that ship instead of loop
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Coding agents can write code fast. With Replay MCP, they can debug
              fast too. No more retrying the same patch three times — your agent
              gets the runtime context it needs to fix it on the first try.
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
                  "Before Replay we spent somewhere between 1\u20132 hours per day per dev in this reproducibility purgatory.",
                name: "Mark Probst",
                role: "VP Engineering",
                company: "Glide",
                avatar: "/avatars/mark-probst.svg",
                logo: "/logos/glide.svg",
              },
              {
                quote:
                  "The tools that we were using before were barely better than useless. You\u2019d say thanks for the console log screenshot and spend 2\u20133 days trying to recreate the issues.",
                name: "Shane Duff",
                role: "Front End Lead",
                company: "Pantheon",
                avatar: "/avatars/shane-duff.svg",
                logo: "/logos/pantheon.png",
              },
              {
                quote:
                  "Next.js App Router is now stable in 13.4. Wouldn\u2019t have been possible without Replay, we investigated so many super complicated bugs.",
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
                  "I think Replay has a very good chance of creating a new category around collaborative debugging.",
                name: "Guillermo Rauch",
                role: "Founder of Vercel",
              },
              {
                quote:
                  "If I don\u2019t immediately know the answer to a bug, I immediately reach for Replay.io. It\u2019s like HMR for repros.",
                name: "Sebastian Markb\u00E5ge",
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

      {/* Proof point */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-8 md:p-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-purple mb-4">
            Web Debug Bench — April 2026
          </p>
          <h2 className="text-3xl font-bold mb-4 leading-tight">
            Replay MCP adds{" "}
            <span className="text-brand-pink">15 percentage points</span>
            <br />
            to agent debugging accuracy
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            On 177 hard, realistic bugs in agent-built web apps: Claude Code +
            Replay MCP scored <strong className="text-foreground">76%</strong>.
            Claude Code alone scored 61%. Replay is the largest single performance
            delta of any tested configuration — and the only one capable of
            time-travel debugging.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <div className="bg-surface-tinted">
        <section id="use-cases" className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Where it makes the difference
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Any place your team loses time to bugs they can&apos;t see.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Flaky tests in CI",
                description:
                  "Your test suite has a flake that fails one in ten runs. Nobody can reproduce it locally. Replay records every CI run — when it flakes, your agent gets the recording, not a description of it.",
              },
              {
                title: "Agents stuck in a loop",
                description:
                  "Your agent keeps patching the same failing test. More logs don\u2019t help — they don\u2019t contain what it needs. Replay gives it the runtime execution. That\u2019s what breaks the loop.",
              },
              {
                title: "PR review, not PR debugging",
                description:
                  "A test fails on a PR. Instead of the author debugging manually, the CI Agent posts root cause and fix as a comment. The reviewer sees the analysis, not a broken build.",
              },
              {
                title: "Hard-to-reproduce user bugs",
                description:
                  "A user reports something broken that you can\u2019t reproduce. The Replay Chrome Extension captures the session — state, timing, render sequence — so your agent gets the recording, not a screenshot.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-8"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Comparison */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Self-healing CI vs. the old way
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-4">
              Without Replay
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>Test fails &rarr; engineer debugs manually &rarr; hours lost</li>
              <li>Agents loop on the same failure, guessing at fixes</li>
              <li>Flaky tests get retried and silently ignored</li>
              <li>High maintenance overhead discourages writing more tests</li>
              <li>Root cause lives in someone&apos;s head, not your codebase</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-purple/30 bg-brand-purple/5 p-8">
            <h3 className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-4">
              With Replay
            </h3>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li>Test fails &rarr; agent time-travels &rarr; fix on your PR</li>
              <li>Agents get runtime context and fix it on the first try</li>
              <li>Flaky tests get recorded, diagnosed, and fixed</li>
              <li>Low maintenance overhead means teams write more tests</li>
              <li>Root cause documented on every PR, automatically</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Works with your stack
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-12">
            Replay plugs into your existing CI, test frameworks, and coding agents.
            No infrastructure changes.
          </p>
          <div className="mb-8">
            <p className="text-xs text-muted/60 uppercase tracking-widest mb-4">
              Coding agents
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Claude Code", logo: "/logos/claude.svg" },
                { name: "Codex", logo: "/logos/codex.svg" },
                { name: "Cursor", logo: "/logos/cursor.svg" },
                { name: "Copilot", logo: "/logos/copilot.svg" },
                { name: "Windsurf", logo: "/logos/windsurf.svg" },
              ].map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-brand-purple/30 bg-brand-purple/5 px-5 py-2 text-sm inline-flex items-center gap-2"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] dark:invert"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-muted/60 uppercase tracking-widest mb-4">
              Test frameworks &amp; CI
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Cypress", logo: "/logos/cypress.svg" },
                { name: "Playwright", logo: "/logos/playwright.svg" },
                { name: "Selenium", logo: "/logos/selenium.svg" },
                { name: "GitHub Actions", logo: "/logos/github-actions.svg" },
                { name: "CircleCI", logo: "/logos/circleci.svg" },
                { name: "Jenkins", logo: "/logos/jenkins.svg" },
              ].map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-border bg-surface px-5 py-2 text-sm inline-flex items-center gap-2"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] dark:invert"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Common questions
        </h2>
        <div className="space-y-8">
          {[
            {
              q: "What is the Replay CI Agent?",
              a: "The Replay CI Agent is a GitHub bot that watches your PRs, records every Playwright and Cypress test run, and — when a test fails — analyzes the recording and posts the root cause plus a suggested fix as a PR comment. No manual debugging required.",
            },
            {
              q: "What is Replay MCP?",
              a: "Replay MCP is a Model Context Protocol server that gives your coding agent time-travel debugging capabilities. It connects Replay\u2019s recording engine to Cursor, Claude Code, Codex, Copilot, and Windsurf — so your agent can step through any recorded execution and identify the root cause of a bug directly.",
            },
            {
              q: "Which test frameworks does it support?",
              a: "Replay works with Playwright and Cypress today, with Selenium and WebdriverIO support in progress. Point it at your existing test suite \u2014 no changes to your tests required.",
            },
            {
              q: "How is this different from Datadog, Sentry, or LogRocket?",
              a: "Those tools surface what went wrong. Replay shows your agent exactly why \u2014 every DOM mutation, network call, and JS execution frame, captured deterministically. Replay MCP analyzes the recording and generates a specific fix. No human needs to read a trace.",
            },
            {
              q: "Does recording slow down my CI?",
              a: "Minimal overhead \u2014 comparable to screen recording. Most teams run Replay in CI without noticing a difference in build times.",
            },
            {
              q: "Is it free?",
              a: "Yes. The CI Agent and Replay MCP are free to get started. No credit card required.",
            },
          ].map((item) => (
            <div key={item.q} className="border-b border-border pb-6">
              <h3 className="text-base font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-surface-tinted">
        <section id="cta" className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Stop debugging for your agent.
            <br />
            <span className="text-brand-pink">Give it time-travel.</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Free to get started. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://docs.replay.io/basics/replay-ci-agent/overview"
              className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              Install the CI Agent
            </a>
            <a
              href="https://docs.replay.io/basics/replay-mcp/overview"
              className="inline-block rounded-full px-8 py-3.5 text-base font-medium border border-border hover:bg-surface transition"
            >
              Add Replay MCP
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
