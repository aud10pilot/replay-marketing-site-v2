import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroUrlInput from "@/components/HeroUrlInput";

export const metadata: Metadata = pageMetadata({
  title: "Replay QA vs. the Alternatives | Replay",
  description:
    "How Replay QA compares to QA Wolf, Ranger, Meticulous, Tester Army, CodeRabbit, Qodo, Checkly, and the test suite you already have. Most of them read code or need a test suite. Replay QA runs the app.",
  canonical: "/replayqa-comparisons",
  social: {
    description:
      "Yeah, but how is this different from what we already have? The honest answer, tool by tool.",
  },
});

const axes = [
  {
    title: "It runs your app instead of reading your code",
    body: "Most tools in this space do static analysis: they read diffs, flag patterns, generate test code. No amount of source reading tells you the checkout button stopped working on mobile Safari. Replay QA drives a real browser and watches what actually happens.",
  },
  {
    title: "It diagnoses instead of detecting",
    body: "Almost everything else tells you something broke. Replay QA time-travels through a deterministic recording to the function that threw, the request that timed out, or the state change that broke the render, then writes the fix.",
  },
  {
    title: "There is no test suite",
    body: "Nothing to author, nothing to maintain, nothing that breaks when the UI moves. A swarm of agents explores the app, decides which journeys matter, and generates its own sessions from a URL.",
  },
  {
    title: "The output is built for an agent",
    body: "Competing tools produce dashboards, videos, and PR comments for a human to read. Replay QA produces a structured report with root cause and a fix your coding agent can apply without a person in the middle.",
  },
];

type Tool = {
  name: string;
  /** Parallel claims. `them[i]` and `us[i]` should answer the same question. */
  them: string[];
  us: string[];
};

const groups: { objection: string; kind: string; tools: Tool[] }[] = [
  {
    objection: "We already have tests.",
    kind: "Test frameworks, test generation, and test infrastructure",
    tools: [
      {
        name: "Playwright, Selenium, Cypress",
        them: [
          "Runs the tests your team wrote, in the order they wrote them.",
          "Coverage stops where someone stopped writing.",
          "A failure gives you a stack trace and a screenshot.",
        ],
        us: [
          "Explores the app and writes its own sessions, using Playwright underneath.",
          "Coverage is the whole app, on every change.",
          "A failure gives you the root cause and a fix.",
        ],
      },
      {
        name: "QA Wolf",
        them: [
          "Builds and maintains a Playwright suite for you, with QA engineers on the premium tier.",
          "The deliverable is test code.",
          "When a test goes red, someone still works out why.",
        ],
        us: [
          "Needs no suite at all. Point it at a URL.",
          "The deliverable is a diagnosis.",
          "The root cause arrives with the bug report.",
        ],
      },
      {
        name: "Ranger",
        them: [
          "Manages and auto-maintains a test suite; agents self-check through its CLI.",
          "Captures screenshots, video, and traces, then triages to a verdict.",
          "Prices per user.",
        ],
        us: [
          "Starts from a URL. No suite, no CLI, nothing to install locally.",
          "Records at the Chromium level and traces the causal chain to the line that broke.",
          "Prices on how much testing you run, not how many people are on the account.",
        ],
      },
      {
        name: "Meticulous",
        them: [
          "Needs live user traffic to seed coverage.",
          "Generates a test suite that a developer reviews in CI.",
        ],
        us: [
          "Explores from a URL. No traffic required, so it works on day one.",
          "Generates bug reports with no reviewer in the loop.",
        ],
      },
      {
        name: "Tester Army",
        them: [
          "You write the journeys, in plain English.",
          "Tells you a journey failed.",
        ],
        us: [
          "Writes its own journeys after mapping the app.",
          "Tells you why it failed.",
        ],
      },
      {
        name: "Sauce Labs, BrowserStack",
        them: [
          "Infrastructure that runs your suite across browsers and devices.",
          "You bring the tests.",
        ],
        us: [
          "Decides what is worth testing, then explains what broke.",
          "It brings its own.",
        ],
      },
    ],
  },
  {
    objection: "We already have code review.",
    kind: "Source-code analysis on pull requests",
    tools: [
      {
        name: "CodeRabbit",
        them: [
          "Reads the diff and asks whether the code is well written.",
          "Catches bad patterns, security gaps, and style violations.",
        ],
        us: [
          "Runs the app and asks whether it still works.",
          "Catches broken flows, layout shifts, slow calls, and accessibility failures.",
        ],
      },
      {
        name: "Qodo",
        them: [
          "Static analysis across PRs and the IDE. Never opens a browser.",
          "Catches logic gaps and security issues in the source.",
        ],
        us: [
          "Drives a real browser. Never reads your source.",
          "Catches behavior that only fails at runtime.",
        ],
      },
    ],
  },
  {
    objection: "We already have monitoring.",
    kind: "Production and synthetic checks",
    tools: [
      {
        name: "Checkly",
        them: [
          "Runs a fixed set of monitors on a schedule against production.",
          "Alerts you after the code shipped.",
          "Summarizes what failed.",
        ],
        us: [
          "Explores the whole app on every change.",
          "Catches it on the pull request, before it ships.",
          "Traces the failure to its cause and proposes the fix.",
        ],
      },
    ],
  },
];

