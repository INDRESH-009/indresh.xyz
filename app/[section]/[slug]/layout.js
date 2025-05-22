// app/[section]/[slug]/layout.js

export const dynamic = 'force-static';

export default function PostLayout({ children }) {
  // We just render the article itself, skipping
  // the section header that lives in parent layout
  return <>{children}</>;
}
