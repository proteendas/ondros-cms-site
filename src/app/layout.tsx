import type { Metadata } from 'next';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';

import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { BRAND } from '@/lib/brand';

import './globals.css';

// One grotesk (Plus Jakarta Sans) carries everything from body copy to
// extrabold display headings, plus a mono for code. tailwind.config.ts's
// display/label/sans keys all alias to --font-sans so the rest of
// globals.css didn't need renaming.
const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s — ${BRAND.name}`,
  },
  description:
    'Ondros CMS is an API-first headless CMS with visual editing, live preview, AI-assisted authoring, localization, and a typed SDK.',
  icons: {
    icon: [
      { url: BRAND.favicon, sizes: '32x32' },
      { url: BRAND.logoIcon, type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      'Model content visually, edit with live preview, generate with AI, and deliver anywhere through the Ondros SDK.',
    siteName: BRAND.name,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-white font-sans text-ink-900 antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
