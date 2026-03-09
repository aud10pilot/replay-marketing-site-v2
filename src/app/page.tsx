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
            q: "What is Replay MCP?",
            a: "Replay MCP is a Model Context Protocol server that connects Replay\u2019s recording and analysis engine to your coding agent. When your agent encounters a bug, Replay MCP provides the root cause and a detailed fix \u2014 drawn from a deterministic browser recording \u2014 so the agent can implement the fix directly.",
          },
          {
            q: "Which coding agents does it work with?",
            a: "Any agent that supports MCP \u2014 including Claude Code, Cursor, Copilot, and Windsurf. Add Replay MCP once and it works across your tools.",
          },
          {
            q: "How is this different from session replay tools like LogRocket?",
            a: "Session replay tools capture video and logs for humans to watch. Replay captures a deterministic recording of the browser runtime \u2014 every DOM mutation, network call, and state change \u2014 and Replay MCP analyzes it automatically to generate fixes for your agent. No human needs to watch anything.",
          },
          {
            q: "Does recording slow down my app or tests?",
            a: "Minimal overhead. Replay\u2019s recording performance is comparable to screen recording. Most teams run it in CI without noticing a difference.",
          },
          {
            q: "Do I need to change my test setup?",
            a: "No. Replay integrates with Cypress, Playwright, Selenium, and WebDriver. Point it at your existing test suite and start recording.",
          },
          {
            q: "Is it free?",
            a: "Yes, Replay is free to get started. Record sessions, connect Replay MCP to your agent, and start getting automated fixes at no cost.",
          },
        ]}
      />
      {/* Nav */}
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
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Your coding agent can&apos;t fix
            <br />
            <span className="text-brand-pink">what it can&apos;t see.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay captures the full browser runtime — every DOM change, network
            request, and state update — and turns it into a root cause and a
            specific fix. No manual debugging.
          </p>
          <a
            href="https://docs.replay.io/basics/replay-mcp/overview"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Add Replay to your agent &rarr;
          </a>
        </section>

        {/* Logo Marquee */}
        <div className="relative z-10">
          <LogoMarquee />
        </div>
      </div>

      {/* Problem / Pain */}
      <div className="bg-surface-tinted">
      <section id="problem" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 leading-tight">
          Your agent reads code.
          <br />
          <span className="text-brand-pink">It can&apos;t read runtime.</span>
        </h2>
        <div className="space-y-6 text-muted text-lg leading-relaxed">
          <p>
            A test fails. A user hits a bug. Your agent takes a guess at the
            fix, pushes it, and the same test fails again. Without runtime
            context, agents are stuck in a loop — guessing, patching, retrying.
          </p>
          <p>
            The problem isn&apos;t the agent. It&apos;s that the agent has no
            way to see what actually happened in the browser. No DOM state, no
            network timing, no component re-renders.{" "}
            <span className="text-foreground font-medium">
              It&apos;s debugging blind.
            </span>
          </p>
          <p>
            You end up pulling the agent aside, opening DevTools yourself, and
            spending an hour doing the work manually. The whole point of the
            agent was to save you that time.
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
          Give your agent eyes{" "}
          <br className="hidden sm:block" />
          on the runtime
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Replay records a deterministic capture of your browser session — every
          DOM change, network request, and state update. It analyzes the
          recording, identifies the root cause, and delivers a detailed fix
          directly to your coding agent via MCP, or in plain English via the
          Chrome extension.
        </p>
      </section>

      {/* Two Ways to Connect */}
      <TwoWaysToConnect />

      {/* How It Works — Interactive Tabs */}
      <div id="how-it-works" className="bg-surface-tinted">
        <FeatureTabs />
      </div>

      {/* Key Benefits */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          What your agent gets from Replay
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Three things Replay delivers on every bug.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Root-cause analysis, automated
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Replay doesn&apos;t just report the error. It traces through the
              recording to find the exact cause — the state change, the failed
              request, the bad render — and explains why it happened.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Detailed fixes, not vague suggestions
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Your agent receives a specific, implementation-ready fix with full
              context — which file, which function, what to change, and why.
              No more trial-and-error loops.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Works with any coding agent
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Replay MCP connects to Claude Code, Cursor, Copilot, Windsurf,
              and any agent that supports MCP. Add it once and every agent in
              your workflow gets full runtime visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <div className="bg-surface-tinted">
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          What developers are saying
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Teams at Vercel, Glide, Tablecheck, Pantheon, and more use Replay
          every day.
        </p>

        {/* Case Study Cards */}
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
              caseStudyUrl: "#",
            },
            {
              quote:
                "The tools that we were using before were barely better than useless. You\u2019d say thanks for the console log screenshot and spend 2\u20133 days trying to recreate the issues.",
              name: "Shane Duff",
              role: "Front End Lead",
              company: "Pantheon",
              avatar: "/avatars/shane-duff.svg",
              logo: "/logos/pantheon.png",
              caseStudyUrl: "#",
            },
            {
              quote:
                "Next.js App Router is now stable in 13.4. Wouldn\u2019t have been possible without Replay, we investigated so many super complicated bugs.",
              name: "Tim Neutkins",
              role: "Co-author of Next.js",
              company: "Vercel",
              avatar: "/avatars/tim-neutkins.svg",
              logo: "/logos/vercel.svg",
              caseStudyUrl: "#",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-surface flex flex-col overflow-hidden"
            >
              {/* Quote section */}
              <div className="p-6 flex-1 flex flex-col">
                <blockquote className="text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <a
                  href={t.caseStudyUrl}
                  className="text-sm font-medium text-brand-purple hover:opacity-80 transition"
                >
                  Read full case study &rarr;
                </a>
              </div>
              {/* Profile section */}
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

        {/* Additional Endorsements */}
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

      {/* Use Cases / Personas */}
      <section id="use-cases" className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Built for teams shipping with agents
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Wherever your agent gets stuck on a bug it can&apos;t see, Replay
          closes the gap.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Agent-assisted development",
              description:
                "Your coding agent hits a failing test or runtime error. Instead of looping, it sends the recording to Replay and gets a precise fix back — then implements it.",
            },
            {
              title: "Flaky tests in CI",
              description:
                "Record every test run. When a test flakes, Replay analyzes the recording and delivers the root cause and fix to your agent — no manual investigation needed.",
            },
            {
              title: "Bug triage on autopilot",
              description:
                "A user reports a bug. Replay captures the session, generates the diagnosis and fix. Your agent applies it. You review the PR.",
            },
            {
              title: "Unblocking stuck agents",
              description:
                "When your agent loops on a problem — retrying the same patch, failing the same test — Replay gives it the runtime context it needs to break out.",
            },
          ].map((persona) => (
            <div
              key={persona.title}
              className="rounded-xl border border-border bg-surface p-8"
            >
              <h3 className="text-lg font-semibold mb-2">{persona.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vs. Status Quo */}
      <div className="bg-surface-tinted">
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Replay vs. the old way
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-4">
              Without Replay
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>Agent guesses at the fix, fails, retries in a loop</li>
              <li>You step in to debug manually with DevTools</li>
              <li>Flaky tests get retried and ignored</li>
              <li>Bug reports sit in the backlog waiting for someone to reproduce them</li>
              <li>Agents write code fast but can&apos;t debug what they break</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-purple/30 bg-brand-purple/5 p-8">
            <h3 className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-4">
              With Replay
            </h3>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li>Agent gets a detailed fix from the recording on the first try</li>
              <li>You review the PR instead of opening DevTools</li>
              <li>Flaky tests get diagnosed and fixed automatically</li>
              <li>Bug reports get a recording, analysis, and fix in minutes</li>
              <li>Agents ship fixes as fast as they ship features</li>
            </ul>
          </div>
        </div>
      </section>
      </div>

      {/* Integrations */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Connects to your agent and your stack
        </h2>
        <p className="text-muted max-w-2xl mx-auto mb-12">
          Replay MCP works with any MCP-compatible coding agent, and plugs into
          the test frameworks and CI providers you already use.
        </p>
        <div className="mb-8">
          <p className="text-xs text-muted/60 uppercase tracking-widest mb-4">
            Coding agents
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Claude Code", logo: "/logos/claude.svg" },
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

      {/* FAQ */}
      <div className="bg-surface-tinted">
      <section id="faq" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Common questions
        </h2>
        <div className="space-y-8">
          {[
            {
              q: "What is Replay MCP?",
              a: "Replay MCP is a Model Context Protocol server that connects Replay\u2019s recording and analysis engine to your coding agent. When your agent encounters a bug, Replay MCP provides the root cause and a detailed fix \u2014 drawn from a deterministic browser recording \u2014 so the agent can implement the fix directly.",
            },
            {
              q: "Which coding agents does it work with?",
              a: "Any agent that supports MCP \u2014 including Claude Code, Cursor, Copilot, and Windsurf. Add Replay MCP once and it works across your tools.",
            },
            {
              q: "How is this different from session replay tools like LogRocket?",
              a: "Session replay tools capture video and logs for humans to watch. Replay captures a deterministic recording of the browser runtime \u2014 every DOM mutation, network call, and state change \u2014 and Replay MCP analyzes it automatically to generate fixes for your agent. No human needs to watch anything.",
            },
            {
              q: "Does recording slow down my app or tests?",
              a: "Minimal overhead. Replay\u2019s recording performance is comparable to screen recording. Most teams run it in CI without noticing a difference.",
            },
            {
              q: "Do I need to change my test setup?",
              a: "No. Replay integrates with Cypress, Playwright, Selenium, and WebDriver. Point it at your existing test suite and start recording.",
            },
            {
              q: "Is it free?",
              a: "Yes, Replay is free to get started. Record sessions, connect Replay MCP to your agent, and start getting automated fixes at no cost.",
            },
          ].map((item) => (
            <div key={item.q} className="border-b border-border pb-6">
              <h3 className="text-base font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* Final CTA */}
      <section id="cta" className="px-6 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Stop debugging for your agent.
          <br />
          Let Replay do it.
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
          Free to get started. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://docs.replay.io/basics/replay-mcp/overview"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Get started free
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
