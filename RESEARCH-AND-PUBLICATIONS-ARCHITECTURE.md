# Technology & Society Institute
## Research and Publications Architecture

**Status:** Cumulative operating architecture  
**Effective date:** 2026-08-14  
**Repository:** `AA102020/technologyandsocietyinstitute`  
**Branch:** `main`

This document establishes the operating layer for research projects and publications. It sits below the frozen institutional architecture in `FINAL-DECISIONS.md` and the implementation controls in `FINAL-WEBSITE-DESIGN-AND-ARCHITECTURE.md`. It does not reopen the five-program structure or their frozen domains.

## 1. Purpose

The Institute requires a publication system that can grow without turning the website into a catalogue or forcing every output into the research-program architecture. The governing distinction is:

**research architecture defines what the Institute studies; publication architecture defines how completed or developing work is presented and preserved.**

A publication may connect to more than one program. Its primary placement should follow the principal analytical question, while secondary program relationships may be recorded as cross-links.

## 2. Research hierarchy

Use four levels:

1. **Institute** — Technology & Society Institute.
2. **Research Program** — one of the five frozen programs.
3. **Research Domain** — one of the frozen domains within that program.
4. **Research Project** — a bounded empirical or analytical investigation that may generate one or more outputs.

Projects are the principal bridge between the stable research architecture and changing publication activity.

A project may span domains or programs when the research question genuinely requires it. Cross-program work should identify one primary program for navigation and metadata while preserving substantive secondary relationships.

## 3. Publication families

The frozen publication architecture uses four durable families:

### Research Papers

Substantial original research presenting evidence, analysis, methods where relevant, and developed conclusions. Research Papers are the Institute's principal long-form research output.

### Working Papers

Research circulated while analysis remains open to revision, extension, further empirical testing, or scholarly comment. Version history should remain visible when materially revised.

### Research Briefs

Concise research outputs that synthesize a bounded problem, finding, dataset, institutional development, or policy-relevant implication without requiring the scope of a full Research Paper.

### Commentary

Shorter analytical essays that interpret consequential technological or institutional developments without requiring the evidentiary scope of a Research Paper or Working Paper.

These four families classify outputs. They do not alter the five frozen research programs or their domain structures.

## 4. Items that are not publication families

The following remain separate from the four publication families unless a later explicit decision changes their status:

- **Research Projects** are containers for ongoing investigations and their outputs.
- **Events** are institutional activities and may connect to projects or publications.
- **Essays** are not a separate permanent family; shorter interpretive work ordinarily belongs in Commentary.
- **Datasets, code, appendices, and replication materials** are research artefacts associated with projects or publications rather than equivalent publication families.

Books and special reports may be considered later if a recurring output type cannot be represented coherently within the frozen families.

This separation prevents the publications page from becoming a mixture of outputs, activities, and supporting materials.

## 5. Publication status

Each publication record should use a clear status:

- **Published** — released as an Institute publication and assigned its stable public record.
- **Working** — publicly circulated as a Working Paper and subject to revision.
- **Archived** — retained for scholarly and institutional continuity after supersession or retirement.

Do not use vague status labels when one of these states is sufficient.

## 6. Versioning and permanence

The Institute should preserve the intellectual history of released work.

- A published version should remain identifiable after later revisions.
- Material revisions should create a new version rather than silently replacing the historical record.
- Metadata should record the original publication date and, when applicable, the revision date and version.
- Superseded versions may remain accessible as archived versions when technically feasible.
- Corrections that alter substantive findings or interpretation should be disclosed rather than silently overwritten.

The website implementation may evolve, but the publication record should remain stable enough to support citation and reconstruction of the work's development.

Version metadata is separate from the permanent TSI publication code. Detailed version rules are controlled by `PUBLICATION-IDENTIFIER-POLICY.md`.

## 7. Required publication metadata

Every formal publication should have a canonical record containing:

- title,
- author or authors,
- publication family,
- publication date,
- primary research program,
- primary research domain,
- abstract or concise summary,
- stable publication page or file location,
- TSI publication code,
- version or revision information when applicable.

Identifiers, citation text, licensing information, datasets, code, and secondary program relationships should be added when relevant and available. Do not display empty placeholder fields such as pending DOI or pending identifier values.

## 8. Publication identifiers

The frozen human-readable publication code is:

`TSI-[SERIES]-YYYY-##`

Series abbreviations are:

- Research Paper: `RP`
- Working Paper: `WP`
- Research Brief: `RB`
- Commentary: `CM`

Annual numbering is independent across publication families. Once a code has been publicly assigned, it is never reassigned to another work.

The TSI code remains distinct from DOI, ISSN, ISBN, and other external identifiers. DOI suffixes are not required to reproduce the TSI code. ISSN, when obtained, operates at the continuing-series level rather than replacing individual TSI codes.

