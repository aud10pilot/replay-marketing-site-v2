import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CILandingPage from "./CILandingPage";

export const metadata: Metadata = {
  title: "Fix Flaky Tests Automatically | Replay",
  description:
    "Replay records every CI failure, runs root cause analysis, and ships the fix to your agent automatically. Connect Playwright or Cypress in minutes.",
  alternates: { canonical: "/fix-flaky-tests" },
  openGraph: {
    title: "Fix Flaky Tests Automatically | Replay",
    description:
      "Every flaky test in CI is your agent guessing. Replay records the failure, finds the root cause, and ships the fix. Automatically.",
  },
};

export default function FixFlakyTestsRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <CILandingPage />
      <Footer />
    </div>
  );
}
