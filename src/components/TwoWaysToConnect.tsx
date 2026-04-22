import Image from "next/image";
import cliAnimationGif from "@/images/CLIAnimation.gif";
import browserSidebarRevealGif from "@/images/BrowserSidebarReveal.gif";

export default function TwoWaysToConnect() {
  return (
    <div className="bg-background">
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight">
          Two products. One loop.
        </h2>
        <p className="text-muted text-center text-lg max-w-xl mx-auto mb-12">
          The CI Agent closes the loop in your pipeline. Replay MCP brings
          time-travel debugging to your IDE.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          {/* CI Agent */}
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-2">
              Replay CI Agent
            </p>
            <p className="text-xs text-muted uppercase tracking-widest mb-4">
              For engineering teams
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
              Install the GitHub bot on your repo. For every PR, Replay records
              your Playwright and Cypress runs. When a test fails, it analyzes
              the recording and posts the root cause plus a suggested fix as a
              PR comment. No manual debugging. No reproduction required.
            </p>
            <a
              href="https://docs.replay.io/basics/replay-ci-agent/overview"
              className="text-sm font-medium text-brand-pink hover:opacity-80 transition mt-auto"
            >
              Install the CI Agent &rarr;
            </a>
          </div>

          {/* Replay MCP */}
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-purple mb-2">
              Replay MCP
            </p>
            <p className="text-xs text-muted uppercase tracking-widest mb-4">
              For engineers using AI coding agents
            </p>
            <div className="rounded-lg border border-border bg-surface-tinted overflow-hidden mb-6">
              <Image
                src={browserSidebarRevealGif}
                alt="Replay MCP — time-travel debugging in your IDE"
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <h3 className="text-base font-semibold mb-2">
              Time-travel debugging, inside your IDE.
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
              Install Replay MCP in one command and connect it to Cursor, Claude
              Code, Codex, Copilot, or Windsurf. Your coding agent can now step through
              any recorded execution, trace root causes, and implement fixes
              without leaving your IDE.
            </p>
            <a
              href="https://docs.replay.io/basics/replay-mcp/overview"
              className="text-sm font-medium text-brand-purple hover:opacity-80 transition mt-auto"
            >
              Read the docs &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
