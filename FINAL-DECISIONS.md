# Technology & Society Institute
## Authoritative Cumulative Decision Register

**Status:** Frozen controlling record for the current website architecture and redesign  
**Effective date:** 2026-08-14  
**Repository:** `AA102020/technologyandsocietyinstitute`  
**Branch:** `main`

This document records the final decisions governing the Technology & Society Institute website. It is cumulative. Future edits should preserve these decisions unless a later explicitly approved decision supersedes a specific item. When a later panel review rejects a prior decision, the rejected decision, reason for rejection, replacement, and consequence must be recorded here.

## 1. Institutional identity

- Institute name: **Technology & Society Institute**.
- Controlling institutional tagline: **Technology, Society, and Institutional Evolution**.
- The website should present technology, society, and institutions as developing through reciprocal relationships over time.
- The site should explain mutual shaping in accessible language without relying on specialized STS terminology as a substitute for explanation.
- The Institute covers technologies beyond AI, including manufacturing, military and defense technologies, banking and finance, data systems, and other consequential technological systems.

## 2. Writing rules

- Up to three substantive items may appear as a normal list in prose.
- More than three substantive items should ordinarily be grouped conceptually and explained through relationships, stages, functions, or actor groups.
- When every item genuinely matters, use a structured taxonomy, table, formal sequence, or other explicit analytical organization rather than a long noun inventory.
- Formal taxonomies, statutory or source-defined enumerations, research-domain architectures, and similar structures are valid exceptions.
- Public-facing prose should prioritize relationships, mechanisms, actors, practices, and consequences over catalogue-style wording.
- Do not use **enter** as a verb for technologies interacting with organizations, institutions, work, markets, or society. Prefer formulations such as **adopt**, **incorporate**, **deploy**, **embed**, or **use**, according to the mechanism.
- Avoid vague claims that technologies autonomously produce social, economic, military, or regulatory outcomes. Identify the institutional or organizational mechanisms involved.

## 3. Institute-wide research architecture

The five-program structure is frozen:

1. **Innovation and Economics**  
   Subtitle: *Innovation, markets, and economic change*
2. **AI, Data, and Public Policy**  
   Subtitle: *AI, data, and public governance*
3. **Manufacturing Technologies**  
   Subtitle: *Production, infrastructure, and industrial systems*
4. **Military Technologies**  
   Subtitle: *Military technology, institutions, and security*
5. **Regulation and Society**  
   Subtitle: *Technology governance, institutions, and public authority*

The program order is a portfolio organization, not a causal sequence.

## 4. Institute-wide cross-cutting framework

The frozen cross-cutting framework is:

- **Authority**: how technological change redistributes decision-making authority across institutions.
- **Knowledge**: how evidence and expertise shape what institutions can know about technological systems and their consequences.
- **Capability**: how infrastructure and institutions make technological systems durable and usable.
- **Distribution**: how technological change reallocates benefits, risks, and opportunities.

The earlier cross-cutting category **Markets** was replaced by **Knowledge** at the Institute-wide level. Markets remain explicit within Innovation and Economics and relevant parts of the AI program.

## 5. Innovation and Economics

The five-domain architecture is frozen:

1. **Economics of Innovation**
2. **Firms, Markets, and Competition**
3. **Finance and Financial Systems**
4. **Labor, Skills, and Organizations**
5. **Innovation Systems and Economic Development**

Controlling principles:

- Finance and Financial Systems covers capital allocation, financial intermediation and infrastructure, and the governance of risk.
- Banking, consumer finance, payments, underwriting, pricing, and related subjects are research streams inside Finance and Financial Systems rather than separate Institute domains.
- Fintech is not a separate permanent domain.
- Firms, Markets, and Competition centers market organization, firm strategy, entry, concentration, ownership, standards, and related competitive processes.
- Labor, Skills, and Organizations does not use **Future of Work** as the organizing frame.
- Innovation Systems and Economic Development includes industrial policy, capability formation, diffusion, adaptation, regional development, and technology transfer without restoring separate permanent domains for each.

