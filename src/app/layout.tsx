import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PromoBanner from "@/components/PromoBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.variable} antialiased overflow-x-clip`}>
        <PromoBanner />
        {children}
      </body>
    </html>
  );
}
