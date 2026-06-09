import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PricingCards from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing — Replay",
  description:
    "Simple, usage-based pricing. Start free with 20 AI analyses per month. Upgrade as you grow.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Replay",
    description:
      "Simple, usage-based pricing. Start free with 20 AI analyses per month. Upgrade as you grow.",
  },
};

const faqs = [
  {
    q: "What's the difference between the plans?",
    a: "The plans differ by analysis volume. Free gives you 20 AI analyses per month — enough to evaluate Replay with no time limit. Individual (50/mo) and Team (300/mo) unlock more volume and all integrations. Enterprise is custom-scoped for high-volume usage.",
  },
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Yes. Start on Free and upgrade whenever you're ready — no commitment required. You can downgrade to a lower plan at the end of your billing period.",
  },
  {
    q: "What counts as an analysis?",
    a: "An analysis is any time Replay examines a recording to produce an insight — a root cause, a bug report, a suggested fix. Each recording analyzed counts as one analysis, regardless of which Replay product triggered it.",
  },
  {
    q: "What happens if I hit my analysis limit?",
    a: "You'll be notified when you're approaching your limit. You can upgrade to a higher plan at any time — your existing recordings stay intact.",
  },
  {
    q: "How is this different from Datadog, Sentry, or LogRocket?",
    a: "Those tools surface what went wrong. Replay captures the full runtime — every DOM mutation, network call, and JS execution frame — and analyzes it to tell you exactly why, with a specific fix. No human needs to read a trace.",
  },
  {
    q: "Does Replay work with my existing tools?",
    a: "Yes. Replay integrates with Playwright and Cypress for test recording, GitHub Actions, CircleCI, Jenkins, and BuildKite for CI, and Claude Code, Codex, Cursor, Copilot, and Windsurf for coding agents. Use whichever combination fits your workflow.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in relative px-6 pt-24 pb-16 max-w-4xl mx-auto text-center">
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(240,45,94,0.09) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Free plan · No credit card required
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.08] tracking-tight mb-5">
            Simple pricing.
            <br />
            <span className="text-brand-pink">Based on usage.</span>
          </h1>

          <p className="text-lg text-muted max-w-lg mx-auto leading-relaxed">
            Pay for the analyses you run — however you use Replay. Start free with 20 analyses a month. Upgrade when you need more.
          </p>
        </div>
      </section>

      <PricingCards />

      {/* Social proof */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col justify-between">
            <blockquote className="text-base leading-relaxed mb-6">
              &ldquo;Next.js 13.4 wouldn&apos;t have been possible without Replay.&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <div className="font-semibold">Tim Neutkins</div>
                <div className="text-muted text-xs">Co-author of Next.js, Vercel</div>
              </div>
              <Image src="/logos/vercel.svg" alt="Vercel" width={64} height={20} className="h-4 w-auto opacity-50 dark:invert dark:opacity-40" />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col justify-between">
            <blockquote className="text-base leading-relaxed mb-6">
              &ldquo;Replay.io is galaxy brain tooling. Real gamechanger.&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <div className="font-semibold">Dan Abramov</div>
                <div className="text-muted text-xs">React Maintainer</div>
              </div>
              <Image src="/logos/react.svg" alt="React" width={24} height={24} className="h-5 w-auto opacity-50 dark:opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Common questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
        </section>
      </div>

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
