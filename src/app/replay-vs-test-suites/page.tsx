import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroUrlInput from "@/components/HeroUrlInput";

export const metadata: Metadata = {
  title: "Replay QA vs. Playwright & Selenium | Replay",
  description:
    "You have Playwright. You still have bugs. Replay QA writes its own tests, explores your whole app, and tells you the root cause when something fails. No test authoring required.",
  alternates: { canonical: "/replay-vs-test-suites" },
  openGraph: {
    title: "Replay QA vs. Playwright & Selenium | Replay",
    description:
      "Your test suite covers what someone wrote a test for. Replay QA covers the rest, and tells you the root cause when it finds a bug.",
  },
};

const compareRows: [string, string, string][] = [
  ["Setup", "Write and maintain test scripts", "Give it a URL. It explores automatically"],
  ["Test authoring", "Manual, ongoing", "None. It generates its own test sessions"],
  ["Coverage", "Only what someone wrote a test for", "Full app surface, continuously"],
  ["When a test fails", "Stack trace + screenshot", "Root cause analysis + suggested fix"],
  ["Debugging", "Manual reproduction", "Time-travel through a full recording"],
  ["Maintenance", "Tests break as the UI changes", "Adapts automatically, no test files"],
  ["Underlying engine", "Playwright / Selenium", "Uses Playwright internally"],
];

const faqs = [
  {
    q: "We already have 80% test coverage. Why do we need this?",
    a: "Coverage metrics measure how many lines of code are touched by tests, not whether your app works for users. Replay QA tests the real experience: does the button work, does the page load in time, does the flow complete without errors? Most coverage metrics don't answer those questions.",
  },
  {
    q: "Won't this create duplicate work alongside our existing suite?",
    a: "No, it runs in parallel. Your existing Playwright tests keep doing what they do, and Replay QA covers the surface area they don't: new features without tests, edge cases, full user journeys, visual and accessibility checks. The output (bug reports, root cause analysis) feeds the same coding agents your team is already using.",
  },
  {
    q: "We don't want to give up control over our test cases.",
    a: "You don't have to. If you prefer to keep writing your own tests, Replay QA still works as a second layer: it runs autonomous exploration alongside your suite and gives you root cause analysis when your tests fail.",
  },
  {
    q: "How is this different from something like Cypress or Testim?",
    a: "Cypress and Testim are still test runners. Someone has to author and maintain the test cases, and when a test fails you get a failed assertion. Replay QA writes its own sessions, needs no test authoring, and tells you the root cause and the fix when it finds a bug. The time-travel debugger is what makes that possible, and no other tool has one.",
  },
  {
    q: "What if our app requires login or has complex auth flows?",
    a: "Replay QA supports authenticated flows. Give it login credentials and it gets past the auth wall, then tests everything behind it.",
  },
];

