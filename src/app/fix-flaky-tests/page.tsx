import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CILandingPage from "./CILandingPage";

export const metadata: Metadata = pageMetadata({
  title: "Fix Flaky Tests Automatically | Replay",
  description:
    "Replay records every CI failure, runs root cause analysis, and posts the root cause and a suggested fix as a PR comment. Connect Playwright in minutes.",
  canonical: "/fix-flaky-tests",
  social: {
    description:
      "Every flaky test in CI is your agent guessing. Replay records the failure, finds the root cause, and ships the fix. Automatically.",
  },
});

export default function FixFlakyTestsRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <CILandingPage />
      <Footer />
    </div>
  );
}
