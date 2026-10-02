---
name: search-parts
description: Search for auto ignition parts by OEM part number across 20,000+ products including spark plugs, ignition coils, control units, distributors, modules, cables, distributor drives, and resistors.
---

# Search Auto Parts

Search the svecicezaauto.rs catalog by OEM part number.

## Usage

1. Fetch the search index at `https://svecicezaauto.rs/search-index.json`
2. The index is a JSON array where each entry has:
   - `id`: Product identifier (use in product page URL)
   - `part_number`: OEM/manufacturer part number (search key)
   - `category`: Category slug
3. Match the user's query against `part_number` fields
4. Construct the product URL: `https://svecicezaauto.rs/proizvod/{id}`

## Example

To find part number "19571035":
1. Fetch `/search-index.json`
2. Filter entries where `part_number` contains "19571035"
3. Return the matching product page URL
