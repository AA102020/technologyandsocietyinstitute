# Technology & Society Institute
## Final Website Design and Architecture Specification

**Status:** Frozen cumulative design specification  
**Effective date:** 2026-08-14  
**Repository:** `AA102020/technologyandsocietyinstitute`  
**Production branch:** `main`

This document is the cumulative implementation specification for the Technology & Society Institute website. It translates the authoritative decisions in `FINAL-DECISIONS.md` into page architecture, content hierarchy, UX behavior, and technical controls. Future rebuilds should treat this file as the controlling design reference unless an explicitly approved later decision supersedes a specific item.

## 1. Design objective

The website should present the Institute as an independent research organization examining how technological and institutional change develop together over time. The experience should be restrained, scholarly, legible, and contemporary. Visual design should support analytical clarity rather than compete with it.

The governing institutional formulation is:

**Technology, Society, and Institutional Evolution**

The website should communicate reciprocal relationships rather than technological determinism. Institutional actors, organizational practices, infrastructures, evidence, and consequences should remain visible in the prose and page architecture.

## 2. Global information architecture

Primary navigation:

- **Research** → `research.html`
- **Publications** → `publications.html`
- **About** → `about.html`
- **Contact** → `contact.html`

Research program pages:

1. `innovation-economics.html`: **Innovation and Economics**
2. `ai-public-policy.html`: **AI, Data, and Public Policy**
3. `manufacturing-technology.html`: **Manufacturing Technologies**
4. `military-technology.html`: **Military Technologies**
5. `regulation-society.html`: **Regulation and Society**

The footer should repeat the research-program links and Institute links and display:

**Technology, Society, and Institutional Evolution**

Publications are an output layer beneath the stable research architecture. Adding or revising publications does not alter the five-program structure.

## 3. Homepage

File: `index.html`

### Required structure

1. Sticky institutional header and primary navigation.
2. Hero section with concise institutional proposition.
3. Mission section.
4. Five research-program cards.
5. Core-perspective section explaining Technology, Society, and Institutions as interacting elements.
6. Contribution section explaining how the Institute contributes through research and related public-facing work.
7. Contact call to action.
8. Global footer.

### Homepage research-program cards

The homepage should show the five frozen programs in this order:

1. Innovation and Economics
2. AI, Data, and Public Policy
3. Manufacturing Technologies
4. Military Technologies
5. Regulation and Society

Each card should use the approved program subtitle and a concise relationship-based description. Program cards are a formal taxonomy and therefore may appear as a five-item structured set.

### Homepage actions

The hero should provide direct routes to Research, Publications, and About. These three actions connect institutional orientation, research architecture, and published outputs without adding another navigation layer.

### Theme control

The Light/Dark control appears on the homepage header only. Its selection applies site-wide through shared theme logic.

## 4. Research Agenda page

File: `research.html`

### Required structure

1. Research Agenda hero.
2. Five-program research list using the frozen order.
3. Institute-wide cross-cutting framework.
4. Link to the Publications layer.
5. Global footer.

### Cross-cutting framework

The frozen four-part framework is:

- **Authority**
- **Knowledge**
- **Capability**
- **Distribution**

The four items constitute a formal analytical taxonomy and therefore may be displayed as a complete structured set.

## 5. Innovation and Economics page

File: `innovation-economics.html`

Subtitle:

**Innovation, markets, and economic change**

Program-level proposition:

**Innovation is an institutional and economic process.**

### Frozen domain structure

1. **Economics of Innovation**
2. **Firms, Markets, and Competition**
3. **Finance and Financial Systems**
4. **Labor, Skills, and Organizations**
5. **Innovation Systems and Economic Development**

### Design behavior

- Present the five domains as a formal domain grid.
- Use concise descriptions that explain reciprocal relationships.
- Keep finance, banking, consumer credit, payments, underwriting, pricing, and related subjects inside the Finance and Financial Systems domain rather than creating additional top-level cards.
- Avoid **Future of Work** as an organizing label.
- Guiding questions may appear as a structured formal set.

## 6. AI, Data, and Public Policy page

File: `ai-public-policy.html`

Subtitle:

**AI, data, and public governance**

### Frozen domain structure

1. **AI Governance and Model Risk**
2. **Data Privacy and Governance**
3. **Public-sector AI**
4. **AI Markets, Industry, and Institutions**

### Required additional sections

The AI page intentionally has a richer page architecture than the other program pages.

- Core research domains.
- Guiding questions.
- **AI Infrastructure** cross-cutting section.
- **Connected Research** linking to the other four programs.
- Research and publications area linking to `publications.html`.
- Collaboration/contact area.

### AI Infrastructure section

Infrastructure remains visible without becoming a fifth domain. Current analytical groupings include computing and semiconductor capability, data-center and energy systems, cloud and production-network dependence, and technical capability. These should remain structured analytically rather than presented as a generic technology list.

