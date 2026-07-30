"use client";

import { useEffect, useRef, useState } from "react";

interface ThemedVideoProps {
  lightSrc: string;
  darkSrc: string;
  className?: string;
  /** Describes the animation for assistive tech; omit for purely decorative videos. */
  ariaLabel?: string;
}

// Swaps between light/dark versions of the same clip by watching the `dark`
// class ThemeToggle sets on <html>, and only plays while scrolled into view.
export default function ThemedVideo({ lightSrc, darkSrc, className, ariaLabel }: ThemedVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  // Matches the server-rendered default (<html className="... dark">).
  const [dark, setDark] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains("dark"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.25,
    });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Re-run on src change too: swapping sources resets playback.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (inView) video.play().catch(() => {});
    else video.pause();
  }, [inView, dark]);

  return (
    <video
      ref={ref}
      src={dark ? darkSrc : lightSrc}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      muted
      playsInline
      loop
      autoPlay
      preload="metadata"
    />
  );
}