## 6. AI, Data, and Public Policy

The four-domain architecture is frozen:

1. **AI Governance and Model Risk**
2. **Data Privacy and Governance**
3. **Public-sector AI**
4. **AI Markets, Industry, and Institutions**

Controlling decisions:

- **Political Economy of AI** is rejected as the domain title.
- **AI Markets, Industry, and Institutions** is the approved title.
- The former standalone domain **Automated Decisions and Evaluation** is removed.
- **AI Infrastructure and Applied Analysis** is not a standalone domain.
- AI infrastructure is distributed selectively across the architecture while remaining visibly represented through the dedicated cross-cutting **AI Infrastructure** section.
- The AI page may retain a distinct page architecture when substantively warranted. The rest of the website does not need to mirror every AI-specific section merely for symmetry.
- Connected Research should make relationships with Innovation and Economics, Manufacturing Technologies, Military Technologies, and Regulation and Society explicit.

## 7. Manufacturing Technologies

The four-domain architecture is frozen:

1. **Production Systems and Technological Change**
2. **Industrial Infrastructure and Critical Technologies**
3. **Production Networks and Industrial Resilience**
4. **Industrial Capability and Institutions**

Controlling principles:

- Manufacturing should be treated as a site where technological knowledge develops through production practice, not merely as implementation of completed designs.
- Automation, robotics, industrial AI, and digital production are research subjects within Production Systems and Technological Change.
- **Smart Factories** is not a standalone permanent domain.
- Semiconductors remain a highly visible research subject within Industrial Infrastructure and Critical Technologies.
- Criticality should be treated as an empirical property, including difficulty of substitution or reproduction, rather than accepted solely from official designation.
- Production Networks and Industrial Resilience uses the controlling description: **Examines how production is organized across firms and places, how those relationships create industrial dependencies, and how production systems adapt when established arrangements are disrupted.**
- Resilience is an analytical outcome involving continuity, restoration, or adaptation, not an automatically preferred policy objective.
- Industrial Capability and Institutions distinguishes physical capacity from durable productive capability and emphasizes accumulated production knowledge.

## 8. Military Technologies

The four-domain architecture is frozen:

1. **Military Systems and Operational Integration**
2. **Acquisition, Industry, and Capability Formation**
3. **Force Adaptation and Military Effectiveness**
4. **Strategy, Governance, and Technological Change**

Controlling principles:

- AI, autonomy, drones, robotics, cyber, space, and communications remain important research subjects rather than permanent standalone domains.
- Military Systems and Operational Integration centers operational integration, human judgment, reliability, and adversarial adaptation.
- Acquisition is treated as capability formation rather than purchasing alone.
- Force Adaptation and Military Effectiveness distinguishes technical performance, operational capability, and military effectiveness.
- Strategy, Governance, and Technological Change centers demonstrated capability, strategic relationships, responsibility, and restraint.
- **Ethics** is not restored as a standalone domain or title component, although ethical questions remain legitimate research subjects.
- Military capability and industrial production capability remain analytically distinct.

## 9. Regulation and Society

The four-domain architecture is frozen:

1. **Regulatory Institutions and Adaptive Governance**
2. **Standards, Evidence, and Classification**
3. **Public Authority, Rights, and Contestation**
4. **Technology and Institutional Capacity**

Controlling decisions:

- The former subtitle **Technology governance, expertise, and publics** is superseded by **Technology governance, institutions, and public authority**.
- Regulatory design and institutional oversight are analyzed together through adaptive governance.
- Standards, evidence, measurement, classification, and expertise are treated as mechanisms that make technological systems visible and governable.
- Participation is treated as an empirical institutional mechanism rather than an unquestioned normative objective.
- **Contestation** is the primary organizing concept for disputes over rights, standing, legitimacy, and authority.
- **Technology and State Capacity** is superseded by **Technology and Institutional Capacity**.
- Technology acquisition is distinguished from durable administrative capability.

