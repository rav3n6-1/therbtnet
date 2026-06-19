import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import TopicCard from '@/components/TopicCard';
import FAQAccordion from '@/components/FAQAccordion';
import SEOJsonLd from '@/components/SEOJsonLd';
import Link from 'next/link';
import { topics } from '@/data/topics';
import { faqs } from '@/data/faqs';
import { buildMetadata, buildWebsiteJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Free RBT Practice Test 2026 | Independent Exam Prep',
  description:
    'Prepare for your certification with our free, independent Registered Behavior Technician practice questions, mock exams, and study guides.',
  path: '/',
});

export default function Home() {
  // Website JSON-LD data
  const jsonLdData = buildWebsiteJsonLd();

  // Preview first 4 topics and first 4 FAQs
  const previewTopics = topics.slice(0, 4);
  const previewFaqs = faqs.slice(0, 4);

  return (
    <div className="space-y-16">
      <SEOJsonLd data={jsonLdData} />

      {/* Hero Section */}
      <HeroSection />

      {/* Quick Start Features Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white text-center">
          Get Started Preparing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon="📝"
            title="Practice Tests"
            description="Take full practice tests covering all RBT task list domains with detailed rationales."
            href="/practice-tests"
          />
          <FeatureCard
            icon="⏱"
            title="Mock Exam"
            description="Test your knowledge with an 85-question mock exam simulation and a 90-minute timer."
            href="/mock-exam"
          />
          <FeatureCard
            icon="📚"
            title="Study Guides"
            description="Review conceptual breakdowns, definitions, and application examples for each topic area."
            href="/study-guide"
          />
          <FeatureCard
            icon="🎴"
            title="Flashcards"
            description="Master key behavior analysis definitions, terms, and acronyms with 3D flashcards."
            href="/flashcards"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-100 dark:bg-slate-900/60 rounded-3xl p-8 sm:p-12 border border-slate-200/50 dark:border-slate-800/40 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            How TheRBT.net Helps You Study
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A comprehensive, loop-based learning method designed to reinforce conceptual understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="inline-flex w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm items-center justify-center">1</span>
            <h3 className="font-bold text-slate-800 dark:text-white">Learn Concepts</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Read through our detailed study guides aligned with behavior analysis concepts.
            </p>
          </div>
          <div className="space-y-3">
            <span className="inline-flex w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm items-center justify-center">2</span>
            <h3 className="font-bold text-slate-800 dark:text-white">Practice Items</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Take practice questions and receive immediate conceptual feedback and rationales.
            </p>
          </div>
          <div className="space-y-3">
            <span className="inline-flex w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm items-center justify-center">3</span>
            <h3 className="font-bold text-slate-800 dark:text-white">Review Weaknesses</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Use topic-specific breakdowns and targeted quizzes to address knowledge gaps.
            </p>
          </div>
          <div className="space-y-3">
            <span className="inline-flex w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm items-center justify-center">4</span>
            <h3 className="font-bold text-slate-800 dark:text-white">Simulate Exams</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Build test-taking endurance with our timed mock exam simulator.
            </p>
          </div>
        </div>
      </section>

      {/* Topic Cards Overview */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Study by Topic
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Focus on specific content areas defined in the RBT task list domains.
            </p>
          </div>
          <Link href="/topic-quizzes" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            View All Topics →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {previewTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>

      {/* Mock Exam CTA */}
      <section className="rounded-3xl bg-indigo-900 border border-indigo-950 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
        <div className="space-y-4 max-w-xl">
          <span className="inline-flex items-center gap-1 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-200">
            ⏳ Full Exam Simulation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
            Ready to simulate the exam?
          </h2>
          <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
            Our 85-question mock exam has a 90-minute countdown timer and represents the structure of the RBT exam. All questions are original study items.
          </p>
        </div>
        <Link
          href="/mock-exam"
          className="w-full md:w-auto bg-white text-indigo-900 font-semibold px-8 py-4 rounded-xl text-center shadow-md hover:bg-slate-50 transition-colors"
        >
          Start Mock Exam
        </Link>
      </section>

      {/* FAQ Accordion preview */}
      <section className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Honest answers about our independent platform and prep tools.
          </p>
        </div>
        <FAQAccordion faqs={previewFaqs} />
        <div className="text-center pt-4">
          <Link href="/faq" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            View All FAQs →
          </Link>
        </div>
      </section>
    </div>
  );
}
