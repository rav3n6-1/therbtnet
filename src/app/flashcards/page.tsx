import { Metadata } from 'next';
import { flashcards } from '@/data/flashcards';
import FlashcardDeck from '@/components/FlashcardDeck';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Free RBT Flashcards | Behavior Analysis Terms & Definitions',
  description:
    'Master key behavior analysis terms, acronyms, and definitions with our free, interactive 3D flashcards deck.',
  path: '/flashcards',
});

export default function FlashcardsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Flashcards', href: '/flashcards' },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Interactive Flashcards
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Review core definitions, acronyms, and operational concepts. Use the deck filters to study by domain, search for terms, and track known versus unknown cards.
        </p>
      </div>

      <FlashcardDeck cards={flashcards} />
    </div>
  );
}
