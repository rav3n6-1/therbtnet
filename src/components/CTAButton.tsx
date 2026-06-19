/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – CTA Button Component
 * ────────────────────────────────────────────────────────────── */

import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg focus:ring-indigo-500 active:bg-indigo-800",
    secondary:
      "border border-indigo-200 bg-white text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 focus:ring-indigo-500",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