## 10. UX and theme system

- The Light/Dark control should appear on the **homepage**.
- A user's explicit theme choice should persist across the entire website.
- The current implementation stores the choice under `tsi-theme` and applies it through the shared `theme.js` file.
- On first visit, when no explicit choice has been stored, the theme may follow the operating system preference.
- The site should maintain keyboard accessibility, visible focus states, and reduced-motion behavior.
- Light and dark modes must preserve the Institute's visual identity and reading legibility.

## 11. Design governance

- Use a common design grammar across pages while allowing different intellectual architectures when a program substantively requires them.
- Preserve the Institute's restrained visual system, typography, spacing, research-card hierarchy, and responsive behavior unless a later approved design decision changes them.
- Avoid forcing identical content sections across all program pages merely for symmetry.
- The site should remain responsive at desktop, tablet, and phone widths.

## 12. Deployment and technical controls

- Production source: GitHub repository `AA102020/technologyandsocietyinstitute`, branch `main`, root path `/`.
- GitHub Pages custom domain: `technologyandsocietyinstitute.com`.
- HTTPS is enforced.
- The source repository and successful GitHub Pages build are controlling evidence for the deployed version. A stale external crawler or cache should not trigger DNS or content changes without independent evidence of a real configuration defect.

## 13. Change-control rule

The following are frozen unless an explicit later decision reopens them:

- Institute scope.
- Five-program structure and order.
- Program-domain architectures listed above.
- Institute-wide mutual-shaping framework.
- Cross-cutting framework: Authority, Knowledge, Capability, Distribution.
- Institutional tagline: Technology, Society, and Institutional Evolution.
- Relationship-over-enumeration writing rule.
- Homepage-only theme control with site-wide persistence.

Routine future work should focus on wording refinement, research projects, evidence, publications, UX improvements, accessibility, and implementation quality without silently altering frozen architecture.

## 14. Publication families and identifier system

The Institute's permanent publication families are frozen as:

1. **Research Papers**
2. **Working Papers**
3. **Research Briefs**
4. **Commentary**

The earlier proposal to operate only three permanent families is superseded. Commentary is added as a durable series for shorter analytical work. **Essays** are not established as a separate permanent series. **Research Briefs** remain the Institute-wide concise series rather than being renamed Policy Briefs.

The frozen human-readable publication-code pattern is:

`TSI-[SERIES]-YYYY-##`

Series abbreviations are:

- Research Papers: `RP`
- Working Papers: `WP`
- Research Briefs: `RB`
- Commentary: `CM`

Examples include `TSI-RP-2026-01`, `TSI-WP-2026-01`, `TSI-RB-2026-01`, and `TSI-CM-2026-01`.

Controlling identifier rules:

- Annual numbering is independent within each publication family.
- `YYYY` records the year of first public release in that family.
- A publicly assigned TSI code is never reassigned to another work; gaps are preferable to reuse.
- The TSI publication code is a human-readable Institute identifier and remains separate from DOI, ISSN, ISBN, or other external identifiers.
- DOI suffixes are not required to reproduce or encode TSI publication codes.
- ISSN, when obtained, identifies the continuing publication series rather than the individual publication.
- A Working Paper later issued as a Research Paper receives a new Research Paper code while the Working Paper record remains preserved and linked.
- A Commentary expanded into another publication family receives a new family code and retains the earlier record.
- Version metadata is separate from the permanent TSI publication code.
- Do not display public placeholder text such as `DOI pending` or `ISSN pending`.

The detailed operating rules are controlled by `PUBLICATION-IDENTIFIER-POLICY.md` and must remain consistent with `RESEARCH-AND-PUBLICATIONS-ARCHITECTURE.md`.
