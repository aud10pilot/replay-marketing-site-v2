"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  /** Display form, including the leading @. */
  handle: string;
  href: string;
  /** Square source; rendered at 48px and cropped to a circle. */
  image: string;
};

// Each quote holds long enough to actually be read, rather than for a fixed
// beat that suits the shortest one. ~350ms a word is a relaxed 170wpm, floored
// so a one-liner doesn't flash past and capped so nobody waits on the longest.
const MS_PER_WORD = 350;
const MIN_MS = 7000;
const MAX_MS = 14000;

function readingTime(quote: string) {
  const words = quote.trim().split(/\s+/).length;
  return Math.min(MAX_MS, Math.max(MIN_MS, words * MS_PER_WORD));
}

/**
 * Cycles through customer quotes, advancing on its own.
 *
 * Every slide is rendered into the same grid cell rather than swapping one in
 * and out, so the band's height is the tallest quote and nothing below it moves
 * as you cycle. Inactive slides get `inert`, which takes them out of both the
 * focus order and the accessibility tree — without it the hidden handles would
 * still be tabbable.
 *
 * Auto-advance backs off whenever it would be unwelcome: while the pointer is
 * over the band or focus is inside it, while the section is scrolled out of
 * view (otherwise a visitor arrives mid-rotation at whichever quote happened to
 * be up), under prefers-reduced-motion, and permanently once someone uses the
 * controls — taking over should stick, and it doubles as the stop mechanism
 * WCAG 2.2.2 wants for auto-updating content.
 */
export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tookOver, setTookOver] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const step = (delta: number) =>
    setIndex((i) => (i + delta + items.length) % items.length);

  // Manual use of the controls stops the rotation for good.
  const takeOver = (fn: () => void) => () => {
    setTookOver(true);
    fn();
  };

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // A timeout rather than an interval, since each quote gets its own duration.
  useEffect(() => {
    if (tookOver || hovered || focused || reducedMotion || !inView) return;
    const timer = setTimeout(
      () => step(1),
      readingTime(items[index].quote),
    );
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, tookOver, hovered, focused, reducedMotion, inView, items]);

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      <div className="grid">
        {items.map((t, i) => {
          const active = i === index;
          return (
            <figure
              key={t.name}
              inert={!active}
              className={`col-start-1 row-start-1 m-0 transition-opacity duration-300 ${
                active ? "opacity-100" : "opacity-0"
              }`}
            >
              <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed tracking-tight text-balance mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center justify-center gap-3.5">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  /* Only the first is above the fold in practice, and all three
                     mount at once, so let the rest load lazily. */
                  priority={i === 0}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-brand-pink transition"
                  >
                    {t.handle}
                  </a>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          type="button"
          onClick={takeOver(() => step(-1))}
          aria-label="Previous quote"
          className="w-9 h-9 rounded-full border border-brand-pink/25 text-muted hover:text-brand-pink hover:border-brand-pink/50 transition flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 3.5 5.5 8l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={takeOver(() => setIndex(i))}
              aria-label={`Show quote from ${t.name}`}
              aria-current={i === index || undefined}
              className={`w-2 h-2 rounded-full transition ${
                i === index
                  ? "bg-brand-pink"
                  : "bg-brand-pink/25 hover:bg-brand-pink/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={takeOver(() => step(1))}
          aria-label="Next quote"
          className="w-9 h-9 rounded-full border border-brand-pink/25 text-muted hover:text-brand-pink hover:border-brand-pink/50 transition flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M6 3.5 10.5 8 6 12.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
