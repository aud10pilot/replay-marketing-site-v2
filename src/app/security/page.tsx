import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = pageMetadata({
  title: "Security & Privacy",
  description:
    "Learn about Replay's security practices, encryption standards, compliance reporting, and privacy commitments.",
  canonical: "/security",
});

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <article className="px-6 py-24 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Security &amp; Privacy</h1>
        <p className="text-sm text-muted mb-12">
          Effective Date: March 28, 2023 &middot; Last Reviewed: May 27, 2025
        </p>

        <div className="space-y-10 text-[15px] text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Compliance Reporting
            </h2>
            <p>
              Replay continuously monitors and reports primarily using System and
              Organization Controls (SOC) 2 Type 2. To request a copy of the
              report, contact us at{" "}
              <a
                href="mailto:support@replay.io"
                className="text-brand-purple hover:opacity-80 transition"
              >
                support@replay.io
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Secure Development
            </h2>
            <p className="mb-4">
              Replay implements a secure Software Development Lifecycle (SDLC)
              that includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Code reviews on all changes</li>
              <li>Source control access restrictions</li>
              <li>Source code dependency scanning</li>
              <li>Comprehensive audit and deployment logging</li>
              <li>Separated testing and production environments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Encryption
            </h2>
            <p className="mb-4">
              We maintain strict encryption standards. Your data is encrypted
              both in transit and at rest.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-foreground font-medium">In transit:</span>{" "}
                TLS v1.2 minimum requirement. A+ rating from SSL Labs for our
                SSL configuration.
              </li>
              <li>
                <span className="text-foreground font-medium">At rest:</span>{" "}
                AES-256 encryption for all stored data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Authentication
            </h2>
            <p>
              We support single sign-on via Google SAML 2.0 with multi-factor
              authentication, automated account provisioning and revocation, and
              user-controlled privacy settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Access Control
            </h2>
            <p>
              Replay follows the principle of least privilege for all access
              granted. We conduct annual reviews to ensure appropriate
              permissions, and multi-factor authentication is enabled across the
              organization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Network Security
            </h2>
            <p>
              We take network security seriously. Our security team reviews
              firewall rules regularly, and we use intelligent threat detection
              tools for continuous monitoring.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Privacy
            </h2>
            <p className="mb-4">
              The privacy of everyone who uses our software must be respected.
              Our privacy practices include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimizing the data we collect</li>
              <li>Never selling customer data</li>
              <li>No routine access to customer data by Replay employees</li>
              <li>
                Replay does not view or analyze your recordings without your
                explicit permission
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Session Recording
            </h2>
            <p>
              We use LogRocket for session recording on our own site to improve
              the product experience. You can disable this in your Preferences.
              Sensitive information, source code, filenames, and runtime data are
              redacted from these recordings. Our DevTools are publicly available
              and include a built-in feedback mechanism.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Contact
            </h2>
            <p>
              This Security Overview is a summary of our information security
              framework. For questions or to report a security concern, contact
              us at{" "}
              <a
                href="mailto:security@replay.io"
                className="text-brand-purple hover:opacity-80 transition"
              >
                security@replay.io
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
