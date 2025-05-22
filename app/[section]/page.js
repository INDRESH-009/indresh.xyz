import { getAllSlugs, getPostBySlug } from '@/lib/mdx';
import BlogList from '@/components/BlogList';
import { getSection } from '@/lib/sections';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export default async function SectionPage({params}) {
  const {section}= params;
  const meta = getSection(section);
  if (!meta) return notFound();  // 404 for unknown slugs

  // Load all posts in this section
  const slugs = getAllSlugs(section);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getPostBySlug(section, slug);
      return { slug, frontmatter };
    })
  );

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
      {meta.description && (
        <p className="text-gray-700 mb-8">{meta.description}</p>
      )}
      <BlogList section={section} posts={posts} />
    </>
  );
}