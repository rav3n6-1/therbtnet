/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Breadcrumbs Component
 * ────────────────────────────────────────────────────────────── */

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-slate-300" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className="font-medium text-slate-800">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-indigo-600"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
