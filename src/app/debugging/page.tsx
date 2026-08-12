import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import BugToFixTabs from "@/components/BugToFixTabs";
import WarpSpeedBg from "@/components/WarpSpeedBg";

export const metadata: Metadata = pageMetadata({
  title: "Replay for Debugging — Fix the Bug Your Agent Can't Figure Out",
  description:
    "Record your app and get a deterministic capture of everything that happened. Let your coding agent investigate via Replay MCP, or dig in yourself with Replay DevTools.",
  canonical: "/debugging",
});

const faqs = [
  {
    q: "Is this different from Replay CI Agent?",
    a: "Yes. CI Agent automatically records and analyzes your E2E test failures in your CI pipeline — no manual work needed. This page is about using Replay to debug specific bugs on your own, outside of CI. Same time-travel technology, different workflow.",
  },
  {
    q: "Does Replay MCP work with my coding agent?",
    a: "Replay MCP works with Claude Code, Codex, Cursor, Windsurf, or any MCP-compatible tool. If your agent supports MCP, it can use Replay.",
  },
  {
    q: "Do I need to use MCP, or can I just use DevTools?",
    a: "Both work. Replay DevTools gives you a visual debugging interface with time-travel controls. Replay MCP lets your coding agent access the same data programmatically. Use whichever fits your workflow — or both.",
  },
  {
    q: "What does Replay actually record?",
    a: "Everything. Every function call, every DOM mutation, every network request, every state change, every event handler. It's a deterministic capture of the program execution, not a video or a log file. You can inspect any moment in the recording as if you paused the debugger right there.",
  },
  {
    q: "Does it only work with React?",
    a: "No. Replay records the entire browser runtime — any JavaScript framework works. React teams get additional insights from built-in React DevTools, component render analysis, and Redux / Zustand / TanStack Query state tracking integrations.",
  },
  {
    q: "Is Replay free for individual use?",
    a: "The Free plan lets you record and investigate with no time limit — start without a credit card. For higher volume, individual debugging is available on the Growth plan at $299/mo — or reach out if you're an individual developer and we'll figure something out.",
  },
];

