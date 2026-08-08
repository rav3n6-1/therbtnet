# Analytics Debug Guide — TheRBT.net

## Events Reference

### Practice Tests
| Event | Parameters | Key Event? |
|-------|-----------|------------|
| `practice_test_start` | `test_id`, `test_name`, `question_count` | No |
| `practice_test_question_answered` | `test_id`, `question_number`, `domain`, `is_correct` | No |
| `practice_test_complete` | `test_id`, `test_name`, `question_count`, `score_percent`, `correct_answers`, `duration_seconds`, `domains_attempted` | **Yes** |

### Mock Exam
| Event | Parameters | Key Event? |
|-------|-----------|------------|
| `mock_exam_start` | `test_id`, `test_name`, `question_count` | No |
| `mock_exam_complete` | `test_id`, `test_name`, `question_count`, `score_percent`, `correct_answers`, `duration_seconds`, `domains_attempted` | **Yes** |

### Domain/Topic Quizzes
| Event | Parameters | Key Event? |
|-------|-----------|------------|
| `domain_quiz_start` | `domain`, `quiz_id`, `question_count` | No |
| `domain_quiz_complete` | `domain`, `quiz_id`, `score_percent`, `question_count` | **Yes** |

### Readiness Feature
| Event | Parameters | Key Event? |
|-------|-----------|------------|
| `readiness_score_view` | `readiness_score`, `questions_used`, `weakest_domain` | No |
| `weak_domain_recommendation_click` | `source_domain`, `destination_path`, `readiness_score` | No |
| `continue_studying_click` | `readiness_score`, `destination_path` | No |

## Validating Events in Development

In development mode (`npm run dev`), all analytics events are logged to the browser console:

```
[Analytics] practice_test_start {test_id: "practice-test-1", test_name: "Practice Test 1: Foundations", question_count: 25}
[Analytics] practice_test_question_answered {test_id: "practice-test-1", question_number: 1, domain: "measurement", is_correct: true}
[Analytics] practice_test_complete {test_id: "practice-test-1", ...}
```

Duplicate events are logged with a `SKIPPED` prefix:
```
[Analytics] SKIPPED (duplicate): practice_test_complete {uniqueId: "practice-test-1"}
```

## Validating Events in GA4 DebugView

1. Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension.
2. Enable it (the extension icon turns green).
3. Visit your site — events will now appear in **GA4 Admin → DebugView** in real time.

Alternatively, add `debug_mode` to the gtag config in `layout.tsx` temporarily:
```js
gtag('config', 'G-XXXXXXXXXX', {
  page_path: window.location.pathname,
  debug_mode: true,
});
```

## Configuring Key Events in GA4

After deployment, configure the following as **Key Events** (formerly "Conversions") in GA4:

1. Go to **GA4 Admin → Events**
2. Find each event listed as a Key Event above
3. Toggle the "Mark as key event" switch

Key Events:
- `practice_test_complete`
- `mock_exam_complete`
- `domain_quiz_complete`

> **Note:** Do NOT mark `practice_test_question_answered` as a key event.
> It fires on every answer click and would inflate conversion counts.

## Deduplication

One-shot events (`practice_test_complete`, `mock_exam_complete`, `domain_quiz_complete`, `readiness_score_view`) use a session-level `Set` guard. This prevents duplicate events from React rerenders or strict mode double-mounting.

The dedup key is `${eventName}__${uniqueId}` — a fresh page load resets the guard, which is the correct behavior (a new session should be able to fire events again).
