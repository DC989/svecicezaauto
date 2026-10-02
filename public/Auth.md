# Agent Authentication — svecicezaauto.rs

> This is a fully public website. No authentication is required to access any content, product data, or search functionality.

## Access Policy

- **Authentication Required**: No
- **API Keys**: Not required
- **OAuth 2.0**: Not implemented — all resources are public
- **Rate Limiting**: Standard web server limits apply
- **Identity Verification**: Not required

## Public Endpoints

All endpoints below are freely accessible without credentials:

| Endpoint | Description | Format |
|---|---|---|
| `/search-index.json` | Complete searchable index of 20,000+ parts | JSON |
| `/proizvod/{id}` | Individual product pages with vehicle compatibility | HTML |
| `/kategorija/{slug}` | Category listing pages (paginated) | HTML |
| `/llms.txt` | Machine-readable site summary for AI agents | Markdown |
| `/llms-full.txt` | Complete reference documentation | Markdown |
| `/sitemap-index.xml` | Full XML sitemap | XML |
| `/.well-known/agent.json` | Agent skills manifest | JSON |
| `/.well-known/mcp.json` | MCP Server Card | JSON |
| `/.well-known/ai-plugin.json` | AI Plugin manifest | JSON |
| `/.well-known/api-catalog` | API catalog (RFC 9727) | JSON |

## Agent Registration

No registration is required. Agents may freely:

1. **Fetch the search index** at `/search-index.json` to search 20,000+ parts by part number
2. **Browse product pages** at `/proizvod/{id}` for detailed part and vehicle compatibility data
3. **Read structured data** — all product pages include Schema.org Product and BreadcrumbList markup

## Pricing & Commerce

Prices are not displayed on the website. To obtain pricing:

- **Viber**: +381 66 504 0583
- **WhatsApp**: +381 66 504 0583

Send the **OEM part number** and **vehicle model** for fastest response.

## Contact

- **Website**: https://svecicezaauto.rs/kontakt
- **Viber/WhatsApp**: +381 66 504 0583
