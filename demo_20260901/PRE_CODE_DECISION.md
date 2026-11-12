# PRE_CODE_DECISION - Pawcasso

PRE-CODE GATE = PASS. Date: 2026-09-01. Direction-level rebuild count: 1.

## Direction decision

The prior `Blue workshop care` direction was rejected by the user as weaker than the customer’s own site. The fault was structural: it reduced the official site’s address, map and review density without creating a more memorable customer-specific story.

Chosen rework direction: `Anniesland salon signal`. The actual shopfront is a dedicated Hero asset, then a blue-and-paper page moves through a service menu, appointment approach, work imagery, public-review proof and a highly legible location decision. It preserves the customer’s useful information but improves hierarchy, visual rhythm and enquiry clarity.

Dials: SOUL 8, SPECTACLE 4, DENSITY 7. Design variance 8, motion intensity 4, visual density 7.

Alternative A: retain the legacy pale-blue page and redesign only typography. Rejected because it keeps a fragmented sequence.

Alternative B: dark boutique portrait gallery. Rejected because it suppresses useful local and service facts.

## Current Offer Purchase Thesis

GBP / £99 AS-SHOWN HANDOVER or £199 ONE PERSONALISED UPDATE. In five seconds, an owner can identify Pawcasso, dog-and-cat grooming, Glasgow location and how to enquire. The page improves over the current site by prioritising the physical salon, service choice, social proof and location action in one continuous, responsive journey.

## Reference Board and boundary

1. https://www.groomsofglasgow.co.uk/ - clear service descriptions; do not copy layout or copy.
2. https://www.doggroomingglasgow.com/ - welfare explanation alongside practical grooming; do not copy assets or claims.
3. https://www.glasgowgrooming.com/contact - direct local contact hierarchy; do not copy layout or copy.
4. https://pawsome-petgrooming.co.uk/ - dual dog/cat framing; do not copy assets or claims.
5. https://www.hamptonhounds.co.uk/ - concise appointment action; do not copy layout or copy.

## Asset and fact coverage

| Asset / fact | Use | Selector / section | Boundary |
| --- | --- | --- | --- |
| Official logo | brand recognition | `.brand`, `.site-footer` | unchanged official mark |
| Official shopfront | local identity | `.hero-image` | original, crop only |
| Official grooming image 01 | appointment/care visual | `.care-image` | does not identify pet or claim result |
| Official grooming image 02 | grooming visual | `.work-tall` | does not identify pet or claim result |
| Concept cat image | cat-care atmosphere | `.work-cat` | concept only, explicit visual caption |
| Official service list | service hierarchy | `#services` | only named categories |
| User-supplied official-site reviews | trust proof | `#stories` | excerpts, internal rights status not verified |
| Address and maps URL | location action | `#visit` | real Maps external link, no fake embedded map |
| Appointment call/email route | CTA | Hero, care, visit | no availability or booking claim |

## Full-page visual storyboard

| Section | Commercial task | Visual carrier | Mobile | Motion / rights |
| --- | --- | --- | --- | --- |
| Hero | identify business and route | official shopfront | copy before image | photo settle; official source, concept only |
| Services | make choices clear | numbered service ledger | tags move under copy | scroll entry only; facts only |
| Care | reassure cautious owners | official dog image and direct appointment route | copy before image | scroll entry; official source |
| Work | show grooming texture | official groom image and concept cat visual | two-height grid | hover image scale; cat remains concept only |
| Reviews | restore trust density | 8 supplied review excerpts | horizontal rail | slow rail pauses on hover; reduced motion fallback |
| Visit | complete enquiry decision | location panel with real Maps exit | stacked location then contact | scroll entry; no third-party embed |

## Implementation mapping and preflight

- Hero: `.hero`, `.hero-image`, `.hero-card`; mobile copy first at 800px.
- Palette: `--ink`, `--blue`, `--sky`, `--warm`; one Pawcasso-blue accent with yellow wayfinding contrast.
- Layout families: Hero split, ledger services, care band, unequal work grid, review rail and directions/contact grid.
- Motion: `.reveal` uses 580ms `(0.2,0,0,1)` entries; `hero-settle` establishes place; review rail provides proof browsing; hover is under 200ms. `prefers-reduced-motion` freezes automatic effects.
- Accessibility: semantic landmarks, descriptive image alt, 44px links, no fake form/data collection, real external map link and mobile collapse.
- Anti-cheap scan: no generic equal cards, paw decoration, purple glow, fake booking, stock Hero, repeated image crop or visible internal text.

## Pre-code reviewer check

Owner self-review only. At a glance, the shopfront, Pawcasso logo and dog/cat grooming words identify the business. The route uses the known service list, exact address, phone, email, appointment model, official assets and the user-supplied review evidence. The specific upgrade is a single visual and commercial path that makes the local salon, services, reviews and action more legible than the prior version. Independent visual acceptance remains required.
