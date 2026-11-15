# Deploying McLearn Media (site + Arena)

The site is static: no build step. Two ways to publish on Cloudflare. Use ONE.

## A. Cloudflare Pages (what the README describes)
1. Cloudflare dashboard > Workers & Pages > your McLearn Media project > Settings > Builds.
2. Repository: `mclearn2025-a11y/Mclearn-Media-`, branch `main` (reconnect if the repo move broke it).
3. Framework preset: None. Build command: empty. Output directory: `/`.
4. Every push to `main` then deploys. Deployments tab > Retry deployment forces one.

## B. Workers with static assets (uses `wrangler.jsonc` in this repo)
1. Workers & Pages > Create > Import a repository > `Mclearn-Media-`.
2. Build command: empty. Deploy command: `npx wrangler deploy`.
3. Or from a computer with Node: `npx wrangler login` then `npx wrangler deploy`.
`.assetsignore` keeps git files, docs and config out of the public site.

## After deploying, check
- `/arena/` loads and the footer says 34 games.
- `/games` and `/chess` redirect to `/arena/`.
