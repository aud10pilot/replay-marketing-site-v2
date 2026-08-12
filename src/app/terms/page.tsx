import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Replay terms of service. Read the terms and conditions for using Replay products and services.",
  canonical: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <article className="px-6 py-24 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted mb-12">
          Effective Date: March 28, 2023 &middot; Last Reviewed: May 9, 2025
          <br />
          Record Replay Inc. &middot; 548 Market St, PMB 78081, San Francisco,
          CA 94104
        </p>

        <div className="space-y-8 text-[15px] text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Agreement to Terms
            </h2>
            <p>
              Your use of and access to our Services are subject to the
              following terms. If you do not agree to all of the following, you
              may not use or access the Services in any manner. These Terms
              constitute a binding agreement between you and Record Replay Inc.
              (&ldquo;Replay,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;)
              and remain effective throughout your usage period. This agreement
              incorporates our Privacy Policy and any Additional Terms for
              specific services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms and will notify you via
              site notice, email, or other communication. If you do not agree
              to the modified terms, you must discontinue your use of the
              Services. Continued use after modifications constitutes acceptance
              of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Privacy &amp; Child Protection
            </h2>
            <p>
              We prioritize your privacy under our separate Privacy Policy. We
              do not knowingly collect personally identifiable information from
              children under 13 years old per COPPA requirements. Suspected
              underage data collection should be reported to{" "}
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
              Account Requirements
            </h2>
            <p>
              You must provide accurate registration information and maintain
              current details. Account transfers require prior written
              authorization. You must be of legal age to form binding contracts,
              or have parental or guardian consent and agreement to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Service Restrictions
            </h2>
            <p className="mb-4">You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infringe intellectual property or other rights</li>
              <li>Violate applicable laws or regulations</li>
              <li>
                Engage in harmful, fraudulent, threatening, or defamatory
                conduct
              </li>
              <li>Compromise account security</li>
              <li>Attempt unauthorized access to other accounts</li>
              <li>Violate network security or crack encryption</li>
              <li>
                Run automated systems (spam, auto-responders) that disrupt
                services
              </li>
              <li>
                Scrape, crawl, or spider content through automated means
              </li>
              <li>Decompile or reverse-engineer the Services</li>
            </ul>
            <p className="mt-4">
              Violations may result in termination of your access to the
              Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Content Ownership &amp; Licensing
            </h2>
            <p>
              All materials displayed through the Services (text, graphics,
              images, User Submissions) are protected by copyright and
              intellectual property law. You receive a limited, worldwide,
              non-sublicensable license to access content solely for your use of
              the Services. You may not modify, distribute, create derivative
              works from, or commercially exploit content without prior written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              User Submissions &amp; Licenses
            </h2>
            <p>
              You remain solely responsible for your contributions and must
              represent having all necessary rights. By submitting content, you
              grant Replay perpetual, royalty-free, worldwide, sublicensable
              rights to translate, modify, and reproduce submissions as needed
              for service operation. Private account content receives display
              and distribution licenses solely for your access. Publicly shared
              content or feedback grants Replay rights to display, perform, and
              distribute to all users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Copyright Infringement (DMCA)
            </h2>
            <p>
              We remove material believed to constitute illegal copyright
              infringement and may discontinue repeat offender access. Copyright
              claims must include an authorized representative signature,
              specific infringed work identification, detailed infringing
              material location, notifier contact information, a good-faith
              belief statement, and a penalty-of-perjury accuracy confirmation.
              Removed material may be restored 10&ndash;14 business days after a
              counter-notice is received unless the copyright owner pursues
              court action.
            </p>
            <p className="mt-3">
              <span className="text-foreground font-medium">
                Designated Agent:
              </span>{" "}
              Record Replay Inc., Attn: DMCA Designated Agent, Brian Hackett,
              548 Market St, PMB 78081, San Francisco, CA 94104,{" "}
              <a
                href="mailto:support@replay.io"
                className="text-brand-purple hover:opacity-80 transition"
              >
                support@replay.io
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Pricing &amp; Payments
            </h2>
            <p>
              Services may be free or fee-based. Paid Services are processed
              through Stripe, Inc. By selecting Paid Services, you authorize
              Replay (through Stripe) to charge at current prices per applicable
              payment terms. Unless you opt out through account settings, Paid
              Services automatically renew for successive periods matching the
              original term at then-current non-promotional rates. You may
              terminate before the end of a period, but forfeited prorated
              refunds will not be issued.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Account Termination
            </h2>
            <p>
              You may discontinue service at any time by contacting{" "}
              <a
                href="mailto:support@replay.io"
                className="text-brand-purple hover:opacity-80 transition"
              >
                support@replay.io
              </a>
              . We may terminate or suspend access for any reason, including
              Terms violations. Account termination may destroy associated
              content. We attempt advance notice to allow important submission
              retrieval where possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Disclaimers &amp; Limitation of Liability
            </h2>
            <p>
              The Services and Content are provided on an &ldquo;as-is&rdquo;
              basis, without warranties of any kind, either express or implied.
              Under no circumstances shall Replay be liable for any indirect,
              special, incidental, punitive, or consequential damages, or
              amounts exceeding $100 or 12-month service fees (whichever is
              greater). You agree to indemnify Replay from claims, damages, and
              expenses arising from your use of the Services or violation of
              these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms are governed by the Federal Arbitration Act,
              applicable federal law, and California law. Disputes are resolved
              through binding individual arbitration in Santa Clara County,
              California, under JAMS Streamlined Arbitration Rules. Either party
              may assert qualifying claims in small claims court or pursue
              injunctive relief for intellectual property infringement.
            </p>
            <p className="mt-3">
              You and Replay waive any constitutional and statutory rights to go
              to court and have a trial in front of a judge or jury. All claims
              and disputes must be arbitrated on an individual basis and not on
              a class basis. You may opt out of arbitration within 30 days by
              mailing written notice to 548 Market St, PMB 78081, San
              Francisco, CA 94104.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Contact
            </h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
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
