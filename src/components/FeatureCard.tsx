import Link from 'next/link';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:border-indigo-500/50 dark:hover:border-indigo-400/50 transition-all hover:-translate-y-1"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
        Get Started
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
