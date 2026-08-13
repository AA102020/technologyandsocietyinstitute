# Technology & Society Institute Website — Cumulative Final Design Specification

**Repository:** `AA102020/technologyandsocietyinstitute`  
**Status:** Current approved implementation specification  
**Established:** 2026-08-12

## Control principle

This document contains only the currently approved design state. Decision history, rejected alternatives, and rationales belong in `DECISION-RECORD.md`.

---

# AI, Data, and Public Policy (`ai-public-policy.html`)

## Program identity and opening

**Title:** AI, Data, and Public Policy

**Subtitle:** AI, data, and public governance

**Program description:**

> Examines how institutions, markets, technological systems, and organizational practices shape the development and use of AI, and how AI in turn changes economic activity, public institutions, and social life.

**Protected program proposition:**

> AI policy requires analysis of institutions, markets, and technical systems.

**Explanatory paragraphs:**

> Artificial intelligence systems operate through data, computing infrastructure, organizational practices, labor, procurement, and legal authority. The program studies how these arrangements shape AI development, adoption, and use across markets and public institutions.

> Research examines how organizations evaluate and govern AI, how data and automated systems affect people and institutions, how markets and industrial structures shape technological development, and how public institutions build and exercise AI capabilities.

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

- AI × Innovation and Economics
- AI × Manufacturing Technologies
- AI × Military Technologies
- AI × Regulation and Society

### AI × Military Technologies

Defense AI is not treated as a sub-item within the Public-sector AI card. The intersection should cover military AI adoption, procurement, autonomy, intelligence, command systems, logistics, organizational adaptation, evaluation and reliability, military capability, and strategic consequences.

## Research methods and capabilities

`Applied analysis` is not a substantive research domain. If used on the website, it should appear as a research method or capability.

## Removed standalone domains

- Automated decisions and evaluation
- AI infrastructure and applied analysis

Their substantive concerns are retained through selective distribution and the cross-cutting infrastructure architecture.

---

# UX and visual design

The existing visual system remains the approved baseline unless later review changes it.

## Light / Dark reading mode

**Status:** APPROVED FOR PRODUCTION.

**Approved interaction:**

- compact text control labeled `Dark` in light mode and `Light` in dark mode;
- first visit follows the operating-system color preference;
- an explicit user selection is remembered locally;
- keyboard-accessible button semantics and visible focus treatment;
- theme-specific dark palette derived from the Institute's visual system.

**Current implementation scope:** `ai-public-policy.html`.

The control should remain visually subordinate to primary navigation and research content. Do not replace the text control with an unlabeled sun/moon icon without a new approval decision.

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
