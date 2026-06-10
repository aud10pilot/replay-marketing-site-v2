"use client";

import Image from "next/image";

const logos = [
  { name: "Glide", src: "/logos/glide.svg", width: 80, height: 28 },
  { name: "Vercel", src: "/logos/vercel.svg", width: 100, height: 28 },
  { name: "Metabase", src: "/logos/metabase.svg", width: 110, height: 28 },
  { name: "Weights & Biases", src: "/logos/weights-and-biases.svg", width: 130, height: 28 },
  { name: "Apollo GraphQL", src: "/logos/apollo-graphql.svg", width: 110, height: 28 },
  { name: "CodeSandbox", src: "/logos/code-sandbox.svg", width: 120, height: 28 },
  { name: "React", src: "/logos/react.svg", width: 90, height: 28 },
  { name: "Tablecheck", src: "/logos/tablecheck.png", width: 110, height: 28 },
  { name: "Pantheon", src: "/logos/pantheon.png", width: 110, height: 28 },
];

export default function LogoMarquee() {
  return (
    <section className="py-12 overflow-hidden">
      <p className="text-sm text-muted/60 text-center mb-8 uppercase tracking-widest">
        Trusted by top engineering teams
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Scrolling track — two copies for seamless loop */}
        <div
          className="flex items-center w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 px-10 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-6 w-auto object-contain opacity-70 dark:invert dark:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
