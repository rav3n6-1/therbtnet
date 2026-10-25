import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import ResultsSummary from '../ResultsSummary';
import { questions } from '@/data/questions';
import { calculateResults } from '@/lib/quiz-utils';
import { loadProgress } from '@/lib/storage';
import { QuizAnswer } from '@/types';

vi.mock('@/lib/storage', () => ({ loadProgress: vi.fn(() => null) }));

const mockQuestions = questions.filter((question) => question.examSlug === 'mock-exam');

function resultWithAnswers(count: number) {
  const answers: QuizAnswer[] = mockQuestions.map((question, index) => ({
    questionId: question.id,
    selectedChoiceId: index < count ? question.correctChoiceId : null,
    isCorrect: index < count ? true : null,
    isBookmarked: false,
    isFlagged: false,
  }));
  return calculateResults('mock-exam', mockQuestions, answers, new Date().toISOString());
}

function renderResult(result: ReturnType<typeof calculateResults>) {
  return renderToStaticMarkup(<ResultsSummary result={result} onRetake={() => {}} onReviewAnswers={() => {}} />);
}

beforeEach(() => vi.mocked(loadProgress).mockReturnValue(null));

describe('incomplete quiz results', () => {
  it('shows 2/85 session scoring and does not call a two-answer sample strong readiness', () => {
    const result = resultWithAnswers(2);
    expect(result.totalQuestions).toBe(85);
    expect(result.answeredQuestions).toBe(2);
    expect(result.percentage).toBe(2);
    const html = renderResult(result);
    expect(html).toContain('2 correct out of 85 questions.');
    expect(html).toContain('2 answered · 83 unanswered');
    expect(html).toContain('Incomplete session');
    expect(html).toContain('More answers needed');
    expect(html).not.toContain('Strong readiness');
    expect(html).not.toContain('Your weakest area is');
    expect(html).toContain('Not attempted');
  });

  it('keeps saved practice accuracy separate from the current session score', () => {
    vi.mocked(loadProgress).mockReturnValue({
      version: 1,
      lastUpdated: new Date().toISOString(),
      totalQuestionsAnswered: 100,
      totalCorrect: 100,
      readinessScore: 100,
      domains: {},
      questionResults: {},
      completedTests: [],
    });
    const html = renderResult(resultWithAnswers(2));
    expect(html).toContain('2 correct out of 85 questions.');
    expect(html).toContain('Practice accuracy across saved sessions');
    expect(html).toContain('Based on 100 answered questions');
  });

  it('handles an entirely unanswered submission without recommending unattempted topics', () => {
    const result = resultWithAnswers(0);
    expect(result.answeredQuestions).toBe(0);
    expect(result.topicBreakdown.every((topic) => topic.answered === 0)).toBe(true);
    const html = renderResult(result);
    expect(html).toContain('0 correct out of 85 questions.');
    expect(html).toContain('0 answered · 85 unanswered');
    expect(html).not.toContain('Your weakest area is');
    expect(html).not.toContain('Strong readiness');
  });

  it('preserves fully answered results', () => {
    const html = renderResult(resultWithAnswers(85));
    expect(html).toContain('85 correct out of 85 questions.');
    expect(html).toContain('85 answered · 0 unanswered');
    expect(html).toContain('Strong readiness');
    expect(html).not.toContain('Incomplete session');
    expect(html).not.toContain('Not attempted');
  });

  it('still renders results saved before answer counts were recorded', () => {
    const result = resultWithAnswers(85);
    delete result.answeredQuestions;
    result.topicBreakdown.forEach((topic) => delete topic.answered);
    expect(renderResult(result)).toContain('85 correct out of 85 questions.');
  });
});
