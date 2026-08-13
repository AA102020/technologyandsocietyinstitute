# UX Experiment 01 — Light / Dark Theme Toggle

**Status:** Experimental  
**Branch:** `agent/dark-mode-experiment`

## Purpose

Test a restrained Light/Dark reading-mode control inspired by the compact theme switch used on The Horn website, while adapting the behavior to the Technology & Society Institute's existing visual system.

## Prototype scope

The first prototype is enabled only on `ai-public-policy.html`.

## Behavior

- First visit follows the visitor's operating-system color preference.
- The header shows `Dark` while the light theme is active and `Light` while the dark theme is active.
- A manual choice is stored in browser local storage and persists across later visits.
- The toggle uses a semantic button and keyboard-visible focus state.
- If no manual choice is stored, changes to the operating-system theme are followed automatically.

## Visual approach

The dark theme preserves the Institute's navy, blue, and teal identity while replacing bright surfaces with dark navy and slate surfaces. It applies theme-aware treatment to the sticky header, page hero, cards, dark feature sections, call-to-action areas, and footer.

## Evaluation criteria before production approval

1. Long-form readability and contrast.
2. Brand consistency in both modes.
3. Logo legibility.
4. Header/navigation balance with the additional control.
5. Card, border, and hover-state clarity.
6. Mobile fit at narrow widths.
7. Keyboard accessibility and visible focus.
8. No flash or incorrect initial theme on page load.
9. No interference with existing responsive behavior.

## Production decision

Do not merge this experiment into production until it has been visually reviewed and explicitly approved.
