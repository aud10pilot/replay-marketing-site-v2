import type { Metadata } from "next";
import Image from "next/image";
import AudienceSplit from "@/components/AudienceSplit";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";

import brokenButtonGif from "@/images/mcp/brokenButton.gif";
import dataImportGif from "@/images/mcp/dataImport.gif";

export const metadata: Metadata = {
  title: "How Replay Works",
  description:
    "Your coding agent writes code fast. But when it breaks, it's debugging blind. Replay gives your agent the runtime context it needs to find bugs — not guess at them.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How Replay Works",
    description:
      "Replay gives your agent the runtime context it needs to find bugs — not guess at them.",
  },
};

export default function HowItWorksPage() {
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
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Your coding agent writes code fast.
            <br />
            <span className="text-brand-pink">
              But when it breaks, it&apos;s debugging blind.
            </span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay gives your agent the runtime context it needs to find bugs
            &mdash; not guess at them.
          </p>
          <a
            href="https://docs.replay.io/basics/replay-mcp/overview"
            className="rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Try Replay Free &rarr;
          </a>
        </section>
      </div>

      {/* Core Insight */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4">
            The core insight
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Replay captures what actually happened.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-12">
            Not logs. Not stack traces. A deterministic recording of every DOM
            change, network request, and state update &mdash; the full runtime
            picture your agent has never had access to before.
          </p>

          {/* 4-step diagram */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { step: "1", label: "Browser session", desc: "A bug occurs in the browser" },
              { step: "2", label: "Replay Recording", desc: "Every detail is captured" },
              { step: "3", label: "Agent gets context", desc: "Root cause is identified" },
              { step: "4", label: "Fix shipped", desc: "Your agent applies the fix" },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                <div className="rounded-xl border border-border bg-surface p-5 text-center h-full">
                  <div className="w-8 h-8 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink text-sm font-semibold flex items-center justify-center mx-auto mb-3">
                    {s.step}
                  </div>
                  <p className="text-sm font-semibold mb-1">{s.label}</p>
                  <p className="text-xs text-muted">{s.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2.5 -translate-y-1/2 text-muted z-10">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6h8M7 3l3 3-3 3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Workflow Demo */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight">
          From bug to fix &mdash; in under a minute.
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          See how Replay turns a failing test into a shipped fix, end to end.
        </p>

        <div className="space-y-16">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-3">
                Step 1
              </p>
              <h3 className="text-xl font-semibold mb-3">
                A test fails. The agent loops.
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Your coding agent hits a runtime error and has no way to see
                what&apos;s actually happening in the browser. It patches. It
                retries. Same failure.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface overflow-hidden">
              <Image
                src={brokenButtonGif}
                alt="Agent stuck on a broken button"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-3">
                Step 2
              </p>
              <h3 className="text-xl font-semibold mb-3">
                Replay records and finds the root cause.
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Replay records a deterministic capture of the browser session
                &mdash; every DOM change, network request, component state. Then
                it analyzes the recording automatically.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface overflow-hidden md:order-1">
              <Image
                src={dataImportGif}
                alt="Replay analyzing a recording"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-3">
                Step 3
              </p>
              <h3 className="text-xl font-semibold mb-3">
                Your agent receives a specific, implementation-ready fix.
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Not &ldquo;check your async logic.&rdquo; The exact file,
                function, and change &mdash; with full context. Your agent
                implements it. You review the PR.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/d3yeUueEEJk"
                title="Replay fix delivery demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Ways to Use */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Replay works wherever you build.
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            The browser extension gets you recording in seconds. Replay MCP
            gives your coding agent automated root-cause analysis. Both use the
            same recording engine.
          </p>
          <AudienceSplit />
        </section>
      </div>

      {/* Social Proof */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What developers are saying
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Before Replay we spent somewhere between 1\u20132 hours per day per dev in this reproducibility purgatory.",
              name: "Mark Probst",
              role: "VP Engineering",
              company: "Glide",
              avatar: "/avatars/mark-probst.svg",
              logo: "/logos/glide.svg",
            },
            {
              quote:
                "Replay.io is galaxy brain tooling. Real gamechanger.",
              name: "Dan Abramov",
              role: "React Maintainer",
              avatar: null,
              logo: null,
              company: null,
            },
            {
              quote:
                "I think Replay has a very good chance of creating a new category around collaborative debugging.",
              name: "Guillermo Rauch",
              role: "Founder of Vercel",
              avatar: null,
              logo: "/logos/vercel.svg",
              company: "Vercel",
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

      {/* Final CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Stop debugging for your agent.
            <br />
            Let Replay do it.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Free to get started. No credit card required.
          </p>
          <a
            href="https://docs.replay.io/basics/replay-mcp/overview"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Try Replay Free &mdash; no credit card required
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
