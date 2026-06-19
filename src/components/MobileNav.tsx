'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNav } from '@/data/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-slate-900 p-6 shadow-2xl flex flex-col transition-transform transform translate-x-0 animate-slide-up duration-200">
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
          <span className="text-lg font-bold text-slate-900 dark:text-white">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 space-y-4">
          {mainNav.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            return (
              <div key={item.label} className="space-y-2">
                {hasChildren ? (
                  <>
                    <div className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.children?.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                              isChildActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-300'
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                      pathname === item.href ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
