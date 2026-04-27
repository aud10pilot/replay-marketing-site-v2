import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RoiCalculator from "@/components/RoiCalculator";

export const metadata: Metadata = {
  title: "ROI Calculator — Replay",
  description:
    "Estimate how much debugging time and engineering cost your team will save by plugging Replay into your CI/CD pipeline.",
  alternates: { canonical: "/roi-calculator" },
  openGraph: {
    title: "ROI Calculator — Replay",
    description:
      "Estimate how much debugging time and engineering cost your team will save by plugging Replay into your CI/CD pipeline.",
  },
};

export default function RoiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in relative px-6 pt-24 pb-16 max-w-4xl mx-auto text-center">
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(240,45,94,0.09) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4">
            ROI Calculator
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            How much is debugging
            <br />
            <span className="text-brand-pink">actually costing you?</span>
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Enter your team&apos;s numbers. We&apos;ll show you how much engineering time
            Replay removes from the debugging loop — and what that&apos;s worth.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <RoiCalculator />
      </section>

      {/* Social proof anchor */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-16 max-w-3xl mx-auto text-center">
          <blockquote className="text-lg text-muted leading-relaxed italic mb-6">
            &ldquo;Before Replay we spent somewhere between 1–2 hours per day per dev in this
            reproducibility purgatory.&rdquo;
          </blockquote>
          <p className="text-sm font-semibold">Mark Probst</p>
          <p className="text-sm text-muted">VP Engineering, Glide</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