export default function ReplayVsTestSuitesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" aria-hidden="true" />
          Replay QA vs. Playwright &amp; Selenium
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
          You have Playwright.
          <br />
          <span className="text-brand-pink">You still have bugs.</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
          Playwright and Selenium are great test runners. But someone has to write the
          tests, maintain them, and debug every failure. Replay QA does all of that
          automatically, and catches bugs your test suite never could.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/how-it-works"
            className="inline-block rounded-full px-7 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            See how it works &rarr;
          </a>
          <a
            href="https://qa.replay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-7 py-3 text-sm font-medium text-muted border border-border hover:text-foreground hover:border-foreground/20 transition"
          >
            Try it free
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">
          Replay QA vs. Playwright
        </p>
        <h2 className="text-3xl font-bold tracking-tight leading-tight mb-6">
          Replay QA writes Playwright tests
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Playwright is excellent software. So is Selenium. They&apos;re the right tools
            for running automated browser tests, and if you have them set up, you should
            keep them.
          </p>
          <p>
            Tech leads keep asking us the same question: if we already have Playwright,
            why do we need Replay QA?
          </p>
        </div>
      </section>

      {/* The problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">
            The problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight leading-tight mb-6">
            A test suite only covers what you thought to test.
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              When you write a Playwright test, you&apos;re encoding an assumption: this
              flow should work this way. That&apos;s valuable. But it means your test suite
              is only as good as your foresight, and it only grows when someone takes the
              time to write more tests.
            </p>
            <p>Two things happen in practice:</p>
            <ol className="space-y-3 list-decimal list-inside">
              <li>
                <span className="text-foreground font-medium">Coverage gaps. </span>
                New features ship without tests. Edge cases nobody thought of go
                uncovered. The test suite slowly falls behind the codebase.
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Red lights with no answers.{" "}
                </span>
                A test fails in CI. It tells you which assertion failed, on which line. It
                doesn&apos;t tell you why the network call was slow, why the button was
                unclickable, or what changed in the runtime that caused it. Someone has to
                go debug it manually.
              </li>
            </ol>
            <p>
              Replay QA solves both. It runs alongside Playwright and does the things
              Playwright was never designed to do.
            </p>
          </div>
        </section>
      </div>

      {/* Comparison table */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4 text-center">
          The difference
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          What you get with each
        </h2>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-tinted">
                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  <span className="sr-only">Category</span>
                </th>
                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  Playwright / Selenium
                </th>
                <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-widest text-brand-pink">
                  Replay QA
                </th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(([label, them, us], i) => (
                <tr
                  key={label}
                  className={`bg-surface ${
                    i < compareRows.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <td className="px-5 py-4 align-top text-muted font-medium">{label}</td>
                  <td className="px-5 py-4 align-top leading-relaxed">{them}</td>
                  <td className="px-5 py-4 align-top leading-relaxed">{us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted text-center mt-4">
          Replay QA uses Playwright internally to run sessions. The difference is
          everything that happens before and after.
        </p>
      </section>

      {/* Four differences */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">
            Four things that are different
          </p>
          <h2 className="text-3xl font-bold tracking-tight leading-tight mb-12">
            Replay QA sits a layer above your test runner.
          </h2>

          <div className="flex flex-col">
            <Difference n={1} headline="Zero setup. No test cases to write.">
              <p>
                With Playwright or Selenium, someone writes the tests. That takes time,
                expertise, and ongoing maintenance. Every time a UI changes, tests break.
                Someone has to fix them.
              </p>
              <p>
                Replay QA starts with a URL. It explores your app, maps the user journeys
                itself, and generates its own test sessions with no further input. When
                your code changes, it adapts automatically. There are no test files to
                maintain.
              </p>
            </Difference>

            <Difference
              n={2}
              headline="Replay QA writes Playwright tests. You don't have to."
            >
              <p>
                Replay QA generates Playwright tests as part of its process, based on what
                it discovers about your app. Those tests get captured as Replay Recordings,
                so you get a full runtime snapshot your team can inspect, share, and feed
                to a coding agent instead of a script that only reports pass or fail.
              </p>
              <p>
                If you connect a GitHub repo, those tests run automatically on every push.
                You get Playwright-based test coverage without anyone on your team writing
                a single test.
              </p>
            </Difference>

            <Difference n={3} headline="When something fails, Replay QA tells you why.">
              <p>
                When a Playwright test fails, you get a stack trace and a screenshot. You
                know something broke, but not why. Someone still has to dig through logs,
                reproduce the bug locally, and trace it back to a root cause. On a busy
                team, that takes hours. Sometimes days.
              </p>
              <p>
                Replay QA captures every session as a Replay Recording, billions of data
                points covering every DOM mutation, network call, and JavaScript execution
                frame. When something fails, our agents time-travel through the recording
                to find where it went wrong: what function threw the error, what network
                call timed out, what state change broke the UI.
              </p>
              <p>
                You get a root cause analysis and a suggested fix, ready to hand to your
                coding agent.
              </p>
            </Difference>

            <Difference
              n={4}
              headline="Replay QA finds bugs your test suite was never going to catch."
              last
            >
              <p>
                Your test suite tests what you wrote tests for. Replay QA tests everything
                else.
              </p>
              <p>
                It hunts for issues across the full range of what can go wrong in a real
                browser:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Layout shifts and broken UI elements</li>
                <li>Slow network calls and performance regressions</li>
                <li>
                  Accessibility failures (WCAG color contrast, missing ARIA labels,
                  keyboard traps)
                </li>
                <li>Runtime errors in specific execution paths</li>
                <li>Bugs that only surface under specific timing or state conditions</li>
              </ul>
              <p>
                These are the bugs that slip past code review, past your test suite, and
                land in production. Replay QA catches them before your users do.
              </p>
            </Difference>
          </div>
        </section>
      </div>

      {/* Already using Playwright */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mb-4">
          If you&apos;re already using Playwright
        </p>
        <h2 className="text-3xl font-bold tracking-tight leading-tight mb-6">
          Replay QA and Playwright aren&apos;t competing for the same job.
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            If you have Playwright tests set up in CI, keep them. You invested in that
            safety net and it still works.
          </p>
          <p>
            What Replay QA adds is the layer above: autonomous exploration of your full app
            surface, coverage of everything your test suite doesn&apos;t cover, and root
            cause analysis when things go wrong.
          </p>
        </div>
        <a
          href="https://qa.replay.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 rounded-full px-7 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Add Replay QA to your repo &rarr;
        </a>
      </section>

      {/* FAQ */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
            Questions we hear from tech leads
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                question={faq.q}
                answer={faq.a}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
          See what your test suite is missing.
        </h2>
        <p className="text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">
          Drop in a URL and Replay QA finds real bugs in minutes. No setup, no test cases,
          no credit card.
        </p>
        <HeroUrlInput />
      </section>

      <Footer />
    </div>
  );
}

function Difference({
  n,
  headline,
  children,
  last = false,
}: {
  n: number;
  headline: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`py-10 ${last ? "" : "border-b border-border"} first:pt-0`}>
      <p className="text-xs font-bold tracking-widest text-brand-pink mb-2">
        {String(n).padStart(2, "0")}
      </p>
      <h3 className="text-xl font-semibold tracking-tight mb-4">{headline}</h3>
      <div className="space-y-4 text-muted leading-relaxed">{children}</div>
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
