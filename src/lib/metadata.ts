import type { Metadata } from "next";

export const OG_IMAGE = "/replayQA_og-image.png";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 642;
export const TWITTER_HANDLE = "@replayio";

/**
 * Builds page-level metadata with the social card attached.
 *
 * Next merges metadata shallowly: a page that declares its own `openGraph`
 * replaces the parent object outright rather than merging into it, so the
 * image from the root layout is dropped. `twitter` is a separate key and is
 * never derived from `openGraph`, so a page that sets only `openGraph` ends up
 * advertising the homepage title on X. Both have to be restated per page,
 * which is what this does.
 *
 * Pass `social` when the share card should read differently from the SEO title
 * and description.
 */
export function pageMetadata({
  title,
  description,
  canonical,
  social,
}: {
  title: string;
  description: string;
  canonical: string;
  social?: { title?: string; description?: string };
}): Metadata {
  const socialTitle = social?.title ?? title;
  const socialDescription = social?.description ?? description;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: "Replay",
      url: canonical,
      title: socialTitle,
      description: socialDescription,
      images: [
        { url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: socialTitle,
      description: socialDescription,
      images: [OG_IMAGE],
    },
  };
}
