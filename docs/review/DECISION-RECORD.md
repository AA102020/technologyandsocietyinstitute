# Technology & Society Institute Website Review — Cumulative Decision Record

**Repository:** `AA102020/technologyandsocietyinstitute`  
**Status:** Authoritative decision history  
**Established:** 2026-08-12

## Control rule

If a later expert or executive-panel review rejects or materially changes an already approved recommendation, the change must be presented as a decision gate identifying the previous decision, the objection, the replacement, why the replacement is preferable, consequences and tradeoffs, and the user's explicit ACCEPT, REJECT, or MODIFY decision. Until approval, the existing decision remains controlling.

---

# AI, Data, and Public Policy (`ai-public-policy.html`)

## D-001 — Use the original six domains only as an inspection baseline

**Decision:** APPROVED.

**Why:** The first-panel wholesale six-domain reconstruction moved too quickly from diagnosis to taxonomy. Each existing category should change only where review establishes a substantive improvement.

## D-002 — Domain 1 retained and strengthened

**Approved heading:** `AI governance and model risk`

**Approved description:**

> How institutions classify, evaluate, govern, and monitor AI systems, allocate responsibility, and establish acceptable risk.

**Why:** Preserves the useful model-risk concept and converts a compliance-style list into an actor-centered analytical proposition.

## D-003 — Domain 2 retained and strengthened

**Approved heading:** `Data privacy and governance`

**Approved description:**

> How institutions collect, access, retain, share, secure, and govern data, and how these arrangements shape privacy, responsibility, markets, and technological capability.

**Why:** Preserves the public-policy salience of privacy while treating data governance as institutional practice with economic and technological consequences.

## D-004 — Domain 3 retained and strengthened

**Approved heading:** `Public-sector AI`

**Approved description:**

> How public institutions procure, adopt, and use AI, and how these systems reshape administrative capacity, public services, decision-making, accountability, and public authority.

**Why:** Reframes government AI as procurement, adoption, use, capacity, accountability, and authority rather than a flat list of applications.

## D-005 — Remove defense from the Public-sector AI card

**Decision:** APPROVED.

**Replacement:** `AI × Military Technologies` as a cross-program intersection.

**Why:** Military AI raises distinct questions involving acquisition, autonomy, intelligence, command systems, logistics, organizational adaptation, military capability, and strategic consequences. Treating defense as another public-sector application understated the separate Military Technologies program.

## D-006 — Replace `Platforms and power`

**Approved heading:** `AI Markets, Industry, and Institutions`

**Approved description:**

> How firms, markets, institutions, infrastructure, data, capital, and labor shape the development of AI, and how control over these resources affects competition, technological capability, and political influence.

**Why:** `Platforms` was too narrow. `Political Economy of AI` was judged too disciplinary and abstract for the public-facing site. The approved heading names markets, industrial organization, and institutions directly.

## D-007 — Remove `Automated decisions and evaluation` as a standalone domain

**Decision:** APPROVED.

**Distribution:**

- evaluation, validation, reliability, robustness, auditing, monitoring → `AI governance and model risk`;
- consequential governmental decisions, review, contestability, correction, accountability → `Public-sector AI`;
- data-related fairness, representativeness, provenance, governance → `Data privacy and governance`.

**Why:** The category mixed an application with an evaluative practice and operated at a different analytical level from the other domains.

## D-008 — Remove `AI infrastructure and applied analysis` as a standalone domain

**Decision:** APPROVED.

**Approved treatment:** remove the standalone domain; distribute infrastructure selectively according to the research question; preserve `AI Infrastructure` as an explicit cross-cutting research area; incorporate infrastructure into the program introduction and relevant cross-program connections; treat `applied analysis` as a research method or capability.

**Why:** The original category combined an object of research with a research activity and overlapped with other domains.

## D-009 — Four-domain core architecture

**Decision:** APPROVED AND CONTROLLING.

1. `AI governance and model risk`
2. `Data privacy and governance`
3. `Public-sector AI`
4. `AI Markets, Industry, and Institutions`

**Cross-cutting research:** `AI Infrastructure`

**Cross-program intersections:**

- `AI × Innovation and Economics`
- `AI × Manufacturing Technologies`
- `AI × Military Technologies`
- `AI × Regulation and Society`

**Why:** The four-domain architecture is more parsimonious, differentiated, and durable than both the original and first-panel six-domain versions.

## D-010 — Preserve infrastructure visibility

**Decision:** APPROVED.

**Rule:** Infrastructure remains explicitly visible even though it is no longer a core domain.

**Scope:** semiconductors, compute, cloud infrastructure, data centers, energy, supply chains, and technical labor as foundations of AI development and deployment.

## D-011 — Maintain two cumulative control documents

**Decision:** APPROVED.

- `docs/review/DECISION-RECORD.md` records decision history and rationale.
- `docs/review/FINAL-DESIGN-SPECIFICATION.md` records only the current approved implementation state.

## D-012 — Controlled rebuild workflow

**Decision:** APPROVED.

1. Intellectual reconstruction.
2. Cumulative specification updates after approvals.
3. Page-level freeze.
4. Website-wide architecture review.
5. Visual and UX specification.
6. GitHub implementation on a dedicated branch.
7. Technical inspection and regression review.
8. User final approval.
9. Publish/merge to production.

## D-013 — UX-EXPERIMENT-01 Light/Dark reading mode

**Decision:** APPROVED AND MERGED TO PRODUCTION on 2026-08-13.

**Approved behavior:** compact `Dark` / `Light` text control; operating-system theme detection on first visit; remembered explicit preference; keyboard-accessible button semantics; theme-specific dark palette.

**Current implementation scope:** `ai-public-policy.html`.

**Why:** Gives readers of text-heavy research material a reading-mode choice while preserving a restrained editorial interface. The text control is clearer and more accessible than an unlabeled icon.

---

# Pending decisions

## P-001 — Reconstructed opening for `ai-public-policy.html`

The title, subtitle, protected proposition, one-sentence program description, and two explanatory paragraphs have been reviewed and recommended, but the reconstructed opening has not yet received explicit approval and therefore is not controlling.

---

# Maintenance rule

Every future approved website decision must be appended here. The Final Design Specification must then be updated to reflect only the currently controlling approved state.
