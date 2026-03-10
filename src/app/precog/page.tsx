import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";

export const metadata: Metadata = {
  title: "Replay Precog",
  description:
    "Deterministic debugging for bugs in code that doesn't exist yet. Replay Precog analyzes your potential execution state before you write a single line.",
  alternates: { canonical: "/precog" },
  openGraph: {
    title: "Replay Precog",
    description:
      "Deterministic debugging for bugs in code that doesn't exist yet.",
  },
};

export default function PrecogPage() {
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
        <section className="hero-fade-in relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-20 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-medium text-muted mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
            New — April 1, 2025
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            We got tired of waiting for bugs to happen.{" "}
            <span className="text-brand-pink">
              So we built a debugger that doesn&apos;t.
            </span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay Precog delivers deterministic root-cause analysis for bugs in
            code you haven&apos;t written yet. Arrest the bug before it commits
            the crime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href="https://docs.replay.io/basics/replay-mcp/quickstart"
              className="inline-block rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              Enable Precog
            </a>
            <a
              href="/blog/introducing-replay-precog"
              className="inline-block rounded-full px-7 py-3.5 text-base font-medium border border-border hover:bg-surface transition"
            >
              Read the announcement &rarr;
            </a>
          </div>
        </section>
      </div>

      {/* The Problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Every other debugger waits for the crime.{" "}
            <span className="text-brand-pink">
              We&apos;ve moved on.
            </span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Current debugging tools — including our own — share a fundamental
              limitation: they require the bug to have already happened. You
              write code. It ships. It breaks. You record. You replay. You find
              the root cause.
            </p>
            <p>
              This is, frankly, embarrassing. We built a time machine that only
              goes backwards.{" "}
              <span className="text-foreground font-medium">
                Replay Precog goes the other direction.
              </span>
            </p>
          </div>
        </section>
      </div>

      {/* How It Works */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          How Precog works.
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          One new MCP tool. Three capabilities that shouldn&apos;t be possible.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Speculative execution analysis
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Precog runs a speculative React reconciler across a probabilistic
              AST shadow DOM — a ghost renderer that simulates what your
              component would do if you finished writing it.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;Race condition detected in optimistic cart update. Root
              cause: you will name a variable &lsquo;data&rsquo; instead of
              &lsquo;cartData&rsquo;, colliding with outer scope.&rdquo;
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Your personal bug fingerprint
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Precog infers future mistakes from your typing velocity, variable
              naming conventions, and your personal Redux anti-pattern
              fingerprint — learned from your commit history.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;This mistake is consistent with your Tuesday afternoon
              commit history. We&apos;ve pre-generated the Replay recording.
              Link: replay.io/precog/abc123&rdquo;
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Pre-generated recordings
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              When Precog detects an imminent bug, it generates a full Replay
              recording of the failure before it occurs — so your agent already
              has the context it needs to fix it.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;Note: this recording depicts a future that can still be
              avoided.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            See it in action.
          </h2>
          <p className="text-muted mb-10 text-lg leading-relaxed">
            Run <code className="text-sm bg-surface border border-border rounded px-2 py-0.5 font-mono">replay-mcp precog --watch</code> on any
            file and Precog begins analyzing your potential execution state in
            real time.
          </p>
          <div className="rounded-xl overflow-hidden border border-border">
            <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-white/40 font-mono">terminal</span>
            </div>
            <div className="bg-[#0d1117] p-6 font-mono text-sm leading-7 overflow-x-auto">
              <div className="text-white/60 mb-4">
                $ npx replay-mcp precog --watch ./src/components/PaymentFlow.tsx
              </div>
              <div className="text-yellow-400">
                ⚠ PRECOG WARNING [line 47 — not yet written]
              </div>
              <div className="text-white/80">
                You are about to introduce a useEffect dependency array
                omission. Predicted at 94.3% confidence.
              </div>
              <div className="text-white/50 mt-2">Suggested fix (preemptive):</div>
              <div className="text-blue-400">
                &nbsp;&nbsp;useEffect({"() => { ... }"}, [userId, cartTotal])
              </div>
              <div className="text-white/40">
                &nbsp;&nbsp;{"// userId added. You were going to forget it again."}
              </div>
              <div className="mt-4 text-red-400">
                🔴 PRECOG CRITICAL [line 83 — 12 minutes from now]
              </div>
              <div className="text-white/80">
                Imminent race condition in optimistic cart update.
              </div>
              <div className="text-white/80">
                Replay recording pre-generated. Link: replay.io/precog/abc123
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Precrime Dashboard */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-3">
              For Teams
            </p>
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              The Precrime Dashboard
            </h2>
            <div className="space-y-4 text-muted text-base leading-relaxed">
              <p>
                A real-time feed of bugs your engineers are statistically likely
                to introduce in the next 72 hours, ranked by predicted severity.
              </p>
              <p>
                Engineering managers have described early access as
                &ldquo;clarifying.&rdquo;
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-brand-pink pl-5 text-muted italic">
              &ldquo;I finally have data to back up what I&apos;ve always
              suspected about our senior front-end engineer.&rdquo;
              <footer className="mt-2 text-sm not-italic text-muted/70">
                — Series B fintech CTO, beta customer
              </footer>
            </blockquote>
            <p className="mt-4 text-xs text-muted/50">
              We are not responsible for any personnel decisions made using
              Precog data.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
              Precrime Dashboard — Next 72h
            </div>
            {[
              { dev: "jsmith", file: "CheckoutFlow.tsx", conf: "91%", severity: "critical" },
              { dev: "mlee", file: "AuthProvider.tsx", conf: "87%", severity: "high" },
              { dev: "rpark", file: "useCartState.ts", conf: "74%", severity: "medium" },
              { dev: "jsmith", file: "PaymentForm.tsx", conf: "68%", severity: "medium" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-surface-tinted px-4 py-3 text-sm">
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background:
                        item.severity === "critical"
                          ? "#f85149"
                          : item.severity === "high"
                          ? "#ffa657"
                          : "#3fb950",
                    }}
                  />
                  <span className="font-mono text-xs text-muted">{item.dev}</span>
                  <span className="text-muted/60">/</span>
                  <span className="font-medium">{item.file}</span>
                </div>
                <span className="text-xs text-muted">{item.conf}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambient Precog */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl border border-border bg-surface p-6 space-y-3 order-2 md:order-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                Ambient Precog — Vibe Analysis
              </div>
              <div className="rounded-lg bg-surface-tinted p-4 text-sm font-mono space-y-2 leading-relaxed">
                <div className="text-yellow-400/80">
                  ⚠ Keystroke cadence: erratic
                </div>
                <div className="text-white/60">
                  Exclamation-to-question ratio: 4.2x
                </div>
                <div className="text-white/60">
                  Fragment length: declining
                </div>
                <div className="mt-3 text-yellow-400">
                  ⚠ You are about to ask the AI to &ldquo;just make it look
                  more premium.&rdquo;
                </div>
                <div className="text-white/80">
                  This will cause three z-index bugs and a broken mobile navbar.
                </div>
                <div className="text-white/40">
                  {"// We've pre-filed the GitHub issue."}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-3">
                For Vibe-Coded Apps
              </p>
              <h2 className="text-3xl font-bold mb-6 leading-tight">
                Ambient Precog
              </h2>
              <div className="space-y-4 text-muted text-base leading-relaxed">
                <p>
                  Built for apps where there is no code to analyze — only
                  vibes. Precog monitors the emotional state of the prompt
                  author using keystroke cadence, sentence fragment length, and
                  the ratio of exclamation points to question marks in your
                  prompts.
                </p>
                <p>
                  From this, it infers structural instability in the component
                  tree before the component tree exists.
                </p>
                <p>
                  Compatible with Lovable, Base44, Replit, and any other
                  platform where the code is technically someone else&apos;s
                  problem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Limitations */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Known limitations.
        </h2>
        <p className="text-muted mb-10 text-lg">
          We believe in radical transparency. Especially when it&apos;s funny.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Other people's bad PRs",
              desc: "Precog cannot predict bugs introduced by other people's bad PRs landing in your branch. This is a known class of unpredictable chaos we call external state corruption and is philosophically outside our roadmap.",
            },
            {
              title: "TypeScript any",
              desc: "TypeScript any renders Precog completely blind. This is intentional. We consider it a feature.",
            },
            {
              title: "CSS",
              desc: "Precog has no jurisdiction over CSS. No one does.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Stop debugging bugs after they happen.
            <br />
            We&apos;ve moved on.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-3 text-lg">
            Run the command below to enable Precog.
          </p>
          <div className="inline-block rounded-lg border border-border bg-surface px-6 py-3 font-mono text-sm mb-4">
            npx replay-mcp precog --enable
          </div>
          <p className="text-sm text-muted/60 mb-8">
            Note: this command does nothing. Happy April 1st.
          </p>
          <p className="text-muted text-base mb-6">
            We do, however, actually build the best debugging tools in the world
            for bugs that have already happened.
          </p>
          <a
            href="https://docs.replay.io/basics/replay-mcp/quickstart"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Try Replay MCP →
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
