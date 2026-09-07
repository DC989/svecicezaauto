# Design System

## Thesis
A utility-first parts catalog for individual car owners that earns authority through information density, not decoration. The design refuses the generic e-commerce hero and promotional card grid; every pixel is optimized for part discovery and fitment verification.

## Brand & Visual World
- **Ground:** Pure white (`#ffffff`) for maximum contrast and readability.
- **Accents:** 
  - Deep blue (`#0033a0`) for typography, headings, logos, and primary interactive elements.
  - Vibrant yellow (`#ffc72c`) for highlights, text selection, and primary action buttons (like 'Find Parts').
- **Typography:** System sans-serif (`Inter` sourced via Google Fonts) for clean, technical legibility. Black (`#111111`) for body text.
- **Form:** 
  - Zero gradients.
  - Zero shadows (other than native browser form element behaviors).
  - Square edges for layout elements (1px borders). 
  - Subtle rounding (4px) allowed only on form inputs (search bar, selects, buttons).
- **Iconography:** Grayscale part photos set on white backgrounds with 1px borders on hover. No decorative illustrations.

## Component Patterns

### Typography Scale
- **xs (11px):** Utility bar links, catalog sub-navigation, footer links.
- **sm (12px):** Vehicle selector dropdowns, part thumbnail labels, announcement text.
- **base (13px):** Left rail navigation links, default body text.
- **md (14px):** Category headings (h2).
- **lg (15px):** Main page titles (h1).
- **xl (18px):** Not used in current dense catalog view.
- **Logo:** 22px, heavy sans, tight tracking (`-0.02em`).

### Navigation & Layout
- **Two-Column Body:** A sticky left rail (200px) acting as the permanent catalog index, alongside a fluid main content area.
- **Density:** Tight grouping (padding `4px` to `16px`), 1px separator lines instead of whitespace blocks, ensuring a high volume of items fit above the fold.
- **Search Hero:** The search bar is the widest, most prominent element on the page, sitting directly below the utility bar.
- **Vehicle Fitment Bar:** A dedicated, full-width gray (`#f5f5f5`) band anchoring the top of the content area. Dropdowns use custom minimal chevrons.

### State
- **Hover:** Text links gain an underline. Left rail links gain a green left border and a subtle green background tint (`#e8f5e9`). Part thumbnails gain a 1px gray border.
- **Focus:** `outline: 2px solid var(--green); outline-offset: 2px;` across all interactive elements.
- **Selection:** `background: var(--green); color: var(--white);` overriding browser defaults for text selection.
