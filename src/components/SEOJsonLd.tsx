/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – SEO JSON-LD Component
 *
 * Renders a <script type="application/ld+json"> tag with
 * structured data for search engines.
 * ────────────────────────────────────────────────────────────── */

interface SEOJsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export default function SEOJsonLd({ data }: SEOJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
