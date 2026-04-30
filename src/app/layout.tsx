import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import PromoBanner from "@/components/PromoBanner";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://replay.io"),
  title: {
    default: "Replay — Superpowers for Your Agent",
    template: "%s | Replay",
  },
  description:
    "Replay records your app, runs automated root-cause analysis, and posts the root cause and a suggested fix as a PR comment — no manual debugging required.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Replay",
    title: "Replay — Superpowers for Your Agent",
    description:
      "Replay records your app, runs automated root-cause analysis, and posts the root cause and a suggested fix as a PR comment — no manual debugging required.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Replay — Superpowers for Your Agent",
    description:
      "Replay records your app, runs automated root-cause analysis, and posts the root cause and a suggested fix as a PR comment — no manual debugging required.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <PromoBanner />
        {children}
      </body>
    </html>
  );
}
