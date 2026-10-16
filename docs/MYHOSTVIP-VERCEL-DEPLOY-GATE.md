# MyHostVIP — Vercel deployment quota and SSR release gate

## Verified on 16 October 2026
- GitHub main: `2bedb07c2d60ed50092ea2bcf16bb3a0edf43353` (PR #9).
- The commercial Vite SPA deployment was READY at this commit on `myhostvip.vercel.app`.
- The separate TanStack project `myhostvip-tanstack-ssr-preview` still served an earlier commit; **no** claim that the latest SSR was published.
- Vercel returned HTTP 402 `api-deployments-free-per-day` and `retryAfter: 86400`. This is a team quota, not a code build failure. Do not automatically retry in a loop or try to bypass the cap.
- The SSR preview project (ID `prj_40SwM1etnRthYWaeq6FKjCr7hIO3`) had automatic Preview Deployments disabled through Vercel Project Settings and affected-project deployment detection enabled. This is **only for the SSR pilot project**; the commercial SPA project was not changed. Existing deployment URLs remain.
- After the quota is restored, publish the **latest verified GitHub main commit** in the SSR project once, then check exact commit SHA, HTTP 200 for all 10 pages, HTTP 404, current SEO/noindex and WhatsApp conversion. **Do not promote an older preview branch deployment** merely to obtain a READY result.

## Release control
- GitHub CI requires `npm run check:commercial-gates`, `npm run build`, and `npm run smoke:ssr` for all pull requests touching `experiments/tanstack-start/`.
- No production-domain change or index-on without actual verified prices/plan limits, legal identity, Terms of Service and privacy policy. See `MYHOSTVIP-COMMERCIAL-TRUTH-GATE.md` and `MYHOSTVIP-SSR-CUTOVER-ROLLBACK.md`.
- Keep GitHub CI as source of technical truth while Vercel quota is blocked. No dependence on Lovable.
- Deploy using existing connected GitHub/Vercel project; do not add API tokens to source or disable deployment protection.
