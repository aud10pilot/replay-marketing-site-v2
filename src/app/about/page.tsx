import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import replayLogoVariations from "@/images/replay-logo-variations.gif";

export const metadata: Metadata = {
  title: "About Replay — Making Software Visible",
  description:
    "Replay records your software and shows you exactly what happened. Founded by ex-Mozilla engineers, we're building the debugging tools that AI agents and developers need to fix bugs on the first try.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Replay — Making Software Visible",
    description:
      "Replay records your software and shows you exactly what happened. Founded by ex-Mozilla engineers, we're building the debugging tools that AI agents and developers need to fix bugs on the first try.",
  },
};

const team = [
  {
    name: "Brian Hackett",
    role: "CEO",
    photo: "/team/brian-hackett.png",
    linkedin: "https://www.linkedin.com/in/brian-hackett-0969a070/",
    bio: "Stanford Ph.D. with 10 years at Mozilla, where he worked on the systems that power the Firefox browser engine. Brian started Replay to solve the problem he spent a decade fighting: helping developers understand complex systems when things go wrong. When he\u2019s not building Replay, he\u2019s sailing or traveling in a van.",
    timeTravelDestination: null,
  },
  {
    name: "Mark Erikson",
    role: "Software Engineer",
    photo: "/team/mark-erikson.png",
    linkedin: "https://www.linkedin.com/in/markerikson/",
    bio: "The maintainer of Redux and creator of Redux Toolkit \u2014 tools used by millions of React developers worldwide. Mark brings deep expertise in developer tooling and an obsessive focus on developer experience. Based in Southwest Ohio.",
    timeTravelDestination: null,
  },
  {
    name: "Dominik Seifert",
    role: "Software Engineer",
    photo: "/team/dominik-seifert.png",
    linkedin: "https://www.linkedin.com/in/dominik-seifert-phd-8b663b54/",
    bio: "Two decades of software engineering, from MMORPG servers to CUDA optimization. Dominik holds a Ph.D. in systems analysis and brings the kind of low-level systems knowledge that makes Replay\u2019s recording engine possible. Based in Taiwan, originally from Germany.",
    timeTravelDestination: null,
  },
  {
    name: "Thomas Daly",
    role: "Head of Product",
    photo: "/team/thomasDaly_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/tomcdaly/",
    bio: "Thomas is a product builder/maker that lives at the intersection of the customer and the product, while reading the tea leaves of the shifting landscape. Obsessed with the details of making great things, and loves nothing more than to do with good people. He talks about hospitality vs. hostility a lot. He lives in the lower Hudson River valley in NY.",
    timeTravelDestination: "I\u2019d like to travel 1,000 years into the future to see if people are still Rick Rolling each other.",
  },
  {
    name: "Strider Wilson",
    role: "Software Engineer",
    photo: "/team/strider_headshot.png",
    linkedin: "https://www.linkedin.com/in/strider-wilson/",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui vivamus sagittis lacus vel augue.",
    timeTravelDestination: "I would go back in time to the recording of Led Zeppelin\u2019s live at the BBC album.",
  },
  {
    name: "Michael Ward",
    role: "Dev Ops",
    photo: null,
    linkedin: null,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum aenean lacinia bibendum nulla sed.",
    timeTravelDestination: null,
  },
  {
    name: "Brett Lamy",
    role: "Staff Software Engineer",
    photo: "/team/brett_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/blamy/",
    bio: "Staff Software Engineer with 15 years of experience delivering full-stack products for small startups and large high scale enterprises.",
    timeTravelDestination: null,
  },
  {
    name: "Mateusz Burzy\u0144ski",
    role: "Software Engineer",
    photo: "/team/mateusz_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/mateusz-burzy%C5%84ski-5183b0a3/",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis est non commodo luctus.",
    timeTravelDestination: "I\u2019d either travel backward to my first Harry Potter read or forward 20 years to see if GRRM finally finished the damn thing or not.",
  },
];

