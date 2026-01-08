import './MinorLayoutMobile.css';

import type { HomepageSection } from '../lib/getSectionArticles';

export default function MinorLayoutMobile({ data }: { data: HomepageSection }) {
  return (
    <div className={`minor-layout-mobile minor-layout-${data.section}`}></div>
  );
}
