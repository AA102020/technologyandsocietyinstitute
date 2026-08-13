# Technology & Society Institute Website — Cumulative Final Design Specification

**Repository:** `AA102020/technologyandsocietyinstitute`  
**Status:** Current approved implementation specification  
**Established:** 2026-08-12

## Control principle

This document contains only the currently approved design state. Decision history, rejected alternatives, and rationales belong in `DECISION-RECORD.md`.

Proposed or experimental UX features are not controlling until explicitly approved.

---

# AI, Data, and Public Policy (`ai-public-policy.html`)

## Program identity

**Title:** AI, Data, and Public Policy

**Subtitle:** AI, data, and public governance

**Protected program proposition:**

> AI policy requires analysis of institutions, markets, and technical systems.

The broader opening reconstruction remains pending explicit approval and is therefore not yet included as final copy here.

## Core research architecture

### 1. AI governance and model risk

> How institutions classify, evaluate, govern, and monitor AI systems, allocate responsibility, and establish acceptable risk.

### 2. Data privacy and governance

> How institutions collect, access, retain, share, secure, and govern data, and how these arrangements shape privacy, responsibility, markets, and technological capability.

### 3. Public-sector AI

> How public institutions procure, adopt, and use AI, and how these systems reshape administrative capacity, public services, decision-making, accountability, and public authority.

### 4. AI Markets, Industry, and Institutions

> How firms, markets, institutions, infrastructure, data, capital, and labor shape the development of AI, and how control over these resources affects competition, technological capability, and political influence.

## Cross-cutting research

### AI Infrastructure

AI Infrastructure must remain explicitly visible even though it is not a standalone core domain.

Scope includes semiconductors, compute, cloud infrastructure, data centers, energy, supply chains, and technical labor as foundations of AI development and deployment.

Infrastructure components should also be distributed selectively across the four core domains according to the research question.

## Cross-program connections

The page will later provide explicit connections across the Institute:

- AI × Innovation and Economics
- AI × Manufacturing Technologies
- AI × Military Technologies
- AI × Regulation and Society

### AI × Military Technologies

Defense AI is not treated as a sub-item within the Public-sector AI card. The intersection should cover military AI adoption, procurement, autonomy, intelligence, command systems, logistics, organizational adaptation, evaluation and reliability, military capability, and strategic consequences.

## Research methods and capabilities

`Applied analysis` is not a substantive research domain. If used on the website, it should appear as a research method or capability.

## Removed standalone domains

The following are not part of the final core-domain architecture:

- Automated decisions and evaluation
- AI infrastructure and applied analysis

Their substantive concerns are retained through selective distribution and the cross-cutting infrastructure architecture.

---

# UX and visual design status

The existing visual system remains the approved baseline while UX experiments are evaluated.

## UX-EXPERIMENT-01 — Light / Dark theme control

**Status:** EXPERIMENTAL, NOT YET APPROVED FOR PRODUCTION

Prototype branch: `agent/dark-mode-experiment`

The experiment tests a compact Light/Dark control, system-theme detection on first visit, remembered manual preference, accessible button semantics, and a dark palette derived from the Institute's existing CSS-variable system.

No production requirement is created until explicit user approval.

---

# Implementation workflow

1. Complete intellectual reconstruction and approvals.
2. Update the cumulative Decision Record and this Final Design Specification after approvals.
3. Freeze each page's content architecture.
4. Conduct website-wide architecture review.
5. Finalize reusable visual and UX system.
6. Implement on a dedicated GitHub branch.
7. Run technical inspection and regression review.
8. Obtain final user approval.
9. Merge/publish to production.
