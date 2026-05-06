import Image from "next/image";
import FeatureTabs from "@/components/FeatureTabs";
import BugToFixTabs from "@/components/BugToFixTabs";
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
            a: "The Replay CI Agent is a GitHub bot that watches your PRs, records every Playwright test run, and — when a test fails — analyzes the recording and posts the root cause plus a suggested fix as a PR comment. No manual debugging required.",
          },
          {
            q: "What is Replay MCP?",
            a: "Replay MCP is a Model Context Protocol server that gives your coding agent time-travel debugging capabilities. It connects Replay\u2019s recording engine to Cursor, Claude Code, Codex, Copilot, and Windsurf — so your agent can step through any recorded execution and identify the root cause of a bug directly.",
          },
          {
            q: "Which test frameworks does it support?",
            a: "Replay works with Playwright. Point it at your existing test suite \u2014 no changes to your tests required.",
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
            q: "How much does this cost?",
            a: "Replay Growth is $299/month (annual) or $349/month (monthly) and includes 500 AI analyses per month. There\u2019s a 14-day free trial \u2014 no credit card required. See replay.io/pricing for details.",
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
            AI-Assisted CI/CD
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Your coding agent can&apos;t fix
            <br />
            <span className="text-brand-pink">what it can&apos;t see.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay records every test run. When something breaks, Replay's
            time-travel agent analyzes the recording, traces the root cause, and
            posts the analysis and a suggested fix as a PR comment.
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
              and eventually figures out the root cause. That&apos;s an hour per
              failure. Multiply by your team.
            </p>
            <p>
              Your coding agents make this worse. They can write code faster than
              ever, but when something breaks at runtime they&apos;re debugging
              blind — guessing at fixes, looping on the same failure, burning
              tokens without making progress.{" "}
              <span className="text-foreground font-medium">
                The bottleneck isn&apos;t writing code. It&apos;s what happens
                when it breaks.
              </span>
            </p>
            <p>
              So teams do the rational thing: they avoid writing more automated
              tests, because the maintenance overhead isn&apos;t worth it.
              Coverage stagnates. Confidence erodes.
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
          test fails, Replay's time-travel agent analyzes the recording, traces
          the exact causal chain from failure to root cause, and delivers the
          root cause and a suggested fix. No guessing. No manual debugging. No human required.
        </p>
      </section>

      {/* How It Works — Interactive Tabs */}
      <div id="how-it-works" className="bg-surface-tinted">
        <FeatureTabs />
      </div>

      {/* Two Products */}
      <TwoWaysToConnect />

      {/* Bug to Fix — MCP in action */}
      <BugToFixTabs />

      {/* Technical Depth */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Analysis that used to require a staff engineer
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Three classes of runtime bugs that require seeing the actual execution
          — not a trace. Now deliverable by your coding agent.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Render-to-cause chains
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Why did this component re-render 14 times? Trace it backward
              through the dependency graph to the exact state mutation. Not a
              guess — the actual render tree at the moment it happened.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;CartSummary re-rendered 14 times on a single click. Root
              cause: useCartState returned a new object reference on every call.
              The selector was never memoized.&rdquo;
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Selector reference tracking
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Which selector read stale data? When did it change? Replay tracks
              every reference so your agent answers these questions without
              adding a single log line to your codebase.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;selectUserPermissions returned the pre-login value at
              t+340ms. The auth slice updated at t+280ms but the selector cache
              wasn&apos;t invalidated.&rdquo;
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              JS execution, frame by frame
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Step through any JavaScript frame in order. Add console.logs
              retroactively. Set breakpoints that didn&apos;t exist when the bug
              happened. This is impossible with logs — it requires the recording.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;The race condition is in PaymentFlow.tsx line 83. The
              onSubmit handler fires before the async validation resolves.
              Here&apos;s the fix.&rdquo;
            </div>
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
                  "After seeing what Replay can do, I'm going to set up a lot more Playwright tests on my PRs. Was afraid to before, due to the extra work of debugging failed tests.",
                name: "Ben Ruckman",
                role: "Co-founder, Getmallow.com",
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
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            On 177 hard, realistic bugs in agent-built web apps: Claude Code +
            Replay MCP scored <strong className="text-foreground">76%</strong>.
            Claude Code alone scored 61%. Replay is the largest single
            performance delta of any tested configuration — and the only one
            capable of time-travel debugging.
          </p>
          <a
            href="https://blog.replay.io/web-debug-bench"
            className="text-sm font-medium text-brand-purple hover:opacity-80 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the benchmark blog post &rarr;
          </a>
        </div>
      </section>

      {/* Comparison */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            CI that explains itself vs. the old way
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
                <li>Test fails &rarr; Replay analyzes &rarr; root cause + suggested fix on your PR</li>
                <li>Agents get runtime context and fix it on the first try</li>
                <li>Flaky tests get recorded, diagnosed, and fixed</li>
                <li>Low maintenance overhead means teams write more tests</li>
                <li>Root cause documented on every PR, automatically</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Integrations */}
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

      {/* FAQ */}
      <div className="bg-surface-tinted">
        <section id="faq" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "What is the Replay CI Agent?",
                a: "The Replay CI Agent is a GitHub bot that watches your PRs, records every Playwright test run, and — when a test fails — analyzes the recording and posts the root cause plus a suggested fix as a PR comment. No manual debugging required.",
              },
              {
                q: "What is Replay MCP?",
                a: "Replay MCP is a Model Context Protocol server that gives your coding agent time-travel debugging capabilities. It connects Replay\u2019s recording engine to Cursor, Claude Code, Codex, Copilot, and Windsurf — so your agent can step through any recorded execution and identify the root cause of a bug directly.",
              },
              {
                q: "Which test frameworks does it support?",
                a: "Replay works with Playwright. Point it at your existing test suite \u2014 no changes to your tests required.",
              },
              {
                q: "How is this different from Datadog, Sentry, or LogRocket?",
                a: "Those tools surface what went wrong. Replay shows your agent exactly why \u2014 every DOM mutation, network call, and JS execution frame, captured deterministically. Replay MCP analyzes the recording and generates a specific fix. No human needs to read a trace.",
              },
              {
                q: "Does recording slow down my CI?",
                a: "Minimal overhead \u2014 comparable to screen recording. Most teams run Replay in CI without noticing a difference in build times.",
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
                Replay Growth is $299/month (billed annually) or $349/month (billed monthly), and includes 500 AI analyses per month. There&apos;s a 14-day free trial — no credit card required.{" "}
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

      <Footer />
    </div>
  );
}
