# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static site with optional components). Chosen by the user.

## Users

Individual car owners who need to find and purchase specific parts for their own vehicles. They arrive knowing what they need (or with a partial description) and want to locate the correct part quickly, verify fitment, and check out without friction.

## Product Purpose

An online car parts catalog and shop where individual car owners can search for and buy vehicle parts. Success means a user arrives, finds the exact part that fits their car, and completes a purchase — without calling anyone or visiting a physical counter.

## Positioning

A parts catalog built for individual car owners, not trade professionals — simpler fitment guidance, plain-language part descriptions, and a self-serve buying flow that does not assume the user knows industry jargon.

## Operating Context

Users browse from home on desktop or mobile. They may be mid-repair, referencing a workshop invoice, or planning maintenance. Part discovery is driven by search (part name, part number, or vehicle make/model/year). The visual reference is mcmaster.com: dense, utility-first, information-rich — every pixel earns its place by delivering product data.

## Capabilities and Constraints

- Core capability: search and browse a catalog of car parts; filter by vehicle compatibility (make, model, year) and part category.
- Purchase flow: add to cart, checkout.
- Platform: Astro — server-rendered HTML with optional interactive islands (React/Svelte/etc. TBD).
- No confirmed payment provider, inventory system, or CMS yet.
- Part fitment data source: undecided.

## Evidence on Hand

- Design reference: https://www.mcmaster.com/ — a dense, table-driven parts catalog with aggressive information density, strong typographic hierarchy, and minimal decoration.
- No product assets (logo, photography, copy) confirmed yet; future work must not fabricate them.

## Product Principles

1. **Density earns trust.** Show as much useful part data as possible per pixel; decorative whitespace is a tax on the user's time.
2. **Fitment first.** Compatibility information is the highest-value signal — surface it before price, before description.
3. **Self-serve without expertise.** Every label, filter, and error message must work for someone who has never bought a car part online before.
4. **Speed over spectacle.** A fast, reliable catalog beats a beautiful one that loads slowly or loses state.

## Accessibility & Inclusion

No product-specific accessibility standard confirmed. WCAG 2.1 AA as a sensible baseline for a commerce site.
