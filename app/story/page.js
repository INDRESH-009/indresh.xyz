import { getAllSlugs, getPostBySlug } from '@/lib/mdx';
import BlogList from '@/components/BlogList';

export const dynamic = 'force-static';

export default async function MyStoryPage() {
  const section = 'story';
  const slugs = getAllSlugs(section);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getPostBySlug(section, slug);
      return { slug, frontmatter };
    })
  );

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">My Story</h1>
      <p className="text-gray-700 mb-8">
        Where I come from, what shaped me, and how I’ve become who I am.
      </p>
      <BlogList section={section} posts={posts} />
    </>
  );
}