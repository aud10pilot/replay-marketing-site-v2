import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";
import AgentTabs from "./AgentTabs";

export const metadata: Metadata = {
  title: "Replay for Engineers",
  description:
    "Replay MCP gives your coding agent the runtime context it needs to fix bugs — not loop on them. One command to install.",
  alternates: { canonical: "/for-engineers" },
  openGraph: {
    title: "Replay for Engineers",
    description:
      "Replay MCP gives your coding agent the runtime context it needs to fix bugs — not loop on them.",
  },
};

export default function ForEngineersPage() {
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
        <section className="hero-fade-in relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            You gave your agent a ticket. It shipped a guess.{" "}
            <span className="text-brand-pink">
              You spent the next hour in DevTools.
            </span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay MCP gives your coding agent the runtime context it needs to
            fix bugs &mdash; not loop on them.
          </p>

          <div className="w-full max-w-lg flex flex-col gap-5">
            <div>
              <a
                href="#"
                className="inline-block w-full rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition text-center"
                style={{ background: "var(--brand-gradient)" }}
              >
                Install Replay for Chrome &mdash; it&apos;s free
              </a>
              <p className="text-xs text-muted text-center mt-2">
                No setup. Record your first bug in 30 seconds.
              </p>
            </div>
            <div>
              <p className="text-sm text-muted mb-2">
                Using a coding agent? Add Replay MCP:
              </p>
              <div className="rounded-xl border border-border bg-surface p-4 font-mono text-sm text-foreground text-left select-all">
                npx replay-mcp install
              </div>
              <a
                href="https://docs.replay.io/basics/replay-mcp/overview"
                className="inline-block mt-3 text-sm font-medium text-brand-pink hover:opacity-80 transition"
              >
                Read the docs &rarr;
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* The Problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            The problem isn&apos;t your agent.{" "}
            <span className="text-brand-pink">
              It&apos;s what your agent can&apos;t see.
            </span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Coding agents are genuinely good at writing code. But they have no
              runtime visibility. They can read your codebase &mdash; they
              can&apos;t see what happened in the browser when something broke.
            </p>
            <p>
              No DOM state. No network timing. No component re-renders. Without
              that context, an agent can only guess.{" "}
              <span className="text-foreground font-medium">
                Replay solves the context problem.
              </span>
            </p>
          </div>
        </section>
      </div>

      {/* What Replay MCP Delivers */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Your agent gets context, not guesses.
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Three things Replay MCP delivers to your agent on every bug.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Root cause, not a guess
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Your agent gets a precise diagnosis &mdash; the exact state
              change, failed request, or bad render that caused the bug, and
              why.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;The form submission fails because the onSubmit handler
              fires before the async validation resolves. The race condition is
              in FormContainer.tsx line 47.&rdquo;
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              An implementation-ready fix
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Not vague suggestions. The specific file, function, and change
              &mdash; ready for your agent to apply.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;Wrap the handleSubmit call in FormContainer.tsx with await
              validateForm() before proceeding to submission logic.&rdquo;
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Works in your existing workflow
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Connects to Cursor, Claude Code, Copilot, and Windsurf. Integrates
              with Playwright, Cypress, and Selenium. Runs in CI. Nothing to rip
              out.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                { name: "Claude Code", logo: "/logos/claude.svg" },
                { name: "Cursor", logo: "/logos/cursor.svg" },
                { name: "Copilot", logo: "/logos/copilot.svg" },
                { name: "Windsurf", logo: "/logos/windsurf.svg" },
              ].map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-brand-purple/30 bg-brand-purple/5 px-3 py-1 text-xs inline-flex items-center gap-1.5"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 dark:invert"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Two ways to start. Both free.
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            The extension gets you recording in 30 seconds. Replay MCP
            connects directly to your coding agent for automated fixes.
          </p>

          {/* Step 1: Extension */}
          <div className="rounded-xl border border-border bg-surface p-6 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-1">
                  Start with the Chrome extension
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Install in 30 seconds. Click record, reproduce the bug, stop
                  recording. Replay analyzes what happened and tells you exactly
                  what broke.
                </p>
                <a
                  href="#"
                  className="inline-block rounded-full px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  Install Replay for Chrome &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Step 2: MCP */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-1">
                  Add Replay MCP to your coding agent
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Pick your agent below. Replay MCP connects automatically and
                  delivers root-cause analysis and a specific fix for every bug
                  your agent hits.
                </p>
                <AgentTabs />
              </div>
            </div>
          </div>

          <p className="text-sm text-muted text-center mt-8">
            That&apos;s it. Every bug your agent hits from here is a bug Replay
            can diagnose.
          </p>
        </section>
      </div>

      {/* Use Cases */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Built for the bugs that cost you the most time.
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Three scenarios where Replay pays for itself immediately.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Failing tests in CI",
              description:
                "Your test suite has a flake that fails one in ten runs and nobody can reproduce it locally. Replay records every CI run. When it flakes, Replay MCP analyzes the recording and delivers the root cause to your agent \u2014 no manual investigation.",
            },
            {
              title: "User-reported bugs you can\u2019t reproduce",
              description:
                "A user reports something broken. You can\u2019t reproduce it locally. Replay captures the user\u2019s session, analyzes it, and surfaces the exact conditions that caused the failure.",
            },
            {
              title: "Agents stuck in a loop",
              description:
                "Your agent keeps retrying the same patch against the same failing test. Replay gives it the runtime context to break the loop \u2014 and ship the actual fix.",
            },
          ].map((uc) => (
            <div
              key={uc.title}
              className="rounded-xl border border-border bg-surface p-8"
            >
              <h3 className="text-lg font-semibold mb-2">{uc.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What engineers are saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Next.js App Router is now stable in 13.4. Wouldn\u2019t have been possible without Replay, we investigated so many super complicated bugs.",
                name: "Tim Neutkins",
                role: "Co-author of Next.js",
                company: "Vercel",
                avatar: "/avatars/tim-neutkins.svg",
                logo: "/logos/vercel.svg",
              },
              {
                quote:
                  "If I don\u2019t immediately know the answer to a bug, I immediately reach for Replay.io. It\u2019s like HMR for repros.",
                name: "Sebastian Markb\u00E5ge",
                role: "React Maintainer",
                avatar: null,
                logo: null,
                company: null,
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
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border bg-surface p-6 flex flex-col"
              >
                <blockquote className="text-sm leading-relaxed mb-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {t.avatar && (
                      <div className="w-10 h-10 rounded-full bg-surface-hover overflow-hidden flex-shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="text-sm">
                      <span className="font-semibold">{t.name}</span>
                      <br />
                      <span className="text-muted text-xs">
                        {t.role}
                        {t.company && `, ${t.company}`}
                      </span>
                    </div>
                  </div>
                  {t.logo && (
                    <Image
                      src={t.logo}
                      alt={t.company || ""}
                      width={80}
                      height={24}
                      className="h-5 w-auto object-contain opacity-50 dark:invert dark:opacity-40 flex-shrink-0"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
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
            href="#"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Install Replay for Chrome
          </a>
          <a
            href="https://docs.replay.io/basics/replay-mcp/overview"
            className="text-sm font-medium text-muted hover:text-foreground transition"
          >
            Or set up Replay MCP &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
