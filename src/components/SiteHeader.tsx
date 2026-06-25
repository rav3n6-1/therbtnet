'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNav, SITE_NAME } from '@/data/navigation';
import MobileNav from './MobileNav';

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-orange-600 dark:text-orange-400">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNav.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isActive = pathname === item.href || (item.children?.some(c => pathname === c.href));

            if (hasChildren) {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative dropdown-container"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setActiveDropdown(null);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setActiveDropdown(null);
                      const button = e.currentTarget.querySelector('button');
                      button?.focus();
                    }
                  }}
                >
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-600 dark:hover:text-orange-400 py-2 ${
                      isActive ? 'text-orange-600 dark:text-orange-400' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 w-56 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 shadow-lg animate-fade-in">
                      {item.children?.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 ${
                              isChildActive ? 'text-orange-600 dark:text-orange-400' : 'text-slate-600 dark:text-slate-300'
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-600 dark:hover:text-orange-400 ${
                  isActive ? 'text-orange-600 dark:text-orange-400' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Open navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </header>
  );
}
