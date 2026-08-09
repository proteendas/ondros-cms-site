import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Docs pages are authored as plain .mdx files under src/app/docs (spec 011).
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

// remark-gfm enables GitHub-flavored markdown tables — several docs pages
// use `| a | b |` pipe tables, which plain markdown doesn't parse at all.
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