### Page-specific styling

`ai-page.css` may supplement the global stylesheet where the AI page requires distinct layout behavior. It must remain compatible with the shared Light/Dark theme and responsive system.

## 7. Manufacturing Technologies page

File: `manufacturing-technology.html`

Subtitle:

**Production, infrastructure, and industrial systems**

Program-level proposition:

**Manufacturing determines whether knowledge becomes durable capability.**

### Frozen domain structure

1. **Production Systems and Technological Change**
2. **Industrial Infrastructure and Critical Technologies**
3. **Production Networks and Industrial Resilience**
4. **Industrial Capability and Institutions**

### Design behavior

- Present the four domains as a coherent analytical sequence, not as four isolated technology categories.
- Robotics, automation, industrial AI, digital production, semiconductors, and related subjects remain nested research subjects.
- Do not restore Smart Factories as a standalone domain.
- Keep resilience framed as an analytical outcome rather than an automatic policy preference.

## 8. Military Technologies page

File: `military-technology.html`

Subtitle:

**Military technology, institutions, and security**

Program-level proposition:

**Military technology acquires value through institutions and force employment.**

### Frozen domain structure

1. **Military Systems and Operational Integration**
2. **Acquisition, Industry, and Capability Formation**
3. **Force Adaptation and Military Effectiveness**
4. **Strategy, Governance, and Technological Change**

### Design behavior

- Do not return to a technology catalogue organized around AI, drones, cyber, space, or robotics as permanent domains.
- Use these technologies as research subjects within the four analytical domains.
- Keep technical performance, operational capability, and military effectiveness conceptually distinct in wording.
- Responsibility and restraint belong inside Strategy, Governance, and Technological Change.

## 9. Regulation and Society page

File: `regulation-society.html`

Subtitle:

**Technology governance, institutions, and public authority**

### Frozen domain structure

1. **Regulatory Institutions and Adaptive Governance**
2. **Standards, Evidence, and Classification**
3. **Public Authority, Rights, and Contestation**
4. **Technology and Institutional Capacity**

### Design behavior

- Present governance as reciprocal: institutions shape technological development while technologies reshape institutional knowledge, authority, and capability.
- Treat evidence, standards, measurement, and classification as mechanisms of governability.
- Treat participation as an empirical institutional mechanism rather than a default normative objective.
- Use contestation as the broader organizing concept for challenges involving rights and public authority.

## 10. About page

File: `about.html`

### Required structure

1. About hero.
2. Purpose section.
3. Analytical perspective section.
4. Institutional principles.
5. Global footer.

The analytical-perspective heading should use:

**Technology, Society, and Institutional Evolution**

The prose should explain reciprocal development in accessible language. Avoid specialized terminology where ordinary explanatory language is clearer.

## 11. Contact page

File: `contact.html`

### Required structure

1. Contact hero.
2. General-inquiries block.
3. Contact email panel.
4. Global footer.

The contact scope should remain concise. Current approved framing includes research, public programs, and institutional collaboration.

## 12. Global writing specification

### Relationship-over-enumeration rule

- Up to three substantive items may appear as a normal list.
- More than three substantive items should usually be grouped conceptually and explained in prose.
- When completeness matters, use a formal taxonomy, table, sequence, or structured actor/function grouping.
- Formal research architectures and source-defined enumerations are exceptions.

### Preferred analytical sentence structure

Where possible, public-facing descriptions should identify:

**actor or institution → practice or mechanism → technological system or infrastructure → consequence or feedback**

The exact wording should remain natural and concise.

### Vocabulary controls

- Do not use **enter** as a verb for technologies interacting with institutions, organizations, work, markets, or society.
- Avoid long strings of sectoral or consequence nouns.
- Avoid technological-determinist formulations.
- Avoid treating current industry labels as permanent research architecture when a more durable analytical category exists.
- Prefer **incorporate**, **adopt**, **deploy**, **embed**, **use**, **adapt**, or other mechanism-specific verbs.

## 13. Visual system

### Global files

- `style.css`: primary visual system and responsive layout.
- `theme.css`: Light/Dark theme overrides, toggle styling, and narrow-header normalization.
- `theme.js`: theme selection, persistence, and homepage control behavior.
- `ai-page.css`: AI-page-specific layout supplements.

### Design character

The site should remain:

- restrained,
- research-centered,
- typographically spacious.

These three qualities may appear as a short list because they are the controlling visual attributes.

### Typography

- Serif headings.
- Sans-serif body copy and interface text.
- Large editorial hero headings.
- Strong hierarchy between section labels, program titles, descriptions, and questions.

### Palette

