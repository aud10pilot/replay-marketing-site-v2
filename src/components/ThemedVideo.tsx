"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

interface ThemedVideoProps {
  lightSrc: string;
  darkSrc: string;
  /** MP4 fallbacks for browsers that can't play the WebM. Both must be set to take effect. */
  lightFallbackSrc?: string;
  darkFallbackSrc?: string;
  className?: string;
  /** Describes the animation for assistive tech; omit for purely decorative videos. */
  ariaLabel?: string;
}

// Safari decodes VP9 but ignores the WebM alpha channel, so canPlayType() alone
// would hand it a clip it renders on an opaque black box. Treat it as unable to
// play the WebM so it takes the MP4 instead.
function isSafari(ua: string) {
  return /^((?!chrome|chromium|android|crios|fxios|edg).)*safari/i.test(ua);
}

// Codec support can't change at runtime, so probe once and cache.
let vp9Support: boolean | undefined;

function canPlayVp9Webm() {
  if (vp9Support === undefined) {
    const probe = document.createElement("video");
    vp9Support =
      probe.canPlayType('video/webm; codecs="vp9"') !== "" && !isSafari(navigator.userAgent);
  }
  return vp9Support;
}

// Nothing to subscribe to — this is a one-shot capability read, but going through
// useSyncExternalStore keeps it out of render on the server and hydration-safe.
const noopSubscribe = () => () => {};
// The server has no UA to probe, so it assumes WebM and the client corrects on hydration.
const assumeWebm = () => true;

// Swaps between light/dark versions of the same clip by watching the `dark`
// class ThemeToggle sets on <html>, and only plays while scrolled into view.
export default function ThemedVideo({
  lightSrc,
  darkSrc,
  lightFallbackSrc,
  darkFallbackSrc,
  className,
  ariaLabel,
}: ThemedVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  // Matches the server-rendered default (<html className="... dark">).
  const [dark, setDark] = useState(true);
  const [inView, setInView] = useState(false);

  const webmPlayable = useSyncExternalStore(noopSubscribe, canPlayVp9Webm, assumeWebm);
  const useFallback = Boolean(lightFallbackSrc && darkFallbackSrc) && !webmPlayable;

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
  }, [inView, dark, useFallback]);

  const src = useFallback ? (dark ? darkFallbackSrc : lightFallbackSrc) : dark ? darkSrc : lightSrc;

  return (
    <video
      ref={ref}
      src={src}
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