export default function DebuggingPage() {
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            Individual Debugging
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Fix the bug your
            <br />
            <span className="text-brand-pink">agent can&apos;t figure out.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay is a time-travel debugger. Record your app, and get a deterministic capture of everything that happened — every function call, every state change, every network request. Then let your coding agent analyze it, or investigate it yourself.
          </p>
          <a
            href="https://docs.replay.io/basics/replay-mcp/overview"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Get started with Replay MCP &rarr;
          </a>
          <p className="text-xs text-muted text-center mt-3">
            Free to start &middot; No credit card required
          </p>
        </section>
      </div>

      {/* Problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 leading-tight">
            Your agent is fast.
            <br />
            <span className="text-brand-pink">But it&apos;s debugging blind.</span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Your coding agent can read your code, run your tests, and suggest fixes. But when the bug is subtle — a race condition, a state update that fires twice, a redirect that silently fails — it&apos;s stuck guessing from error messages and source code alone.
            </p>
            <p>
              It doesn&apos;t know what actually <em>happened</em> at runtime. It can&apos;t see which component re-rendered, what the network response actually contained, or which event handler fired first. So it suggests a fix, you try it, it doesn&apos;t work, and the cycle repeats.
            </p>
            <p>
              <span className="text-foreground font-medium">Replay gives your agent — and you — the runtime data that turns guessing into knowing.</span>
            </p>
          </div>
        </section>
      </div>

      {/* That's why we created Replay */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4">
          That&apos;s why we created Replay
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          Give your agent
          <br className="hidden sm:block" />
          the power of time-travel
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          Replay captures a deterministic recording — every DOM change, network request, JS execution frame, and state update. Your agent can analyze it, trace the exact causal chain, and identify the root cause. Or you can inspect it yourself in DevTools. No guessing. No re-running with extra logs.
        </p>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-6 border border-border rounded-xl p-5">
          <div className="w-64 flex-shrink-0 aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/Ew5Yc2Hni-8"
              title="That's why we created Replay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-sm text-muted leading-relaxed">
            You might be thinking &ldquo;<em className="italic underline decoration-brand-pink decoration-1">how is this different than the monitoring tools I&apos;m already using?</em>&rdquo; We made this video for you.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
          How it works
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 leading-tight">
          Record &rarr; Investigate &rarr; Fix
        </h2>

        <div className="flex flex-col gap-10">
          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-pink font-bold text-sm">1</span>
              </div>
              <div className="w-px flex-1 bg-border mt-2" />
            </div>
            <div className="pb-10 flex-1">
              <h3 className="text-base font-semibold mb-4">Record the bug</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">
                Reproduce the issue while Replay captures everything — every function call, every state change, every network request. Not a video. The actual program execution.
              </p>
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface-tinted">
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted">Method</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted">Best for</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted">How</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border bg-surface">
                      <td className="px-4 py-3.5 font-medium whitespace-nowrap">
                        Replay CLI<br />
                        <code className="font-mono text-xs text-muted">replayio</code>
                      </td>
                      <td className="px-4 py-3.5 text-muted">Developers comfortable with the terminal, CI integration, agent-driven recording</td>
                      <td className="px-4 py-3.5 text-muted">
                        <code className="font-mono text-xs bg-surface-tinted px-1.5 py-0.5 rounded">npx replayio record &lt;url&gt;</code>
                        <span className="block mt-1 text-xs">— or let your coding agent run it</span>
                      </td>
                    </tr>
                    <tr className="bg-surface">
                      <td className="px-4 py-3.5 font-medium whitespace-nowrap">Chrome Extension</td>
                      <td className="px-4 py-3.5 text-muted">Quick captures, visual workflows, vibe coding</td>
                      <td className="px-4 py-3.5 text-muted">Click the Replay extension icon &rarr; reproduce the bug &rarr; stop recording</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-pink font-bold text-sm">2</span>
              </div>
              <div className="w-px flex-1 bg-border mt-2" />
            </div>
            <div className="pb-10 flex-1">
              <h3 className="text-base font-semibold mb-4">Investigate</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">
                Once you have a recording, you have two paths:
              </p>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-border bg-surface p-5">
                  <h4 className="text-sm font-semibold mb-2">Let your coding agent investigate via Replay MCP</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Add Replay MCP to your coding agent (Claude Code, Codex, Cursor, etc.). Point it at the recording. Your agent can now inspect the actual runtime — set logpoints, trace function calls, examine state changes, follow render chains. It&apos;s debugging with evidence instead of guessing from source code.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-5">
                  <h4 className="text-sm font-semibold mb-2">Investigate yourself with Replay DevTools</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Open the recording in Replay DevTools — a familiar browser DevTools interface with time-travel superpowers. Step forward and backward through execution. Add logpoints (like console.logs, but retroactive — no re-running needed). Inspect any moment in the recording as if you paused the debugger right there.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-pink font-bold text-sm">3</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold mb-3">Fix with confidence</h3>
              <p className="text-sm text-muted leading-relaxed">
                Whether your agent found it or you did, you now know <em>exactly</em> what happened. The root cause is clear because you saw it in the actual execution — not inferred from logs or guessed from the stack trace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Replay Sees */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            The runtime context that changes everything
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-14">
            Without a Replay recording, your coding agent can only read source code and error messages. With one, it can see:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                label: "What actually executed",
                detail: "The exact sequence of function calls, not what you think ran. Every function on every frame, with arguments and return values.",
              },
              {
                label: "State at any point in time",
                detail: "React component state, Redux / Zustand / TanStack Query stores, local variables — all inspectable at any moment in the recording.",
              },
              {
                label: "Network reality",
                detail: "Every request and response with full payloads and timing. Not what the code intended to send — what actually went over the wire.",
              },
              {
                label: "DOM as it was",
                detail: "The actual DOM at any moment in time, not a reconstruction. See exactly what the user saw and when.",
              },
              {
                label: "Render behavior",
                detail: "Which components re-rendered, what triggered them, and whether it was necessary. Follow the full component tree at any point.",
              },
              {
                label: "Event sequence",
                detail: "Every event handler that fired, in order, with the state before and after. No more guessing about race conditions.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold mb-2">{item.label}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted mt-10 italic">
            This is the difference between debugging with evidence and debugging with intuition.
          </p>
        </section>
      </div>

      {/* Live Example — BugToFixTabs */}
      <BugToFixTabs />

      {/* Real Investigations */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            Time Travelogues
          </p>
          <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
            Agents solving real bugs with Replay MCP
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            These aren&apos;t toy demos. Real bugs, real codebases, full evidence trails.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
              <p className="text-4xl font-bold text-brand-pink mb-3">7 min</p>
              <h3 className="text-base font-semibold mb-3">
                How Replay MCP helped find a React bug faster than Dan Abramov did
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                Dan Abramov filed a <code className="font-mono text-xs bg-surface-tinted px-1 py-0.5 rounded">useDeferredValue</code> race condition in React 19 that his own AI agent failed to diagnose in an initial session. With Replay recordings, four parallel agents all identified the root cause in under 30 minutes — the best run took 7 minutes. No manual instrumentation, no rebuilding React with logs.
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
                Improving Nadia&apos;s &ldquo;debugging with AI&rdquo; results using Replay MCP
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                Nadia Makarevich tested AI debugging against three realistic Next.js app bugs. Without Replay, the agent fixed 1 of 3 root causes correctly. With Replay MCP, agents found all three — including an architectural issue requiring understanding of Next.js data flow across the server/client boundary.
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

      {/* Works With Your Stack */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Any JavaScript app. Any coding agent.
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12">
          Deeper insights for React.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">Apps</h3>
            <p className="text-sm text-muted leading-relaxed">
              React, Vue, Angular, Svelte, Next.js, Remix, jQuery, vanilla JS — if it runs in the browser, Replay records it.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">Coding agents</h3>
            <p className="text-sm text-muted leading-relaxed">
              Replay MCP works with Claude Code, Codex, Cursor, Windsurf, or any MCP-compatible tool.
            </p>
          </div>
          <div className="rounded-xl border border-brand-purple/30 bg-brand-purple/5 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">React gets more</h3>
            <p className="text-sm text-muted leading-relaxed">
              Built-in React DevTools, component render chain analysis, Redux / Zustand / TanStack Query state tracking, and framework-aware diagnostics.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Start debugging in under 5 minutes</h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-12">Three ways to record — pick the one that fits your workflow.</p>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-full">Option A</span>
                <h3 className="text-sm font-semibold">Replay MCP — agent-driven</h3>
              </div>
              <ol className="text-sm text-muted space-y-1.5 list-decimal list-inside leading-relaxed">
                <li>Install Replay MCP in your coding agent</li>
                <li>Record: <code className="font-mono text-xs bg-surface-tinted px-1 py-0.5 rounded">npx replayio record https://your-app.localhost:3000</code></li>
                <li>Tell your agent: &ldquo;Debug this Replay recording — [recording URL]&rdquo;</li>
              </ol>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink bg-brand-pink/10 px-2.5 py-1 rounded-full">Option B</span>
                <h3 className="text-sm font-semibold">Chrome Extension — visual</h3>
              </div>
              <ol className="text-sm text-muted space-y-1.5 list-decimal list-inside leading-relaxed">
                <li>Install the Replay Chrome extension</li>
                <li>Click record, reproduce the bug, stop recording</li>
                <li>Open the recording in Replay DevTools — or share the URL with your coding agent via MCP</li>
              </ol>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted bg-surface-tinted px-2.5 py-1 rounded-full">Option C</span>
                <h3 className="text-sm font-semibold">CLI — manual or scripted</h3>
              </div>
              <ol className="text-sm text-muted space-y-1.5 list-decimal list-inside leading-relaxed">
                <li>Install: <code className="font-mono text-xs bg-surface-tinted px-1 py-0.5 rounded">npm install -g replayio</code></li>
                <li>Record: <code className="font-mono text-xs bg-surface-tinted px-1 py-0.5 rounded">replayio record &lt;url&gt;</code></li>
                <li>Investigate in DevTools or via MCP</li>
              </ol>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Common questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* CI Agent callout */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-1.5">Also from Replay</p>
              <h3 className="text-base font-semibold mb-1">Want automated analysis on every CI failure?</h3>
              <p className="text-sm text-muted leading-relaxed max-w-lg">
                Replay CI Agent records every E2E test run automatically and posts root cause + fix as a PR comment — no manual recording needed. Free plan available, $299/mo for Growth.
              </p>
            </div>
            <a
              href="/"
              className="flex-shrink-0 rounded-full px-6 py-2.5 text-sm font-medium text-white transition whitespace-nowrap"
              style={{ background: "var(--brand-gradient)" }}
            >
              Learn about CI Agent &rarr;
            </a>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Stop guessing. Start seeing.
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
          Record your first bug and let Replay show you what actually happened.
        </p>
        <a
          href="https://docs.replay.io/basics/replay-mcp/overview"
          className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Get started with Replay MCP &rarr;
        </a>
        <p className="text-xs text-muted mt-3">Free to start &middot; No credit card required</p>
      </section>

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
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group rounded-xl border border-border bg-surface overflow-hidden"
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
      <div className="px-5 pb-4 pt-3 text-sm text-muted leading-relaxed border-t border-border">
        {answer}
      </div>
    </details>
  );
}
