# TheRBT.net Production Content Seed

This package contains drop-in replacements for the six files in `src/data/`:

- `questions.ts` — 160 original multiple-choice practice items
- `flashcards.ts` — 84 original study cards
- `studyGuides.ts` — 6 domain guides
- `exams.ts` — 3 × 25-item practice tests and 1 × 85-item mock simulation
- `topics.ts` — six-domain topic and subtopic metadata
- `sources.ts` — source-review metadata

## Content status

All educational objects are marked `reviewed`, not `verified`. The content has passed structural, internal-consistency, duplicate, answer-key, source-reference, and TypeScript checks. Before launch, a qualified behavior-analysis subject-matter expert should perform and document an independent clinical review. After that review, your team may change `status` to `verified` under its governance policy.

## Installation

Copy the files from `src/data/` into the repository's `src/data/` directory.

The supplied configuration contains exactly three practice tests. Remove any hard-coded navigation link to `practice-test-4` if the UI still contains one from the placeholder build.

## Validation

From this package directory, run:

```bash
node scripts/validate-content.mjs
```

The validator checks counts, IDs, topic/exam references, source references, answer options, distractor explanations, production statuses, mock-domain allocation, prohibited official-item claims, duplicate stems, and answer-key balance.

## Compliance position

The items, distractors, explanations, flashcards, and study-guide prose were independently written for TheRBT.net. They are not official, retired, recalled, reconstructed, or BACB-approved examination items. Official materials are referenced only for public metadata, broad content-area alignment, and current certification context.

`RBT®`, `BACB®`, and related marks belong to their respective owner. TheRBT.net must continue displaying a clear non-affiliation statement.
