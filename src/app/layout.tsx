import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PromoBanner from "@/components/PromoBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const OG_IMAGE = "/replayQA_og-image.png";
const SITE_TITLE = "Replay QA — AI wrote the app. Replay QA finds what broke.";
const SITE_DESCRIPTION =
  "Connect a GitHub repo for continuous testing, or drop in a URL to test on demand. Replay QA finds real bugs and gives your coding agent the root cause and fix.";

export const metadata: Metadata = {
  metadataBase: new URL("https://replay.io"),
  title: {
    default: SITE_TITLE,
    template: "%s | Replay",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Replay",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 642 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@replayio",
    creator: "@replayio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
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
        {children}
      </body>
    </html>
  );
}
