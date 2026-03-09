import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";
import DesignPartnerForm from "./DesignPartnerForm";

export const metadata: Metadata = {
  title: "Become a Replay MCP Design Partner",
  description:
    "Get free access to Replay MCP for a month, direct time with the Replay engineering team, and help shape the future of AI-assisted debugging.",
  alternates: { canonical: "/design-partner" },
  openGraph: {
    title: "Become a Replay MCP Design Partner",
    description:
      "Get free access to Replay MCP for a month, direct time with the Replay engineering team, and help shape the future of AI-assisted debugging.",
  },
};

const perks = [
  {
    title: "Free for a full month",
    description:
      "Full access to Replay MCP at no cost for 30 days. No credit card. No catch. Use it on real work and see if it changes how your team debugs.",
  },
  {
    title: "Direct line to the engineering team",
    description:
      "You'll have access to the Replay engineering team in Discord. Ask questions, share feedback, or just tell us when something doesn't work the way you expected.",
  },
  {
    title: "Your workflow shapes the product",
    description:
      "We'll schedule occasional calls to hear how you're using Replay MCP — what's clicking, what's still painful. Your feedback directly influences what we build next.",
  },
];

export default function DesignPartnerPage() {
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/5 px-4 py-1.5 text-sm text-brand-purple font-medium">
            Design Partner Program
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            Help us build the debugging tool{" "}
            <span className="text-brand-pink">
              your agent actually needs.
            </span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-6 leading-relaxed">
            We&apos;re partnering with a small group of engineering teams to
            go deep on how Replay MCP fits into real workflows. You get free
            access and a direct line to our team. We get honest signal on
            what to build.
          </p>
          <a
            href="#apply"
            className="inline-block rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Apply to join
          </a>
        </section>
      </div>

      {/* The Problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Your agent is only as good as{" "}
            <span className="text-brand-pink">what it can see.</span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Coding agents are getting genuinely good at writing code. But
              when something breaks at runtime — a flaky test, a race
              condition, a bug that only happens in production — they&apos;re
              flying blind. No DOM state. No network timing. No component
              tree. Just your codebase and a guess.
            </p>
            <p>
              Replay MCP closes that gap. It gives your agent the browser
              runtime context it needs to diagnose bugs precisely — and fix
              them the first time.{" "}
              <span className="text-foreground font-medium">
                We&apos;re looking for engineering teams who want to help us
                make that experience as useful as possible.
              </span>
            </p>
          </div>
        </section>
      </div>

      {/* What you get */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          What design partners get
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          This isn&apos;t a beta waitlist. It&apos;s a working relationship.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-xl border border-border bg-surface p-8"
            >
              <h3 className="text-lg font-semibold mb-3">{perk.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Who this is for</h2>
          <div className="space-y-4 text-muted text-lg leading-relaxed">
            <p>
              We&apos;re looking for engineers and teams who are already using
              AI coding agents — Cursor, Claude Code, Copilot, Windsurf — and
              running into the wall where the agent gets stuck on a bug it
              can&apos;t reason about without runtime context.
            </p>
            <p>
              It doesn&apos;t matter what you&apos;re building. What matters
              is that you care about making the debugging loop faster, and
              you&apos;re willing to tell us honestly when something
              doesn&apos;t work the way it should.
            </p>
          </div>
        </section>
      </div>

      {/* Form */}
      <section id="apply" className="px-6 py-24 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Apply to become a design partner
          </h2>
          <p className="text-muted text-lg">
            We review applications on a rolling basis and reach out within a
            few days.
          </p>
        </div>
        <DesignPartnerForm />
      </section>

      <Footer />
    </div>
  );
}
