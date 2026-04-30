"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import brokenButtonGif from "@/images/mcp/brokenButton.gif";
import dataImportGif from "@/images/mcp/dataImport.gif";

type Tab = {
  title: string;
  description: string;
  video?: string;
  image?: StaticImageData;
};

const tabs: Tab[] = [
  {
    title: "Test fails — Replay records",
    description:
      "Every Playwright run in CI is recorded automatically. When a test fails, the full runtime is captured — DOM mutations, network calls, JS execution frames.",
    image: brokenButtonGif,
  },
  {
    title: "Replay time-travels through the recording",
    description:
      "Replay's time-travel agent steps forward and backward through the execution, inspects state at any point in time, and traces the exact causal chain from failure to root cause.",
    image: dataImportGif,
  },
  {
    title: "Root cause identified — specific fix generated",
    description:
      "Your agent receives a precise, implementation-ready fix: which file, which function, what to change, and why. Not a guess — drawn directly from the recorded execution.",
    video: "https://www.youtube.com/embed/d3yeUueEEJk",
  },
  {
    title: "Fix posted to your PR — you review",
    description:
      "The CI Agent comments on your PR with the root cause analysis and suggested fix. You review the change instead of investigating the failure. Ship in minutes, not hours.",
    video: "https://www.youtube.com/embed/d3yeUueEEJk",
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .tab-video-fade {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
      <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
        The full loop — test failure to merged fix
      </h2>
      <p className="text-muted text-center max-w-2xl mx-auto mb-16">
        How Replay turns a broken CI build into a shipped fix, without a human in the debugging loop.
      </p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left: Tab selectors */}
        <div className="md:w-[380px] shrink-0 flex flex-col gap-2">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;

            return (
              <button
                key={tab.title}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setActiveTab(index)}
                className={`group relative text-left rounded-xl px-5 py-5 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand-pink/10 dark:bg-brand-pink/5 border border-transparent"
                    : "border border-transparent hover:border-border"
                }`}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-brand-pink"
                      : "bg-border"
                  }`}
                />

                <div className="pl-3">
                  <h3
                    className={`text-base font-semibold mb-1 transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted group-hover:text-foreground"
                    }`}
                  >
                    {tab.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-all duration-200 ${
                      isActive
                        ? "text-muted max-h-24 opacity-100"
                        : "text-muted/50 max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {tab.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Media area */}
        <div className="flex-1 min-h-[400px]">
          <div
            key={activeTab}
            className="tab-video-fade relative w-full h-full min-h-[400px] rounded-2xl border border-border overflow-hidden bg-surface"
          >
            {tabs[activeTab].image ? (
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                fill
                className="object-contain"
                unoptimized
              />
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={tabs[activeTab].video}
                title={tabs[activeTab].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
