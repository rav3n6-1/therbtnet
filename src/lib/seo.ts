/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – SEO Helpers
 *
 * Generates Metadata objects and JSON-LD structured data.
 * All meta titles/descriptions avoid any official-affiliation
 * language per compliance requirements.
 * ────────────────────────────────────────────────────────────── */

import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/data/navigation";

// ─── Metadata Builder ────────────────────────────────────────

interface PageSEO {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function buildMetadata({ title, description, path, noIndex }: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}

// ─── JSON-LD Builders ────────────────────────────────────────

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Independent Registered Behavior Technician exam-prep questions, mock exams, and study guides.",
  };
}

export function buildFAQPageJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function buildEducationalResourceJsonLd(page: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${page.path}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    educationalLevel: "Professional Certification Preparation",
    isAccessibleForFree: true,
    inLanguage: "en",
  };
}
