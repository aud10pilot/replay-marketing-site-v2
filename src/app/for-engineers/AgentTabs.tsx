"use client";

import { useState } from "react";

const agents = [
  {
    name: "Cursor",
    steps: [
      "Run: npx replay-mcp install",
      'Open Cursor Settings → MCP → verify "replay-mcp" is listed',
      "Start debugging — Replay MCP is ready to use",
    ],
  },
  {
    name: "Claude Code",
    steps: [
      "Run: npx replay-mcp install",
      "Claude Code auto-detects MCP servers — no extra config needed",
      "Start debugging — Replay MCP is ready to use",
    ],
  },
  {
    name: "Codex",
    steps: [
      "Run: npx replay-mcp install",
      "Add Replay MCP to your Codex MCP config — see docs for the config snippet",
      "Start debugging — Replay MCP is ready to use",
    ],
  },
  {
    name: "Copilot",
    steps: [
      "Run: npx replay-mcp install",
      "Open VS Code Settings → search MCP → verify Replay is listed",
      "Start debugging — Replay MCP is ready to use",
    ],
  },
  {
    name: "Windsurf",
    steps: [
      "Run: npx replay-mcp install",
      "Open Windsurf Settings → MCP → verify Replay is connected",
      "Start debugging — Replay MCP is ready to use",
    ],
  },
];

export default function AgentTabs() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-2 mb-6 justify-center flex-wrap">
        {agents.map((agent, i) => (
          <button
            key={agent.name}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
              active === i
                ? "bg-brand-pink text-white"
                : "border border-border text-muted hover:text-foreground hover:border-foreground/20"
            }`}
          >
            {agent.name}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="space-y-4">
          {agents[active].steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-sm text-muted leading-relaxed pt-1">
                {step.startsWith("Run:") ? (
                  <>
                    Run:{" "}
                    <code className="font-mono bg-surface-tinted px-2 py-0.5 rounded text-foreground">
                      {step.replace("Run: ", "")}
                    </code>
                  </>
                ) : (
                  step
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
