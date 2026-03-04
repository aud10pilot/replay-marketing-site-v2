import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import CyclingTool from "./CyclingTool";

export const metadata: Metadata = {
  title: "Replay for Vibe Coders",
  description:
    "You built something with Lovable. It was working. Now it's not. Replay Extension shows you exactly what went wrong — in plain English — so you can fix it.",
  alternates: { canonical: "/for-vibe-coders" },
  openGraph: {
    title: "Replay for Vibe Coders",
    description:
      "Replay Extension shows you exactly what went wrong — in plain English — so you can fix it.",
  },
};

export default function ForVibeCodersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in px-6 pt-24 pb-20 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
          You built something with <CyclingTool />.
          <br />
          It was working.{" "}
          <span className="text-brand-pink">Now it&apos;s not.</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Replay Extension shows you exactly what went wrong &mdash; in plain
          English &mdash; so you can fix it.
        </p>
        <a
          href="#"
          className="inline-block rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Install Replay for Chrome &mdash; it&apos;s free
        </a>
      </section>

      {/* Meet Them Where They Are */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Debugging tools were built for engineers.{" "}
            <span className="text-brand-pink">
              You&apos;re not one. That&apos;s fine.
            </span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Most debugging tools assume you know what a network request is, or
              what a console log means. If you&apos;re building with Lovable,
              Base44, Replit, or similar, you shouldn&apos;t need to know any of
              that.
            </p>
            <p>
              Replay doesn&apos;t ask you to understand the technical details.{" "}
              <span className="text-foreground font-medium">
                It just tells you what broke and how to fix it.
              </span>
            </p>
          </div>
        </section>
      </div>

      {/* Scenario Story */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Here&apos;s what it looks like.
        </h2>
        <div className="rounded-xl border border-border bg-surface p-8 space-y-6 text-muted text-base leading-relaxed">
          <p>
            You built a contact form in Lovable. When someone fills it out and
            hits Submit, nothing happens. No confirmation, no error. Just&hellip;
            nothing.
          </p>
          <p>
            You try describing the problem to your AI assistant. It suggests a
            few things. None of them work. You&apos;re going in circles.
          </p>
          <p>
            <span className="text-foreground font-medium">With Replay:</span>{" "}
            you open the Chrome extension, hit Record, fill out the form and hit
            Submit. Replay watches everything that happens behind the scenes.
            Then it tells you: the form is trying to send data to a URL that
            doesn&apos;t exist yet. Here&apos;s what to change.
          </p>
          <p>
            You paste that into Lovable.{" "}
            <span className="text-foreground font-medium">Fixed.</span>
          </p>
        </div>
      </section>

      {/* How to Use It */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Three steps. No setup.
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            You don&apos;t need to install anything complicated or learn new
            tools.
          </p>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Install the Replay Chrome Extension",
                desc: "It takes about 30 seconds. Just click install from the Chrome Web Store.",
              },
              {
                step: "2",
                title: "Go to your app, hit Record, and reproduce the bug",
                desc: "Just do the thing that\u2019s broken while Replay is watching. Click the button, fill out the form, whatever it is.",
              },
              {
                step: "3",
                title: "Read what Replay found",
                desc: "It tells you what went wrong and what to fix, in plain English. Copy the fix and paste it into your AI tool.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex items-start gap-5 rounded-xl border border-border bg-surface p-6"
              >
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-lg font-semibold flex items-center justify-center flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* IDE Agent Callout */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <div className="rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-purple mb-3">
            Also using Cursor or Claude Code?
          </p>
          <h3 className="text-xl font-semibold mb-3">
            Replay MCP works there too.
          </h3>
          <p className="text-base text-muted leading-relaxed">
            If you also use an IDE-based coding agent, Replay MCP connects
            directly to it — delivering automated root-cause analysis and a
            specific fix for every bug. Same recording engine, deeper
            integration.
          </p>
          <a
            href="https://docs.replay.io/basics/replay-mcp/overview"
            className="inline-block mt-4 text-sm font-medium text-brand-purple hover:opacity-80 transition"
          >
            Learn about Replay MCP &rarr;
          </a>
        </div>
      </section>

      {/* Early Access */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          We&apos;re building this for you &mdash;{" "}
          <span className="text-brand-pink">and we&apos;d love your help.</span>
        </h2>
        <div className="space-y-6 text-muted text-lg leading-relaxed">
          <p>
            Replay has been used by engineering teams for a while. We&apos;re
            now building specifically for people who build with AI tools but
            aren&apos;t professional developers. That means we&apos;re actively
            learning what works and what doesn&apos;t.
          </p>
          <p>
            If you try Replay and have thoughts &mdash; what&apos;s confusing,
            what&apos;s missing, what&apos;s great &mdash; we genuinely want to
            hear from you.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/feedback"
            className="rounded-full border border-border px-7 py-3.5 text-base font-medium text-muted hover:border-foreground/20 hover:text-foreground transition"
          >
            Share feedback &rarr;
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Give it a try. It&apos;s free.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Install the Chrome extension and see what Replay finds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              Install Replay for Chrome
            </a>
            <a
              href="mailto:support@replay.io"
              className="rounded-full border border-border px-8 py-3.5 text-base font-medium text-muted hover:border-foreground/20 hover:text-foreground transition"
            >
              Have a question? Get in touch &rarr;
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