The complete identifier, numbering, transition, file-naming, and version rules are controlled by `PUBLICATION-IDENTIFIER-POLICY.md`.

## 9. Citation and scholarly presentation

Formal publications should provide a clear recommended citation once the publication metadata is complete. Citation formatting should be consistent across the Institute.

The recommended citation should include the TSI publication code and, when assigned, the DOI. Neither identifier substitutes for author, title, publisher, or publication-date metadata.

The publication landing page should distinguish bibliographic metadata from analytical description. Long abstracts, references, and supporting artefacts should remain readable without overwhelming navigation.

## 10. Research projects

A Research Project should exist when the Institute is pursuing a bounded question that is expected to produce evidence, analysis, or multiple related outputs.

A project record should identify:

- the research problem,
- its primary program and domain,
- the central analytical question,
- project status,
- related outputs when they exist.

Projects should not be created merely to populate the website. They should correspond to real research activity.

## 11. Cross-program research

Cross-program research is expected and should be represented without duplicating publications.

The same publication should have one canonical record. Secondary program relationships should be expressed through metadata or connected-research links rather than separate copies.

The analytical rule is:

**same artefact, different institutional relationship; one publication record, multiple legitimate research connections.**

## 12. Website architecture

The next implementation stage should create a dedicated publications layer rather than embedding the entire catalogue inside `research.html`.

Recommended public architecture:

- `research.html` — stable research agenda and five-program architecture.
- `publications.html` — publication discovery and series navigation.
- individual publication landing pages or stable publication files — canonical records for each formal output.
- project pages — added selectively when a project has sufficient substance to warrant a durable public record.

Program pages may show selected or recent related publications, but should link back to canonical publication records.

## 13. Publications page behavior

The publications page should prioritize discovery without becoming visually dense.

The primary organizing controls should be publication family and research program. Additional filtering should be introduced only when the volume of publications makes it useful.

Publication cards should emphasize title, author, family, date, TSI code, and concise analytical description. Avoid displaying every metadata field on the discovery card.

## 14. Publication landing pages

A formal publication landing page should ordinarily contain:

1. publication family, TSI code, and date,
2. title and author information,
3. abstract or executive summary,
4. download or reading control,
5. citation, DOI when assigned, and version information,
6. related research context when useful.

This is a formal information hierarchy and therefore may exceed the ordinary three-item prose rule.

## 15. Research artefacts

Datasets, code, methodological appendices, replication files, and supplementary material should be attached to the relevant publication or project whenever possible.

Their metadata should identify the relationship to the parent work. Supporting artefacts should not be presented as independent Institute publications unless they have a distinct scholarly purpose and an approved publication status.

## 16. Events and public programs

Events may connect research to external discussion, expert review, or dissemination. Event pages should link to the relevant project or publication when such a relationship exists.

Events should remain institutionally distinct from publications. An event does not become a publication merely because slides, video, or notes are available.

## 17. Editorial governance

Before publication, each formal output should pass separate checks for:

- substantive accuracy and evidentiary support,
- editorial and citation consistency,
- metadata and version integrity.

These three controls may be implemented through different workflows. Publication should occur only after all applicable controls pass.

## 18. Relationship to the frozen website architecture

This operating architecture must preserve:

- the five frozen research programs and their domain structures,
- the Institute-wide cross-cutting framework of Authority, Knowledge, Capability, and Distribution,
- the relationship-over-enumeration writing rule,
- the global Light/Dark and responsive design system,
- the distinction between stable research architecture and changing research outputs.

A new publication, project, dataset, or event does not by itself justify altering a frozen program or domain.

## 19. Cumulative maintenance

This document should be updated when the Institute approves a new publication family, publication-status rule, versioning convention, project convention, or publication-page behavior.

Changes that affect the frozen institutional or program architecture must also be recorded in `FINAL-DECISIONS.md`. Changes that affect global website implementation must also be reflected in `FINAL-WEBSITE-DESIGN-AND-ARCHITECTURE.md`.

The detailed publication-code policy must remain synchronized with `PUBLICATION-IDENTIFIER-POLICY.md`.

## 20. Resolved decisions and remaining open decisions

Resolved and frozen:

1. Permanent publication families: Research Papers, Working Papers, Research Briefs, Commentary.
2. Permanent human-readable publication-code pattern: `TSI-[SERIES]-YYYY-##`.
3. Series abbreviations: `RP`, `WP`, `RB`, `CM`.
4. Separate annual numbering within each family and no reassignment of publicly assigned codes.
5. TSI codes remain separate from DOI and ISSN.

Still deliberately unfrozen:

1. DOI registration agency and operational deposit workflow.
2. Whether and when each continuing series will receive an ISSN.
3. Institute-wide licensing policy.
4. Exact publication landing-page template and PDF design.
5. Whether project pages launch immediately or after the publication layer is established.

These remaining questions should be resolved sequentially rather than bundled into the initial publications-page build.
