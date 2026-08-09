import type { MetadataRoute } from 'next';
import { exams } from '@/data/exams';
import { studyGuides } from '@/data/studyGuides';
import { topics } from '@/data/topics';

const BASE_URL = 'https://therbt.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core static pages
  const staticRoutes = [
    '',
    '/practice-tests',
    '/mock-exam',
    '/study-guide',
    '/topic-quizzes',
    '/flashcards',
    '/exam-format',
    '/40-hour-training-guide',
    '/competency-assessment-guide',
    '/about',
    '/faq',
    '/contact',
    '/resources',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Practice Test detail pages
  const practiceTestRoutes = exams
    .filter((e) => e.mode === 'practice')
    .map((e) => ({
      url: `${BASE_URL}/practice-tests/${e.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  // Study Guide detail pages
  const studyGuideRoutes = studyGuides.map((s) => ({
    url: `${BASE_URL}/study-guide/${s.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Topic Quiz detail pages
  const topicQuizRoutes = topics.map((t) => ({
    url: `${BASE_URL}/topic-quizzes/${t.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...practiceTestRoutes,
    ...studyGuideRoutes,
    ...topicQuizRoutes,
  ];
}
