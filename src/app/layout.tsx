import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | TheRBT.net',
    default: 'Free RBT Practice Test 2026 | Independent Exam Prep',
  },
  description:
    'Free, independent study resource for Registered Behavior Technician exam prep. Original practice questions, full-length mock exams, and comprehensive study guides.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.add('dark');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
        <DisclaimerBanner />
        <SiteHeader />
        <main className="flex-1 flex flex-col py-8 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
