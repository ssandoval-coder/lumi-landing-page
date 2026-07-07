# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`lumi-landing-page` is Lumi's marketing site (Astro + Tailwind), part of the `lumi` monorepo — see the root `CLAUDE.md` for how it fits with the other subprojects.

**Production domain:** `https://lumi.bempresente.com`

## OAuth consent page (BEM-152)

`src/pages/oauth/consent.astro` is the login/consent UI for Supabase Auth's OAuth 2.1 Server feature (used to connect ChatGPT's MCP client to a Lumi account). It is registered in the Supabase dashboard under **Authentication → OAuth Server** as:

- Site URL: `https://lumi.bempresente.com`
- Authorization Path: `/oauth/consent`

It uses `PUBLIC_SUPABASE_URL`/`PUBLIC_SUPABASE_ANON_KEY` and the `supabase.auth.oauth.*` SDK methods (`getAuthorizationDetails`, `approveAuthorization`, `denyAuthorization`). See `lumi-sdk-agent/README.md` ("Setup OAuth 2.1") for the full flow this page is part of.
