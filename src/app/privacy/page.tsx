import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Replay privacy policy. Learn how we collect, use, and protect your personal data.",
  canonical: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <article className="px-6 py-24 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-12">
          Effective Date: February 8, 2023 &middot; Last Reviewed: May 9, 2025
        </p>

        <div className="space-y-8 text-[15px] text-muted leading-relaxed">
          <p>
            At Replay, we take your privacy seriously. Please read this Privacy
            Policy to learn how we treat your personal data. By using or
            accessing our Services in any manner, you acknowledge that you accept
            the practices and policies outlined below, and you hereby consent
            that we will collect, use, and share your information as described in
            this Privacy Policy.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Personal Data We Collect
            </h2>
            <p className="mb-4">
              We collect several categories of information from and about you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-foreground font-medium">
                  Profile/Contact Data:
                </span>{" "}
                Names, email addresses, and Google Account information you
                provide when creating an account.
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Payment Data:
                </span>{" "}
                Card details processed securely through Stripe. We do not store
                your full card number.
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Device/IP Data:
                </span>{" "}
                Browser type, IP addresses, and operating system information
                collected automatically.
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Web Analytics:
                </span>{" "}
                Page interactions and referral sources to help us understand how
                you use our services.
              </li>
              <li>
                <span className="text-foreground font-medium">User Data:</span>{" "}
                Session recordings and information you create while using our
                services.
              </li>
            </ul>
            <p className="mt-4">
              Data comes from you directly, automatic collection via cookies, and
              third-party sources including vendors and social networks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use collected information for service provision, account
              management, transaction processing, security measures, fraud
              prevention, marketing activities, customer communications, and
              legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              How We Share Your Information
            </h2>
            <p>
              We share personal data with service providers, analytics partners,
              payment processors, and parties you authorize. We will not sell
              your Personal Data, and have not done so over the last 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Tracking &amp; Cookies
            </h2>
            <p>
              We employ cookies for essential functionality and performance
              analytics, including Mixpanel integration. You can manage cookie
              preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Security &amp; Data Retention
            </h2>
            <p>
              We implement physical, technical, and organizational security
              measures to protect your data. We retain your data as long as your
              account remains active or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Your Rights
            </h2>
            <p>
              California and Nevada residents may request data access, deletion,
              and opt-out of data sales (though we do not sell data). We respond
              to requests within 45 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Children&apos;s Privacy
            </h2>
            <p>
              We do not knowingly collect or solicit Personal Data about children
              under 16 years of age. If you believe we have collected such data,
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a
                href="mailto:support@replay.io"
                className="text-brand-purple hover:opacity-80 transition"
              >
                support@replay.io
              </a>
              .
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}
