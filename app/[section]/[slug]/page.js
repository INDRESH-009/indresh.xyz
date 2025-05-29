// app/[section]/[slug]/page.js
import { notFound } from 'next/navigation';
import { getSection } from '@/lib/sections';
import { getAllSlugs, getPostBySlug } from '@/lib/mdx';
import MDXContent from '@/components/MDXContent';
import Link from 'next/link';

export async function generateStaticParams() {
  // Flatten all section/slug combos
  const { sections } = await import('@/lib/sections');
  return sections.flatMap(({ slug: section }) =>
    getAllSlugs(section).map((slug) => ({ section, slug }))
  );
}

export default async function PostPage({ params }) {
  const { section, slug } = params;
  if (!getSection(section)) return notFound();

  const { code, frontmatter } = await getPostBySlug(section, slug);

  return (
    <article className="prose prose-lg max-w-3xl mx-auto py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
        <time className="block text-gray-500">
          {new Date(frontmatter.date).toLocaleDateString()}
        </time>
      </header>
      <MDXContent code={code} />
      <footer className="mt-12">
        <Link href={`/${section}`} className="text-blue-600 hover:underline">
          ← Back to {getSection(section).title}
        </Link>
      </footer>
    </article>
  );
}
