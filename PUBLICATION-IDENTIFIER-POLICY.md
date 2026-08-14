# Technology & Society Institute
## Publication Families and Identifier Policy

**Status:** Frozen operating policy  
**Effective date:** 2026-08-14  
**Repository:** `AA102020/technologyandsocietyinstitute`  
**Branch:** `main`

This policy governs Technology & Society Institute publication families, human-readable publication codes, numbering, versioning, and the relationship between Institute codes and external identifiers. It operates beneath `FINAL-DECISIONS.md` and `RESEARCH-AND-PUBLICATIONS-ARCHITECTURE.md`.

## 1. Frozen publication families

The Institute will operate four permanent publication families:

1. **Research Papers** — substantial original research presenting developed evidence, analysis, and conclusions.
2. **Working Papers** — research circulated in a preliminary form for revision, extension, empirical testing, or scholarly comment.
3. **Research Briefs** — concise research outputs addressing a bounded finding, institutional development, dataset, or policy-relevant analytical problem.
4. **Commentary** — shorter analytical essays that interpret consequential technological or institutional developments without requiring the evidentiary scope of a Research Paper or Working Paper.

These families classify outputs. They do not alter the five frozen research programs or their domain structures.

## 2. Rejected alternatives

**Essays** will not be established as a separate permanent series at this stage. Commentary is broad enough to accommodate shorter interpretive work without creating an additional overlapping family.

**Policy Briefs** will not replace Research Briefs as the Institute-wide series name. Research Briefs can include policy-relevant analysis while remaining appropriate for manufacturing, economic, military, AI, and institutional research that is not primarily prescriptive.

Books, special reports, datasets, code, appendices, replication materials, events, and project pages are not permanent publication families under this policy. A future recurring need may justify a separately approved addition.

## 3. Human-readable publication codes

Every formal Institute publication receives a stable TSI publication code using:

`TSI-[SERIES]-YYYY-##`

Frozen series abbreviations:

- Research Paper: `TSI-RP-YYYY-##`
- Working Paper: `TSI-WP-YYYY-##`
- Research Brief: `TSI-RB-YYYY-##`
- Commentary: `TSI-CM-YYYY-##`

Examples:

- `TSI-RP-2026-01`
- `TSI-WP-2026-03`
- `TSI-RB-2026-02`
- `TSI-CM-2026-07`

The code is a public bibliographic identifier created by the Institute. It is distinct from DOI, ISSN, ISBN, or other external identifier systems.

## 4. Meaning of the code

The code contains only three intended elements:

**publisher identity → publication family → publication year and series number.**

The code should not encode research program, domain, author identity, geographic area, or topic. Those attributes belong in metadata and may change in interpretation without requiring a new publication code.

## 5. Year rule

`YYYY` records the year of the publication's first public release within that publication family.

A later revision does not change the original publication code or its year. Revision information is recorded separately through version metadata.

When an older Institute work is formally incorporated into the current registry, the publication year should reflect the documented original Institute release year when that date can be verified. Do not backdate a newly issued publication merely because its underlying research began earlier.

## 6. Numbering rule

`##` is the publication's unique number within its family and year.

Numbering is independent across families. `TSI-RP-2026-01` and `TSI-WP-2026-01` may both exist because the series abbreviation distinguishes them.

Numbers should ordinarily use two digits beginning with `01`. If a family exceeds 99 items in one year, the registry may extend the numeric field without altering existing codes.

A number may be reserved before release, but once a code is publicly assigned it must never be reassigned to a different work. Gaps are preferable to reuse.

## 7. Canonical registry

The Institute should maintain one authoritative publication registry containing every assigned TSI code, including withdrawn, superseded, or archived records when necessary to prevent reuse.

The registry is the source of truth for code assignment. Website cards, PDFs, metadata deposits, and citations should derive their publication code from that registry.

## 8. Versioning

A publication code identifies the work within its publication family. Material revisions retain the same TSI code and receive explicit version metadata unless the revision constitutes a substantively new work requiring a new publication record.

Recommended version notation:

