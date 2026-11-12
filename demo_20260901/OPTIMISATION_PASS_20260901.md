# Pawcasso Optimisation Pass - 2026-09-01

Design Read: Glasgow pet-grooming brand site for cautious local owners, with a confident neighbourhood-salon language, register=brand, SPECTACLE=4, Hero engine=restrained image settle.

## Decisions applied

- `finesse-ui redesign`: kept the customer’s content and location architecture, then strengthened the premium substrate with a blue-tinted grain layer, translucent borders, one locked cobalt accent and a consistent pill/button plus soft-card radius rule.
- `design-taste-frontend`: retained the customer-relevant place-led image Hero and replaced repetitive middle-page flatness with a varied ledger, media band, unequal image work grid, proof rail and phone/location composition. The lazy default rejected is pastel pet-shop cards and paw-print decoration.
- `motion-design`: calm motion personality. Service and work elements rise only when entering the view, the care image has a deliberate hover zoom to invite inspection, the review rail pauses on hover, and the phone has a small responsive lift. These effects use transform/opacity or a native scroll timeline and all freeze with `prefers-reduced-motion`.
- `media-use`: used only the existing frozen official assets and the user-supplied original-site map crop. No new provider, upload, login or generated business claim was introduced.
- `website-delivery-sop`: remains a local static concept only. No deployment, forms, analytics, booking system or external write.

## Intended commercial improvement

The user sees a recognisable real salon first, then named care options, a personal enquiry route, visual proof, owner proof and a physical location. This gives the existing factual material a clearer reason to keep scrolling and to call.

## Second trust pass

The official Pawcasso site was rechecked on 2026-09-01. It states: grooming experience since 2002, membership of the Pet Industry Federation and British Dog Groomers Association, and pet welfare as a priority. `trust.js` inserts those official-site claims after the appointment approach in a three-part editorial proof layout. It deliberately does not fabricate case studies, named staff, outcomes or certification details beyond the official wording.

An original, local concept visual of grooming tools and a folded blue towel is added to this proof section. It is logged in `CONCEPT_IMAGE_LEDGER_20260901.md`; it is visual support only and does not represent Pawcasso premises, staff, equipment or work.

## Motion specification

| Element | Purpose | Motion | Fallback |
| --- | --- | --- | --- |
| Service and work elements | guide reading order | 680ms upward entry, `cubic-bezier(.16,1,.3,1)` | visible static state |
| Care image | invite closer inspection | 1.2s image scale on hover | no transform |
| Reviews | encourage proof browsing | existing slow rail and 320ms card lift | rail remains static / hover has no shift |
| Phone map | make location tactile | 500ms small lift on hover | no transform |
