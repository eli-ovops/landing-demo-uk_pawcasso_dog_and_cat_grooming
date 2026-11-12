# Pawcasso Demo QA - SELF CHECK

Status: REBUILD IN PROGRESS. The previous screenshots are rejected evidence and are not valid for independent visual acceptance.

- Desktop evidence: `evidence/pawcasso-optimised-desktop-1440x900-20260901.png` (1440x900).
- Mobile evidence: `evidence/pawcasso-optimised-mobile-390x844-20260901.png` (390x844).
- Image ledger: official logo, shopfront and two official dog photos are frozen under `assets/official/`; sources and SHA-256 values are in `research_20260901/ASSET_INVENTORY.csv`. `assets/location-map-screen.png` is a local crop of the user-supplied official-site screenshot, placed within a CSS phone frame; the separate Google Maps link remains the actual location action. `assets/concept-care-tools.png` and the cat visual are concept-only and recorded in `CONCEPT_IMAGE_LEDGER_20260901.md`.
- Business fidelity: page uses the logo, official shopfront, named services, address, phone, email and appointment-only route. Eight review excerpts are from the user-supplied official-site screenshots. It adds no price, availability, booking, staff, award, review-count or result claim.
- CTA check: links use published `tel:`, `mailto:` and the supplied Google Maps route. There is no form or data collection.
- Motion check: image settle, reveal entries, review rail and CTA hover each have a reduced-motion fallback.
- Remaining gate: capture and inspect rebuilt desktop/mobile; independent reviewer must decide Client-showable status.

## Local preview package

- Package: `Pawcasso_LOCAL_PREVIEW_PACKAGE_20260901.zip`
- SHA-256: `b3cd5c046f970408ba36cdb38507d85242761e9fa0aed2954f41e6be3e2d4c19`
- Contents: direct static root with `index.html`, CSS/JS, frozen required assets and `MANIFEST.sha256` only.
- Verification: `unzip -t` passed; every manifest entry passed SHA-256 verification; no `.DS_Store`, `._*` or `__MACOSX` entries.
- Boundary: local preview package only. It is not a deployment package or source-transfer package.