const values = [
  {
    title: "Clarity over cleverness",
    description:
      "We build tools that show you exactly what happened \u2014 no abstractions, no hand-waving. That same principle runs through everything we do: our code, our communication, and our product.",
  },
  {
    title: "Long-term over fast",
    description:
      "We\u2019re not optimizing for the next quarter. We\u2019re building technology that changes how software gets built and debugged. That takes patience, and we\u2019re built for it.",
  },
  {
    title: "Open over closed",
    description:
      "We\u2019re a distributed team across time zones and continents. We care about what you ship, not when you\u2019re online. And we believe the tools that make software understandable should be accessible to everyone \u2014 not just engineers at big companies.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in px-6 pt-24 pb-20 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
          We make the invisible{" "}
          <span className="text-brand-pink">visible.</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Replay started with a simple belief: if you can&apos;t see what your
          software is doing, you can&apos;t fix it. We built the technology to
          change that &mdash; for developers, for AI agents, and for anyone
          building with code.
        </p>
        <div className="mt-12 mx-auto max-w-sm">
          <Image
            src={replayLogoVariations}
            alt="Replay logo variations"
            className="w-full rounded-xl"
            unoptimized
          />
        </div>
      </section>

      {/* Mission / Story */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4">
            Where we started
          </p>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Debugging has always been the same: guess what went wrong, try a
              fix, see if it works. Repeat until you get lucky or give up and
              rewrite.
            </p>
            <p>
              We thought that was broken. Our founders spent a decade at Mozilla
              working on the Firefox browser engine &mdash; one of the most
              complex software systems ever built. They saw firsthand how much
              time gets lost to bugs that nobody can reproduce, errors that
              nobody can explain, and fixes that nobody is confident about.
            </p>
            <p>
              So they built Replay: a way to record exactly what your software
              did and play it back, step by step. Not a video. Not a log file.{" "}
              <span className="text-foreground font-medium">
                A deterministic capture of every DOM change, network request, and
                state update
              </span>{" "}
              &mdash; the full picture, down to the last detail.
            </p>
            <p>
              In the early days, we gave developers a superpower: the ability to
              time travel through their recordings. Step forward, step back,
              inspect state at any point in time. No reproduction required. No
              guessing. Just the truth.
            </p>
          </div>
        </section>
      </div>

      {/* What We're Building */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4">
          Where we&apos;re going
        </p>
        <div className="space-y-6 text-muted text-lg leading-relaxed">
          <p>
            Today, AI agents write code faster than any human. But when a test
            fails in CI, they&apos;re stuck &mdash; guessing at fixes with no
            way to see what went wrong at runtime. They loop, retry, and burn
            through tokens on the same mistake.
          </p>
          <p>
            So we gave the time machine to the agent.{" "}
            <span className="text-foreground font-medium">
              Replay now enables your coding agent to time-travel through
              recordings and fix failing tests without human intervention.
            </span>{" "}
            It turns out they&apos;re way better at it anyway &mdash; no
            fatigue, no missed details, no wrong turns.
          </p>
          <p>
            The Replay CI Agent watches every PR. When a test fails, it records
            the full runtime, analyzes the execution, and posts the root cause
            plus a specific fix as a PR comment. Replay MCP brings the same
            time-travel capability directly into your IDE, where your coding
            agent already works.
          </p>
          <p>
            We&apos;re building toward a world where every test failure comes
            with a root cause, every broken PR gets a fix, and no one &mdash;
            human or AI &mdash;{" "}
            <span className="text-foreground font-medium">
              has to debug blind.
            </span>
          </p>
        </div>
      </section>

      {/* Values */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How we work</h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            The principles behind the product.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-surface p-8"
              >
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Team */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">The team</h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Founded by ex-Mozilla engineers. Distributed globally. Building the
          future of debugging.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((person) => (
            <div
              key={person.name}
              className="rounded-xl border border-border bg-surface overflow-hidden"
            >
              <div className="aspect-square bg-surface-hover relative">
                {person.linkedin ? (
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="block w-full h-full absolute inset-0">
                    {person.photo ? (
                      <Image
                        src={person.photo}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted/30">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    )}
                  </a>
                ) : person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted/30">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                {person.linkedin ? (
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition">
                    <h3 className="text-lg font-semibold">{person.name}</h3>
                  </a>
                ) : (
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                )}
                <p className="text-sm text-brand-purple mb-3">{person.role}</p>
                <p className="text-sm text-muted leading-relaxed">
                  {person.bio}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-1.5">
                    Ideal time-travel destination
                  </p>
                  {person.timeTravelDestination ? (
                    <p className="text-sm text-muted leading-relaxed italic">
                      &ldquo;{person.timeTravelDestination}&rdquo;
                    </p>
                  ) : (
                    <p className="text-sm text-muted/40">—</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            See what your software is doing.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Install the CI Agent on your repo, or add Replay MCP to your coding
            agent. Free to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.replay.io/basics/replay-ci-agent/overview"
              className="rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              Install the CI Agent
            </a>
            <a
              href="https://docs.replay.io/basics/replay-mcp/overview"
              className="rounded-full border border-border px-8 py-3.5 text-base font-medium text-muted hover:border-foreground/20 hover:text-foreground transition"
            >
              Add Replay MCP
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