- `Version 1.0` — first public release.
- `Version 1.1`, `1.2`, etc. — corrections or bounded revisions that preserve the work's central identity.
- `Version 2.0` — major revision that preserves the same work and publication lineage.

Version notation is metadata and should not be appended to the permanent TSI publication code itself.

## 9. Working Paper transition

A Working Paper that later becomes a Research Paper is treated as a new publication-family record because its editorial status has changed materially.

The Research Paper therefore receives a new `TSI-RP-...` code. Its metadata should link back to the earlier Working Paper rather than overwriting the Working Paper record.

This preserves the intellectual and editorial chronology of the research.

## 10. Commentary transition

A Commentary later expanded into a Research Brief, Working Paper, or Research Paper receives a new code in the new publication family. The canonical records should link the related works when the relationship is substantive.

## 11. DOI relationship

A DOI, when assigned, is an external persistent identifier and remains separate from the human-readable TSI code.

The Institute should not require the DOI suffix to reproduce or encode the TSI publication code. DOI registration policy favors persistent, unique identifiers and current Crossref guidance recommends short, opaque suffixes rather than human-readable metadata structures.

The publication record may display both identifiers:

- **TSI publication code** — human-readable Institute series identifier.
- **DOI** — external persistent identifier and resolver.

Once a DOI is assigned, it must remain associated with its referent and its metadata and resolution target must be maintained.

## 12. ISSN relationship

ISSN identifies continuing resources or serial publications rather than individual papers. The Institute may therefore seek separate electronic ISSNs for the Research Papers, Working Papers, Research Briefs, and Commentary series if each is operated as a continuing series under a stable title.

An ISSN is series-level metadata. It does not replace the TSI publication code assigned to an individual item.

## 13. ISBN relationship

ISBN is outside the current core publication-family workflow. It should be considered for books, monographs, or other qualifying book-format publications if the Institute later establishes such outputs.

## 14. DOI eligibility and timing

DOI registration should follow publication readiness rather than code reservation. A reserved TSI code does not require a DOI.

Before DOI registration, confirm that the canonical publication record, title, author metadata, publication date, landing URL, and version status are stable enough for external deposit.

## 15. Licensing

No universal license is imposed by this identifier policy. Licensing must be separately approved before being applied globally to Institute outputs.

When an open license is used, the publication record should identify the exact license and version. A Creative Commons license should not be inferred from free public access alone.

## 16. Display rules

The TSI publication code should appear consistently on:

- the publication landing page,
- the publication PDF or principal released file,
- the recommended citation or bibliographic metadata.

These are three related bibliographic locations and may be shown as a short list.

Where DOI or ISSN information exists, display it separately and label it explicitly.

Do not display `DOI pending`, `ISSN pending`, or similar placeholder identifier text on public pages or publication PDFs.

## 17. File naming

Recommended released-file naming:

`TSI-RP-2026-01_Short-Title.pdf`

Equivalent patterns apply to the other publication families.

File names may contain a concise title slug for human usability, while the TSI publication code remains the controlling identifier.

## 18. Publication landing-page slugs

Landing-page URLs should remain readable and durable. The TSI code may be used in the URL or path, but URL structure is an implementation choice and is not itself the permanent identifier.

Changing a webpage location must not change the TSI publication code or an assigned DOI.

## 19. Citation rule

Recommended citations should include the bibliographic information required by the Institute's selected citation style and the TSI publication code. Include the DOI when one has been assigned.

The publication code should not be treated as a substitute for author, title, publisher, or date metadata.

## 20. Change control

The following are frozen under this policy:

- Four permanent families: Research Papers, Working Papers, Research Briefs, Commentary.
- Series abbreviations: `RP`, `WP`, `RB`, `CM`.
- TSI code form: `TSI-[SERIES]-YYYY-##`.
- Separate annual numbering within each publication family.
- No reassignment of publicly assigned publication codes.
- TSI code remains separate from DOI and ISSN.
- Working Paper-to-Research Paper transitions receive a new family code and preserve the earlier record.

A future change to any of these controls requires explicit review and cumulative recording in `FINAL-DECISIONS.md` and `RESEARCH-AND-PUBLICATIONS-ARCHITECTURE.md`.