Maintain the existing dark navy, blue, teal, pale neutral, and white/light surfaces encoded in the current CSS variables. Dark mode should preserve the same institutional identity rather than introduce a separate aesthetic.

## 14. Cards and grids

- Program and topic cards should emphasize analytical hierarchy.
- Hover behavior may create restrained elevation and movement.
- Keyboard focus states must remain visible.
- Cards should collapse cleanly into simpler layouts on smaller viewports.
- Avoid visual density that makes formal taxonomies resemble marketing feature lists.

## 15. Responsive behavior

The site must support desktop, tablet, and phone widths.

Current breakpoints and responsive logic in `style.css`, `theme.css`, and `ai-page.css` should be preserved unless a later regression test identifies a concrete defect.

At narrower widths:

- multicolumn program and domain grids collapse,
- large content sections become single-column,
- footer columns collapse,
- the research agenda simplifies its row layout,
- AI domain, question, infrastructure, and connected-research layouts reflow for legibility.

At phone widths, the site-header brand text may be hidden while retaining the logo so that Research, Publications, About, Contact, and the homepage theme control remain usable without horizontal crowding.

## 16. Accessibility and interaction

- Preserve semantic navigation labels.
- Preserve visible keyboard focus states.
- Preserve `prefers-reduced-motion` handling.
- Maintain accessible theme-control labeling and button semantics.
- Avoid contrast regressions in dark mode.
- Theme choice should persist across page navigation.

## 17. Light/Dark implementation

`theme.js` is the controlling theme behavior.

Required behavior:

1. Check for a saved `tsi-theme` value.
2. If no saved preference exists, follow the operating system color preference.
3. Apply the selected theme to the document root.
4. Create the Light/Dark control only on the homepage.
5. Store an explicit user choice in local storage.
6. Apply that stored choice automatically on all other pages that load `theme.js`.

This behavior is frozen unless a later approved UX decision changes it.

## 18. Footer

Every core page should use a consistent footer containing:

- Institute brand.
- **Technology, Society, and Institutional Evolution**.
- Research-program links.
- Institute links including Research Agenda and Publications.
- Copyright and domain line.

The footer is a site-wide consistency control. Superseded taglines should not reappear on individual pages.

## 19. Deployment specification

Production configuration:

- Repository: `AA102020/technologyandsocietyinstitute`
- Branch: `main`
- GitHub Pages source path: `/`
- Custom domain: `technologyandsocietyinstitute.com`
- HTTPS: enforced

A successful GitHub Pages build from `main` is the authoritative deployment signal. External crawler caches may lag and should not be treated as source-of-truth evidence for the current architecture.

## 20. Regression checklist for future changes

Before treating a future site change as complete, verify:

1. Frozen program titles and domain architectures remain intact.
2. The Regulation subtitle remains **Technology governance, institutions, and public authority**.
3. The institutional tagline remains **Technology, Society, and Institutional Evolution**.
4. The Research Agenda cross-cutting framework remains **Authority, Knowledge, Capability, Distribution** unless explicitly reopened.
5. Publications remains a separate output layer and does not replace the Research Agenda.
6. No residual long noun inventories have been introduced outside formal taxonomies.
7. Theme selection remains homepage-controlled and site-wide persistent.
8. All core pages load the shared theme system.
9. Research, Publications, About, Contact, and footer links remain valid.
10. Desktop, tablet, and mobile layouts remain legible.
11. GitHub Pages completes successfully from `main`.

## 21. Completion state

The core institutional architecture, five-program research architecture, page hierarchy, writing rules, Light/Dark behavior, global design grammar, and publications discovery layer are implemented as of 2026-08-14.

Future work should concentrate on publication records, research-project content, evidence, accessibility improvements, selective UX refinement, and technical maintenance. Architectural changes require explicit review and decision logging in `FINAL-DECISIONS.md`.

## 22. Publications page

File: `publications.html`

### Controlling purpose

The Publications page is the canonical discovery layer for Institute outputs. It is distinct from `research.html`, which remains the stable intellectual architecture.

### Frozen publication families shown on the page

1. **Research Papers**: `TSI-RP-YYYY-##`
2. **Working Papers**: `TSI-WP-YYYY-##`
3. **Research Briefs**: `TSI-RB-YYYY-##`
4. **Commentary**: `TSI-CM-YYYY-##`

### Current page behavior

- Present the four families as a formal publication taxonomy.
- Explain the difference between publication series and research programs.
- State that each formal publication will have one canonical record.
- Preserve version visibility and publication chronology.
- Do not invent publication entries before the authoritative publication registry is established.
- Do not display DOI or ISSN placeholders. DOI and ISSN are deferred and outside the current website implementation scope.
- As publications are established, discovery cards should prioritize title, author, series, date, TSI code, and concise analytical description.

The current Publications page intentionally launches with the publication architecture rather than fabricated or provisional publication records.
