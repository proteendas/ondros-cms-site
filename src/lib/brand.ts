/**
 * Marketing-site brand config (spec 007/009). Kept as its own copy because
 * the marketing app is deliberately decoupled from the editor; the editor's
 * twin lives in editor/src/lib/brand.ts, the backend's in settings.brand_name.
 */
export const BRAND = {
  name: 'Ondros CMS',
  short: 'Ondros',
  tagline: 'Structured content, delivered.',
  logo: '/branding/logo.svg',
  logoIcon: '/branding/logo-icon.svg',
  favicon: '/branding/favicon.ico',
} as const;

/** The authenticated product app — all Login / Get Started CTAs point here
 * (spec 009: no duplicate login form on the marketing site). */
export const APP_LOGIN_URL =
  process.env.NEXT_PUBLIC_APP_LOGIN_URL ?? 'http://localhost:3000/login';
export const APP_SIGNUP_URL =
  process.env.NEXT_PUBLIC_APP_SIGNUP_URL ?? 'http://localhost:3000/signup';

/**
 * The Code Sync reference project — a small Next.js site instrumented exactly
 * the way a customer's own site needs to be, and the thing the Code Sync docs
 * tell people to copy from.
 *
 * Both are environment-driven so the repo can move or be forked without a code
 * change. DEMO_SITE_URL is empty until the demo is deployed, and every link to
 * it is rendered conditionally — an unset value shows nothing rather than
 * shipping a dead link.
 */
export const DEMO_SITE_REPO_URL =
  process.env.NEXT_PUBLIC_DEMO_SITE_REPO_URL ??
  'https://github.com/proteendas/ondros-demo-site';
export const DEMO_SITE_URL = process.env.NEXT_PUBLIC_DEMO_SITE_URL ?? '';
