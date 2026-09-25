/**
 * Links to the Code Sync reference project.
 *
 * The live-site link renders only when NEXT_PUBLIC_DEMO_SITE_URL is set, so
 * the docs never ship a dead link while the demo is undeployed.
 */
import { BoxArrowUpRight, Github } from 'react-bootstrap-icons';

import { DEMO_SITE_REPO_URL, DEMO_SITE_URL } from '@/lib/brand';

export default function DemoSiteLinks() {
  return (
    <div className="demo-links">
      <a href={DEMO_SITE_REPO_URL} target="_blank" rel="noreferrer" className="btn">
        <Github size={16} /> ondros-demo-site on GitHub
      </a>
      {DEMO_SITE_URL ? (
        <a href={DEMO_SITE_URL} target="_blank" rel="noreferrer" className="btn secondary">
          <BoxArrowUpRight size={14} /> View the live demo
        </a>
      ) : null}
    </div>
  );
}
