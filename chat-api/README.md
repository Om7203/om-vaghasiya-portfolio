# Portfolio AI guide

This server runs the AI guide at `docs/ask/` and the optional cited-answer step in `docs/evidence/`. The guide answers from public facts in `facts.mjs`. Evidence Desk repeats BM25 search on a fixed copy of two public NIST PDFs before asking Gemini to answer; it accepts only citations to retrieved passage IDs. Neither endpoint receives private CV, certificate, employer data, or local documents. Generated answers may still be wrong, so both interfaces link to the underlying evidence.

## Local preview

Use Node.js 22 or later. Create a key for a **Free Tier** project in Google AI Studio and set `GEMINI_API_KEY` in your terminal environment. Run `npm run dev` here and open `http://localhost:4173/ask/` or `/evidence/`. Never paste the key into a public config file or commit it. Browser search still works without a key. Run `npm test` to check request handling without an API call.

## Public deployment

The portfolio remains on GitHub Pages. This repository can be deployed to Vercel with either the repository root or `chat-api` as the project root; both expose `/api/chat` and `/api/evidence`. Add `GEMINI_API_KEY` as a sensitive Production environment variable in Vercel Project Settings; optionally set `GEMINI_MODEL` (default: `gemini-3.5-flash-lite`). Set the public server origin in `docs/ask/config.js` and `docs/evidence/config.js` once deployed. The functions permit browser requests from `https://om7203.github.io`.

The Vercel project has a firewall rule for `/api/chat` that allows eight requests per IP address per 60 seconds. Add an equivalent rule for `/api/evidence` before treating that endpoint as hardened against scripted traffic. Both endpoints validate input length and origin, but browser origin checks cannot stop direct scripted requests. Gemini Free Tier has rate limits; exceeding them can make an answer temporarily unavailable. Check the selected Google AI Studio project is on the Free Tier before deployment and do not link a billing account unless you intend to use the paid tier. Monitor usage and errors after launch. The server does not persist questions; Evidence Desk sends one question and at most three retrieved passages to Gemini. Do not enter private information.

To update answers, edit `facts.mjs` only after the corresponding public page is up to date. Keep employer-private information out of this file.
