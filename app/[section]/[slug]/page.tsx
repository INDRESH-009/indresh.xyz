import { getPostBySlug } from "@/lib/mdx";
import MDXRenderer from './MDXRenderer';

export default async function PostPage({
  params,
}: {
  params: { section: string; slug: string };
}) {
  const { section, slug } = params;
  const { code, frontmatter } = await getPostBySlug(section, slug);

  return (
    <article className="prose mx-auto py-12">
      <h1 >{frontmatter.title}</h1>
      <MDXRenderer code={code} />
    </article>
  );
}
