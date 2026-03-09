"use client";

import { useState } from "react";

const TEAM_SIZE_OPTIONS = ["1–10", "11–50", "51–200", "200+"] as const;
type TeamSize = (typeof TEAM_SIZE_OPTIONS)[number] | "";

interface FormState {
  companyName: string;
  fullName: string;
  email: string;
  linkedin: string;
  teamSize: TeamSize;
  useCase: string;
}

const initialState: FormState = {
  companyName: "",
  fullName: "",
  email: "",
  linkedin: "",
  teamSize: "",
  useCase: "",
};

export default function DesignPartnerForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire up to a form backend (e.g. Formspree, HubSpot, API route)
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-10 text-center">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 text-white text-2xl"
          style={{ background: "var(--brand-gradient)" }}
        >
          ✓
        </div>
        <h3 className="text-2xl font-bold mb-3">Application received</h3>
        <p className="text-muted leading-relaxed max-w-md mx-auto">
          Thanks for applying. We review applications on a rolling basis and
          will be in touch within a few days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-8 sm:p-10 space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-sm font-medium">
            Full name <span className="text-brand-pink">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-purple transition placeholder:text-muted/50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="companyName" className="text-sm font-medium">
            Company name <span className="text-brand-pink">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            value={form.companyName}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-purple transition placeholder:text-muted/50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Work email <span className="text-brand-pink">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="jane@acmecorp.com"
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-purple transition placeholder:text-muted/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="linkedin" className="text-sm font-medium">
          LinkedIn profile <span className="text-brand-pink">*</span>
        </label>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          required
          value={form.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/janesmith"
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-purple transition placeholder:text-muted/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="teamSize" className="text-sm font-medium">
          Engineering team size <span className="text-brand-pink">*</span>
        </label>
        <div className="relative">
          <select
            id="teamSize"
            name="teamSize"
            required
            value={form.teamSize}
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border border-border bg-background px-4 py-2.5 pr-10 text-sm outline-none focus:border-brand-purple transition"
          >
            <option value="" disabled>Select a range…</option>
            {TEAM_SIZE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="useCase" className="text-sm font-medium">
          What&apos;s getting you stuck?{" "}
          <span className="text-brand-pink">*</span>
        </label>
        <p className="text-xs text-muted">
          What types of bugs or debugging scenarios are costing you the most
          time? Where does your agent get stuck that Replay MCP might help?
        </p>
        <textarea
          id="useCase"
          name="useCase"
          required
          rows={5}
          value={form.useCase}
          onChange={handleChange}
          placeholder="e.g. We have a lot of flaky Playwright tests in CI that nobody can reproduce locally, and our agent just keeps retrying the same patch without making progress..."
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-purple transition placeholder:text-muted/50 resize-none leading-relaxed"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full py-3.5 text-base font-medium text-white hover:opacity-90 transition disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
        style={{ background: "var(--brand-gradient)" }}
      >
        {submitting ? "Submitting…" : "Apply to become a design partner"}
      </button>

      <p className="text-xs text-muted text-center">
        We review applications on a rolling basis. No spam, ever.
      </p>
    </form>
  );
}
