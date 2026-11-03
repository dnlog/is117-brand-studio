# Conversation evidence

AI-drafted task evidence, not a transcript or grade. This file may be public: review, correct or remove excerpts before commit/push. Use short actual quotes or labeled paraphrases and disclose help. Approval alone is not an explanation; leave missing evidence pending.

- **Feature:** BRAND-001 — in progress
- **Date:** 2026-11-02
- **Conversation context available:** This chat; compact excerpts below
- **Review status:** Earlier summary reviewed on 2026-11-02; this direction choice and logo-work update await review

## Student contributions

| Checkpoint                                   | Actual student words or labeled paraphrase                                                                                                                                          | Assistance supplied                                                                   | Evidence or gap                                                                              |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Choice and reason                            | Chose **Form** because it "sounds nice on its own"; chose Creator's intentional design; prefers modernism as simple and to the point, saying postmodernism does not suit the brand. | AI suggested name, promise, voice traits, and paired visual directions.               | [SPEC.md](SPEC.md); reasons for approving promise and voice remain not yet evidenced.        |
| Prediction or visitor benefit                | Expects the low-profile look to feel less distracting; approved a page helping coffee-shop shoppers judge if the shirt feels distinctive enough.                                    | AI framed the page-decision example; the student's no-billboard rationale came first. | Audience and effect are hypotheses, not customer research.                                   |
| Interpretation of one actual test            | Not yet evidenced.                                                                                                                                                                  | AI ran the prepared check.                                                            | `npm run check` passed, but the learner has not explained what a specific assertion catches. |
| Browser observation and keep/revise decision | Reported the bag count rises after each add; after the banner, said its top position makes confirmation clear and the count helps track items.                                      | AI added the confirmation banner and bag summary.                                     | Local observation; no post-change keyboard/mobile observation yet.                           |

## AI work and evidence links

- **Work performed by AI:** Installed dependencies and Chromium, fixed Windows lint glob quoting, added an accessible top confirmation banner and live bag summary, created two referenced hero explorations, and drafted a geometric SVG wordmark with one-color variants.
- **SPEC, issue/PR, actual checks and artifacts:** [SPEC.md](SPEC.md); [Issue #1](https://github.com/dnlog/is117-brand-studio/issues/1); [hero comparison](public/explorations/index.html); [logo proposal](public/explorations/logo-proposal.html); [wordmark SVG](public/assets/form-wordmark.svg). After the logo proposal, format and lint passed, all 7 server tests and all 10 browser tests reported passed; the full command needed interruption because its Playwright test server stayed alive.

**Next step:** Review the original SVG wordmark proposal. The secondary audience remains undecided; the student has not explained a specific check's purpose. No PR, commit, or deployment exists.
