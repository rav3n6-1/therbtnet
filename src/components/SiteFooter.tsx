import Link from 'next/link';
import { footerNav, FOOTER_DISCLAIMER, SITE_NAME } from '@/data/navigation';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tagline Column */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white">{SITE_NAME}</span>
            <p className="text-sm text-slate-400 max-w-sm">
              Free, independent prep resources and practice tests designed to help aspiring Registered Behavior Technicians study with confidence.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm">
              {footerNav.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              {footerNav.slice(3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-xs leading-relaxed text-slate-400 space-y-4">
          <p>{FOOTER_DISCLAIMER}</p>
          <p className="text-center text-slate-500 font-medium">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
