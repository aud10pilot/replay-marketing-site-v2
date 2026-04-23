import Image from "next/image";
import cliAnimationGif from "@/images/CLIAnimation.gif";
import browserSidebarRevealGif from "@/images/BrowserSidebarReveal.gif";
import brokenButtonGif from "@/images/mcp/brokenButton.gif";

export default function TwoWaysToConnect() {
  return (
    <div className="bg-background">
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight">
          Three ways to Replay
        </h2>
        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
          Replay&apos;s time-travel debugging works wherever your tests run and
          wherever your agent works. Most teams use all three.
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          {/* CI Pipeline */}
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-4">
              In your CI pipeline
            </p>
            <div className="rounded-lg border border-border bg-surface-tinted overflow-hidden mb-6">
              <Image
                src={cliAnimationGif}
                alt="Replay CI Agent — test failure to PR fix"
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <h3 className="text-base font-semibold mb-2">
              Test fails. Fix lands on your PR.
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
              The Replay CI Agent installs as a GitHub bot. It records every
              Playwright and Cypress run on every PR. When a test fails, Replay
              analyzes the recording and posts root cause plus a suggested fix
              as a PR comment — automatically.
            </p>
            <a
              href="https://docs.replay.io/basics/replay-ci-agent/overview"
              className="text-sm font-medium text-brand-pink hover:opacity-80 transition mt-auto"
            >
              Set up the CI Agent &rarr;
            </a>
          </div>

          {/* IDE */}
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-purple mb-4">
              In your IDE
            </p>
            <div className="rounded-lg border border-border bg-surface-tinted overflow-hidden mb-6">
              <Image
                src={brokenButtonGif}
                alt="Replay MCP — time-travel debugging in your IDE"
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <h3 className="text-base font-semibold mb-2">
              Your agent time-travels through the recording.
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
              Replay MCP connects to Cursor, Claude Code, Codex, Copilot, or
              Windsurf in one command. Your coding agent can step through any
              recorded execution, inspect state at any point in time, and
              identify root causes — right inside your IDE.
            </p>
            <a
              href="https://docs.replay.io/basics/replay-mcp/overview"
              className="text-sm font-medium text-brand-purple hover:opacity-80 transition mt-auto"
            >
              Set up Replay MCP &rarr;
            </a>
          </div>

          {/* Browser */}
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-4">
              In your browser
            </p>
            <div className="rounded-lg border border-border bg-surface-tinted overflow-hidden mb-6">
              <Image
                src={browserSidebarRevealGif}
                alt="Replay Chrome extension — record and debug in the browser"
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <h3 className="text-base font-semibold mb-2">
              Record any bug, anywhere.
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
              The Replay Chrome extension lets engineers and QA capture a
              deterministic recording of any bug — on localhost, a staging
              environment, or production. Record it once, hand it to your agent
              or step through it yourself. No reproduction required.
            </p>
            <a
              href="https://docs.replay.io/basics/replay-chrome-extension/getting-started"
              className="text-sm font-medium text-brand-pink hover:opacity-80 transition mt-auto"
            >
              Install the extension &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
