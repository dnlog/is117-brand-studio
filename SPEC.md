# Brand Studio decisions

This is the durable agreement between the learner and agent. Keep it concise and update it only with agreed choices or actual evidence. `Not chosen yet` is a valid status. Persona cards are hypotheses unless supported by real research.

[LEARNING.md](LEARNING.md) holds the short, reviewable record of learner explanations and help received. Keep the brand decisions and implementation evidence here; link rather than duplicate them.

## Current stage

- Stage: Modernist direction chosen; original wordmark proposal ready for review.
- Current feature: `BRAND-001` — first branded storefront and live style guide.
- Status: Scope, early brief, and visual direction agreed; logo approval pending.
- Next small decision: Keep or adjust the original SVG wordmark proposal.

## Product boundary

The product is the same white T-shirt throughout the comparison. The baseline offers a size selector and temporary demo bag. No real orders, payment, accounts, or persistence. Keep product facts stable between directions; do not add unsupported claims about materials, manufacturing, sustainability, fit, delivery, scarcity, reviews, or sales.

## Audience hypotheses

The primary need guides the page. Give the secondary card one contrasting need to check that same page; keep both cards brief.

| Tiny card                             | Primary audience                                                                            | Secondary audience        |
| ------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------- |
| Person in a concrete situation        | Someone going to a coffee shop for an everyday outing                                       | Not chosen yet            |
| Goal or meaning they seek             | A simple but distinctive shirt with no prominent front or back logo                         | Not chosen yet            |
| Concern before choosing               | Wants evidence for material and quality claims; evidence has not been provided              | Not chosen yet            |
| What the page should help them decide | Whether this simple white shirt feels distinctive enough for an everyday coffee-shop outfit | Not chosen yet            |
| Evidence or assumption                | Learner's design hypothesis; no customer research or product-quality evidence               | Assumption; not validated |

## Early brand brief

| Decision                                 | Agreement                                                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Brand name                               | Form — learner chose it because it "sounds nice on its own"                                                        |
| One-sentence promise                     | "An everyday white T-shirt with an understated design and clear information, without the hype." AI draft approved. |
| Primary archetype: the brand's character | Sage — learner identified it as the closest fit; working primary archetype                                         |
| Supporting archetype                     | Creator, to express intentional design; Everyman remains undecided                                                 |
| Three voice traits                       | Clear, direct, understated — AI proposal approved; learner's reasons not yet evidenced                             |
| One example line in this voice           | Not chosen yet                                                                                                     |
| Learner's predicted audience effect      | Learner expects no prominent logo to avoid a "walking billboard" feel and reduce distraction                       |

## Visual decision

Compare two small hero previews before building the whole page. Hold the product, headline, supporting copy, and action identical. Use specific real design references and annotate visual choices, intended effect, and risk.

A simple original SVG wordmark is enough. Show small-size and one-color presentations; they may use the same asset when it works.

| Item                                              | Agreement or evidence                                                                                                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Shared headline / support / action                | AI draft for comparison only: “A white tee, without the billboard.” / approved promise / “Choose a size”; final copy not agreed                              |
| Modernist preview, reference, and annotations     | [Preview A and notes](public/explorations/index.html); [Josef Müller-Brockmann, _Musica Viva_ (1958), MoMA](https://www.moma.org/collection/works/7233/)     |
| Postmodernist preview, reference, and annotations | [Preview B and notes](public/explorations/index.html); [Barbara Kruger, _Untitled (Can I Help You?)_ (1987), SFMOMA](https://www.sfmoma.org/artwork/97.770/) |
| Chosen direction and reason                       | Modernist, inspired by Müller-Brockmann; learner said it keeps things simple and to the point and postmodernism does not suit the brand                      |
| Original SVG logo                                 | [Form wordmark proposal](public/explorations/logo-proposal.html); not yet approved                                                                           |
| Monochrome and small-size variants                | One-color dark-ink and reversed-white SVGs; shown at 150px navigation size and 72px small size                                                               |
| Logo review at actual use size                    | Previewed in the storefront navigation context; learner review pending                                                                                       |
| Shared palette, typography, spacing, and assets   | Not chosen yet                                                                                                                                               |

## Ethical persuasion

Choose two applications that help the visitor make a voluntary, informed decision. Record their real implementation and mechanism rather than a principle name alone. Required size selection or validation alone does not establish consistency. Do not invent social proof, scarcity, authority, or product facts.

| Principle      | Actual copy or interaction | Visitor benefit / factual support |
| -------------- | -------------------------- | --------------------------------- |
| Not chosen yet | Not chosen yet             | Not chosen yet                    |
| Not chosen yet | Not chosen yet             | Not chosen yet                    |

## BRAND-001 — first branded storefront and live style guide

**Scope:** turn the working neutral storefront into the chosen brand's first coherent page. Keep the existing size selector and demo bag usable. Do not add checkout or all future features.

Keep when:

- The learner has chosen the audience hypotheses, brief, visual direction, and logo; the page visibly expresses those choices.
- Two annotated hero directions compare modernist/postmodernist thinking with the same content and real source links.
- The selected SVG logo works at small size and in one color; the presentations may share one asset.
- The storefront and live style guide share CSS variables, typography, components, and assets; they do not drift into separate identities.
- Two ethical persuasion applications are visible and their claims are supportable.
- Prepared checks pass, the agent has reviewed the slice and discussed one actual check, and the learner has reported a browser impression plus keyboard/mobile observations.
- The issue, branch, commit, and PR explain this feature in the learner's repository; agreed decisions and actual evidence are saved here. The learner has approved keeping and merging the change, and the merge into `main` is verified. Publishing is a separate choice.

## Evidence

Write a short result and link only evidence that exists. A passing browser check is evidence for its assertions, not customer research or proof of full accessibility.

| Spec ID   | Files                                                                                                                                                                                                                                                                                  | Issue / PR                                                       | Actual checks and observations                                                                                                                                                                                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BRAND-001 | [package.json](package.json), [storefront](public/index.html), [shop.js](public/shop.js), [styles.css](public/styles.css), [hero comparison](public/explorations/index.html), [logo proposal](public/explorations/logo-proposal.html), [wordmark SVG](public/assets/form-wordmark.svg) | [Issue #1](https://github.com/dnlog/is117-brand-studio/issues/1) | `npm ci` succeeded. After the logo proposal, format and lint passed, all 7 server tests passed, and all 10 browser tests reported passed; `npm run check` did not exit normally because the Playwright test server stayed alive, so it was interrupted after the results. Hero renders inspected at 1440px and 375px; learner chose the modernist direction. Logo preview inspected at navigation and small sizes; learner review pending. |

## Later

No follow-up is selected. After keeping `BRAND-001`, choose one next cycle: perhaps a brand story, a supported fit guide, or richer demo-bag behavior. Agree its scope and add one new spec ID at that time.
