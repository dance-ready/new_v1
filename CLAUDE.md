This file is the single source of truth for how Claude Code (and any AI coding assistant) should work on this project. Read it fully before making any changes.

Repo: The final repository must be transferred to the Client’s own GitHub account.

Live site: https://www.danceready.org/ (deployed via Vercel).

Built with: Next.js 14, Sanity, GitHub, Vercel, and Claude Code.1
1. What this site is

danceready.org is the professional online presence for the Dance Ready Project, led by Dr. Danelle Dickson. Its core mission is to be a comprehensive resource dedicated to reducing injury risks for dancers while simultaneously optimizing their physical performance. The site must utilize an integrated model of assessment, conditioning, and educational resources.1

The site serves three specific audiences simultaneously:
Dancers (Students to Professionals): Seeking science-backed support to lead their best dance lives. They need to access the Assessment (Dance Ready Score), find conditioning programs, and register for workshops or events.1
Dance Teachers, Studios, and Professionals: Looking for unbiased decision-making tools and clear guidelines based on dance medicine. They need to access information on Education, Dansebridge Online, and Affiliates.1
AI Crawlers and LLMs: Indexing the site to position the Dance Ready Project as the central hub for research-based dance health and performance. The content must be fully visible and indexed.1
2. About the Client (context for any copy Claude writes)
Client: Dr. Danelle Dickson, operating as Dance Ready Project, Washington DC.1
Positioning: The organization is a professional resource providing top-tier, research-based routines and education.1
Key Services to Promote: Assessment tools (e.g., Dance Ready Score), conditioning programs, and educational offerings (e.g., functional anatomy, sleep/immune health).1
Tone & Voice: Professional, authoritative, empathetic, and science-backed.
Mandate: Honesty over inflation. Never fabricate research, medical, or performance claims. All content must reflect the scientific rigor mentioned in the project description.
3. Tech stack
Frontend: Next.js 14.1
CMS: Sanity (must be connected for Blog posting).1
Starting Point: The Client’s existing codebase (danceready-project.zip) shall serve as the foundation.1
Hosting: Vercel (custom domain danceready.org).1
Integrations: New Zenler newsletter and lead-capture form connected and tested on all relevant pages.1
Mandatory Pages (8 pages total)1
Home
Assessment (Dance Ready Score)
Dansebridge Online
Education
Events
About Us
Affiliates
Contact
Files that MUST exist (create if missing)
sitemap.xml — list of every public page.
robots.txt — tells crawlers what to index.
llms.txt — AI crawler discovery file.
4. 🚨 The critical SEO / bot-readability problem

The Next.js implementation MUST NOT rely on client-side rendering (CSR) for critical page content. To ensure the site serves the third audience (AI crawlers/LLMs) and maintains SEO, Claude Code must use Server-Side Rendering (SSR) or Static Site Generation (SSG).1

Requirement: When any bot or crawler fetches danceready.org, the raw HTML shell must contain all of the page's primary content (text, headlines, main calls-to-action, etc.) on the first load, without requiring JavaScript execution. This guarantees that Google, Perplexity, and other LLM crawlers can accurately index the site's authority and content.