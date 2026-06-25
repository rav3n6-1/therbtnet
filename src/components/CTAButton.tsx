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
      "bg-orange-600 text-white shadow-md hover:bg-orange-700 hover:shadow-lg focus:ring-orange-500 active:bg-orange-800",
    secondary:
      "border border-orange-200 bg-white text-orange-600 hover:bg-orange-50 hover:border-orange-300 focus:ring-orange-500",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
