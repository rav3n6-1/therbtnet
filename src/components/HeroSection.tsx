import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-800 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Decorative Grid SVG */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 text-xs sm:text-sm font-medium tracking-wide uppercase text-indigo-200">
          ✨ 100% Free Study Prep
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Free RBT Practice Test 2026
        </h1>

        <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
          Independent Registered Behavior Technician exam-prep questions, mock exams, and study guides to help you prepare with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/practice-tests"
            className="w-full sm:w-auto bg-white text-indigo-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-slate-50 transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Start Free Practice Test
          </Link>
          <Link
            href="/study-guide"
            className="w-full sm:w-auto border-2 border-white/80 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            View Study Guide
          </Link>
        </div>

        <div className="text-xs text-indigo-200 border-t border-indigo-500/20 pt-6 max-w-lg mx-auto">
          🔒 Original practice questions. No official BACB exam items. Not affiliated with or endorsed by the BACB®.
        </div>
      </div>
    </section>
  );
}
