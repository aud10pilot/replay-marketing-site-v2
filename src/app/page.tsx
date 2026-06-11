import Image from "next/image";
import Footer from "@/components/Footer";
import { FAQSchema, OrganizationSchema } from "@/components/JsonLd";
import LogoMarquee from "@/components/LogoMarquee";
import Nav from "@/components/Nav";
import Orb from "@/components/Orb";
import AutoplayVideo from "@/components/AutoplayVideo";
import LoopQAHowItWorks from "./qa/LoopQAHowItWorks";
import HeroUrlInput from "@/components/HeroUrlInput";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <OrganizationSchema />
      <FAQSchema
        items={[
          {
            q: "What is Replay QA?",
            a: "Replay QA is Replay's autonomous QA product. Drop in a URL and it explores your app, writes Playwright tests, captures Replay recordings, and files detailed bug reports — automatically.",
          },
          {
            q: "Can Replay QA test apps that require login?",
            a: "Yes. Replay QA supports authenticated flows. You can provide login credentials and it will test behind your auth wall.",
          },
          {
            q: "Can I test localhost or private apps?",
            a: "Yes. Replay QA includes a reverse proxy option so it can reach apps running on your local machine or a private network.",
          },
          {
            q: "What does a bug report include?",
            a: "Every bug comes with a Replay recording of the session, a full runtime breakdown (function calls, DOM mutations, network requests, state changes), a root-cause analysis with confidence score, and a suggested fix.",
          },
          {
            q: "How is this different from Playwright or Cypress test generation tools?",
            a: "Test generation tools help you write tests faster — you still have to write them, run them, and debug when they fail. Replay QA explores your app autonomously, writes and runs the tests itself, and diagnoses failures. You just provide a URL.",
          },
          {
            q: "How is this different from QA Wolf or BrowserStack?",
            a: "QA Wolf requires human QA engineers to build and maintain test suites. BrowserStack is a platform for running tests you've already written. Replay QA is fully autonomous — no tests to write, no humans to triage. It finds the flows, finds the bugs, and explains root cause.",
          },
          {
            q: "Can I connect Replay QA to my issue tracker?",
            a: "Yes. Replay QA supports a Bug Report Webhook — point it at your issue tracker's API and every bug Replay QA finds can be filed automatically. Works with Linear, GitHub Issues, Jira, and any tracker that accepts an HTTP endpoint.",
          },
          {
            q: "How much does Replay QA cost?",
            a: "Replay is free to start — 20 analyses per month, no time limit, no credit card required. Paid plans start at $49/month for individuals and $299/month (annual) for teams.",
          },
        ]}
      />
      <Nav />

      {/* Hero */}
      <div className="relative overflow-visible">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="w-[640px] h-[640px] sm:w-[1232px] sm:h-[1232px] opacity-40"
            style={{
              position: "absolute",
              top: "41%",
              left: "50vw",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Orb hue={264} hoverIntensity={0.3} rotateOnHover forceHoverState={false} />
          </div>
        </div>
        <section className="hero-fade-in relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
            Replay QA
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            AI wrote the app.
            <br />
            <span className="text-brand-pink">Replay QA finds what broke.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Give Replay QA a URL. It explores your web app, records every session, finds real bugs, and gives your coding agent the root cause and fix.
          </p>
          <HeroUrlInput />
        </section>

        <div className="relative z-10">
          <LogoMarquee />
        </div>
      </div>

      {/* Product video */}
      <div className="px-6 py-12 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-border overflow-hidden aspect-video shadow-2xl">
          <AutoplayVideo src="/ReplayQA-Edit.mp4" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Sample bug report — hidden for now, candidate for lower on page or subpage */}
      {false && <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            What you get
          </p>
          <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
            Root cause. Suggested fix. Full recording.
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            Every bug Replay QA finds comes with everything your agent needs to fix it &mdash; not just &ldquo;something broke.&rdquo;
          </p>
          <div className="rounded-xl border border-border bg-surface overflow-hidden text-sm">
            <div className="px-5 py-3 border-b border-border bg-surface-tinted flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">Bug found</span>
              </div>
              <span className="text-xs text-muted">confidence: high</span>
            </div>
            <div className="px-6 py-5 border-b border-border">
              <p className="font-semibold text-base">Checkout button does nothing on mobile Safari</p>
            </div>
            <div className="px-6 py-5 border-b border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Root cause</p>
              <p className="text-sm text-foreground leading-relaxed">
                <code className="bg-surface-tinted px-1.5 py-0.5 rounded font-mono text-xs">handleSubmit</code> is never called because the button is rendered outside the{" "}
                <code className="bg-surface-tinted px-1.5 py-0.5 rounded font-mono text-xs">{"<form>"}</code>{" "}
                element after the responsive layout change on screens under 768px.
              </p>
            </div>
            <div className="px-6 py-5 border-b border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Suggested fix</p>
              <p className="text-sm leading-relaxed">
                Move the button inside the form, or add{" "}
                <code className="bg-surface-tinted px-1.5 py-0.5 rounded font-mono text-xs">{'form="checkout-form"'}</code>{" "}
                to the button element.
              </p>
            </div>
            <div className="px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Evidence</p>
              <div className="flex flex-wrap gap-2">
                {["Replay recording", "DOM mutations", "Network trace", "React state"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2.5 py-1 rounded-full border border-border text-xs text-muted bg-surface-tinted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-muted text-center mt-5 italic">
            Example output &mdash; actual reports are generated from your app&apos;s real runtime data.
          </p>
        </section>
      </div>}

      {/* Problem */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 leading-tight">
          Apps ship faster than ever.
          <br />
          <span className="text-brand-pink">QA hasn&apos;t kept up.</span>
        </h2>
        <div className="space-y-6 text-muted text-lg leading-relaxed">
          <p>
            AI coding tools have compressed development cycles from weeks to hours. A solo founder or a small team can now ship a full web app in a day. But the way we test software hasn&apos;t changed &mdash; it still requires engineers to write test suites, QA teams to run them, and someone to triage what breaks.
          </p>
          <p>
            The result: AI-built apps ship without meaningful test coverage. Internal tools get deployed with no QA layer at all. And the bugs your users hit are the first signal that something is wrong.
          </p>
          <p>
            <span className="text-foreground font-medium">Replay QA gives AI-built apps the QA loop they&apos;re missing.</span>
          </p>
        </div>
      </section>

      {/* How it works */}
      <div className="bg-surface-tinted">
        <LoopQAHowItWorks />
        <div className="pb-16 text-center">
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-pink hover:opacity-80 transition"
          >
            Learn more about how Replay QA works
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>

      {/* Secondary use cases */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest text-muted mb-4 text-center">
          Also available
        </p>
        <h2 className="text-xl font-semibold text-center mb-8">
          Use Replay QA wherever AI is shipping code
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-xl border border-border bg-surface p-6 flex flex-col">
            <h3 className="text-base font-semibold mb-2">Replay for CI</h3>
            <p className="text-sm text-muted leading-relaxed flex-1">
              Already running Playwright or Cypress? Replay QA records every test run, analyzes every failure, and posts root cause and fix to your PR automatically.
            </p>
            <a href="/ci-agent" className="mt-4 text-sm font-medium text-brand-pink hover:opacity-80 transition">
              Learn more &rarr;
            </a>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 flex flex-col">
            <h3 className="text-base font-semibold mb-2">Replay QA API</h3>
            <p className="text-sm text-muted leading-relaxed flex-1">
              Building a software factory or AI coding platform? Embed Replay QA as a quality gate via API. Every app your system generates gets tested before it ships.
            </p>
            <a href="mailto:sales@replay.io" className="mt-4 text-sm font-medium text-brand-pink hover:opacity-80 transition">
              Talk to us &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Built on technology teams already trust
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Replay QA runs on the same recording engine used every day by teams at Vercel, Glide, Pantheon, and more.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                quote:
                  "Before Replay we spent somewhere between 1–2 hours per day per dev in this reproducibility purgatory.",
                name: "Mark Probst",
                role: "VP Engineering",
                company: "Glide",
                avatar: "/avatars/mark-probst.svg",
                logo: "/logos/glide.svg",
              },
              {
                quote:
                  "The tools that we were using before were barely better than useless. You'd say thanks for the console log screenshot and spend 2–3 days trying to recreate the issues.",
                name: "Shane Duff",
                role: "Front End Lead",
                company: "Pantheon",
                avatar: "/avatars/shane-duff.svg",
                logo: "/logos/pantheon.png",
              },
              {
                quote:
                  "Next.js App Router is now stable in 13.4. Wouldn't have been possible without Replay, we investigated so many super complicated bugs.",
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
                  "If I don't immediately know the answer to a bug, I immediately reach for Replay.io. It's like HMR for repros.",
                name: "Sebastian Markbåge",
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

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Common questions</h2>
        <div className="space-y-2">
          {[
            {
              q: "What kinds of apps can Replay QA test?",
              a: "Any web app accessible via a URL — marketing sites, SaaS products, internal tools, or all of the above. Replay QA explores whatever is at the URL you provide.",
            },
            {
              q: "Can Replay QA test apps that require login?",
              a: "Yes. Replay QA supports authenticated flows. You can provide login credentials and it will test behind your auth wall.",
            },
            {
              q: "Can I test localhost or private apps?",
              a: "Yes. Replay QA includes a reverse proxy option so it can reach apps running on your local machine or a private network.",
            },
            {
              q: "Do I need to write any tests or config?",
              a: "No. Replay QA discovers user journeys and writes Playwright tests automatically. You provide a URL — it takes care of everything else.",
            },
            {
              q: "What does a bug report include?",
              a: "Every bug comes with a Replay recording of the session, a full runtime breakdown (function calls, DOM mutations, network requests, state changes), a root-cause analysis with confidence score, and a suggested fix.",
            },
            {
              q: "How is this different from Playwright or Cypress test generation tools?",
              a: "Test generation tools help you write tests faster — you still have to write them, run them, and debug when they fail. Replay QA explores your app autonomously, writes and runs the tests itself, and diagnoses failures. You just provide a URL.",
            },
            {
              q: "How is this different from QA Wolf or BrowserStack?",
              a: "QA Wolf requires human QA engineers to build and maintain test suites. BrowserStack is a platform for running tests you've already written. Replay QA is fully autonomous — no tests to write, no humans to triage. It finds the flows, finds the bugs, and explains root cause.",
            },
            {
              q: "Does Replay QA replace human QA teams?",
              a: "For most of our users, there's no human QA team to replace — Replay QA is the only QA layer they have. For teams that do have QA, Replay QA handles the autonomous discovery work so human QA can focus on what actually needs human judgment.",
            },
            {
              q: "Can I connect Replay QA to my issue tracker?",
              a: "Yes. Replay QA supports a Bug Report Webhook — point it at your issue tracker's API (or a lightweight middleware) and every bug Replay QA finds can be filed automatically. The webhook sends a JSON POST with the bug description, a referrer identifying Replay QA as the source, and a callback URL. The callback URL is the key part: once your team fixes the bug, POST to that URL to mark it as resolved in Replay QA — which re-enables the associated journey for future test runs. You can control when bugs are submitted: manually, only when Replay QA has confirmed them as open, or for all reports including unconfirmed. Works with Linear, GitHub Issues, Jira, and any tracker that accepts an HTTP endpoint.",
            },
            {
              q: "How much does this cost?",
              a: (
                <>
                  Free plan includes 20 analyses per month &mdash; no time limit, no credit card required. Paid plans start at $49/month for individuals and $299/month (annual) for teams.{" "}
                  <a href="/pricing" className="text-brand-pink hover:opacity-80 transition">
                    See full pricing &rarr;
                  </a>
                </>
              ),
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-surface overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium cursor-pointer list-none select-none hover:text-foreground transition [&::-webkit-details-marker]:hidden">
                {faq.q}
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
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-surface-tinted">
        <section id="cta" className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Test your app for free.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Give Replay QA a URL. No test suite, no QA team, no credit card required.
          </p>
          <a
            href="https://qa.replay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Test my app for free &rarr;
          </a>
          <p className="text-xs text-muted mt-3">No credit card required &middot; 20 analyses free</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