/**
 * Side-by-side card. `them` and `us` are index-aligned, so each row reads as one
 * claim answered by its counterpart. Keep the two arrays the same length.
 */
function ToolCompare({ tool }: { tool: Tool }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden bg-surface">
      <div className="grid md:grid-cols-2">
        {/* Them */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-border">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-4">
            {tool.name}
          </p>
          <div className="space-y-3">
            {tool.them.map((line) => (
              <p key={line} className="text-sm text-muted leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Us */}
        <div className="p-6 bg-brand-pink/[0.04]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-pink mb-4">
            Replay QA
          </p>
          <div className="space-y-3">
            {tool.us.map((line) => (
              <p key={line} className="text-sm text-foreground leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReplayQaVsCompetitorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" aria-hidden="true" />
          Replay QA vs. the alternatives
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
          &ldquo;How is this different from{" "}
          <span className="text-brand-pink italic">what we already have?</span>&rdquo;
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
          It&apos;s the first question every team asks. Here&apos;s the honest answer,
          tool by tool. Almost everything Replay QA gets compared to either reads your
          code or runs a test suite somebody wrote. Replay QA runs your app and explains
          what broke.
        </p>
        <a
          href="https://qa.replay.io/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Get started for free
        </a>
        <p className="text-xs text-muted mt-4">
          Set up in under 5min &bull; No credit card &bull; No test suite required
        </p>
      </section>

      {/* Four axes */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
            The short version
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 leading-tight">
            Four things that make it a different kind of product
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {axes.map((a) => (
              <div key={a.title} className="rounded-xl border border-border bg-surface p-7">
                <h3 className="text-base font-semibold tracking-tight mb-3 leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* At a glance */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
          At a glance
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Where each tool operates, and what Replay QA does that it doesn&apos;t.
        </p>
        <div className="rounded-xl border border-border overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-border bg-surface-tinted">
                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  Tool
                </th>
                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  Operates on
                </th>
                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  Needs a test suite
                </th>
                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-brand-pink">
                  Tells you why it broke
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Playwright, Selenium, Cypress", "The browser", "Yes, you write it", "No"],
                ["QA Wolf", "The browser", "Yes, they write it", "No"],
                ["Ranger", "The browser", "Yes, it maintains one", "Triages to a verdict"],
                ["Meticulous", "The browser", "Yes, generated from traffic", "No"],
                ["Tester Army", "The browser", "Yes, in plain English", "No"],
                ["Sauce Labs, BrowserStack", "The browser", "Yes, you bring it", "No"],
                ["CodeRabbit", "Source code", "No", "Code-level only"],
                ["Qodo", "Source code", "No", "Code-level only"],
                ["Checkly", "Production", "Yes, as monitors", "Summarizes the failure"],
                ["Replay QA", "The browser", "No", "Yes, with a fix"],
              ].map((row, i, arr) => {
                const isReplay = i === arr.length - 1;
                return (
                  <tr
                    key={row[0]}
                    className={`${
                      isReplay
                        ? "bg-brand-pink/[0.04] font-medium"
                        : "bg-surface"
                    } ${i < arr.length - 1 ? "border-b border-border" : ""}`}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-4 align-top leading-relaxed ${
                          j === 0 && !isReplay ? "text-muted" : ""
                        } ${isReplay && j === 3 ? "text-brand-pink" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Grouped objections */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
            Tool by tool
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-14 leading-tight">
            The three things teams say they already have
          </h2>

          <div className="flex flex-col gap-14">
            {groups.map((group) => (
              <div key={group.objection}>
                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  &ldquo;{group.objection}&rdquo;
                </h3>
                <p className="text-sm text-muted mb-6">{group.kind}</p>
                <div className="flex flex-col gap-5">
                  {group.tools.map((tool) => (
                    <ToolCompare key={tool.name} tool={tool} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Built it internally */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">
          The fifth answer
        </p>
        <h2 className="text-3xl font-bold tracking-tight leading-tight mb-6">
          &ldquo;We built something internally.&rdquo;
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Most teams who reach this conversation have already tried. Someone wired up a
            headless browser, pointed an agent at it, and got something working. At low
            volume it usually does work.
          </p>
          <p>
            The problems show up later. Throughput hits a ceiling. Maintenance becomes
            somebody&apos;s recurring job. And the output stays raw, recordings and
            analysis rather than structured reports an agent can act on without a person
            translating first.
          </p>
          <p>
            <span className="text-foreground font-medium">
              What you built is a tool, specific to your pipeline and maintained by your
              team. Replay QA is infrastructure, maintained by us.
            </span>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            Easier to see than to argue about.
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            Point Replay QA at your app and compare what it finds against whatever
            you&apos;re running today.
          </p>
          <HeroUrlInput />
          <p className="text-sm text-muted mt-8">
            Wondering how it works?{" "}
            <a
              href="/how-it-works"
              className="text-brand-pink hover:opacity-80 transition font-medium"
            >
              See the full walkthrough
            </a>{" "}
            or{" "}
            <a
              href="/for-teams"
              className="text-brand-pink hover:opacity-80 transition font-medium"
            >
              Replay QA for teams
            </a>
            .
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
