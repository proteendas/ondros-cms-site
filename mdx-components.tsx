import type { MDXComponents } from 'mdx/types';

/** Required by @next/mdx (app router). Docs styling is handled by the
 * .docs-content CSS scope; the only override is `table`, which gets a
 * rounded/bordered wrapper (mirrors the pricing page's .compare-wrap) since
 * markdown emits a bare <table> with nothing to hang that treatment on. */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: (props) => (
      <div className="docs-table-wrap">
        <table {...props} />
      </div>
    ),
    ...components,
  };
}
