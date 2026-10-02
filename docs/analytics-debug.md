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
| `mock_exam_question_answered` | `test_id`, `question_number`, `domain`, `is_correct` | No |
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

Completion events (`practice_test_complete`, `mock_exam_complete`, `domain_quiz_complete`) use an in-memory `Set` guard keyed by event name, quiz slug, and the attempt's `startedAt` value. A duplicate submission for that attempt is suppressed; a retake with a new start time is counted, even without a page reload. Resuming a saved quiz preserves its start time. Attempt identifiers stay in the browser and are not sent as GA4 parameters.

The guard is updated only when the event is handed to `gtag`. If GA is unavailable or the call runs during server rendering, the function returns `false` and a later explicit call can retry. There is no background queue or automatic retry; a successful handoff is not proof of network delivery. The guard resets on a full page reload and does not provide deduplication across tabs or reloads.

`readiness_score_view` retains its existing score-and-question-count deduplication. Mock answer clicks now use `mock_exam_question_answered`, not `practice_test_question_answered`. Neither answer-click event should be marked as a key event.

### Retake regression check

1. With GA4 DebugView enabled, complete a practice test and observe one completion event.
2. Use the retake button and finish the same test again without reloading. Expect a second completion event.
3. Review answers and return to the result screen. This should not add a completion event.
4. Repeat for a topic quiz and a mock exam. Mock answer clicks should appear only under `mock_exam_question_answered`.
