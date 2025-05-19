// app/[section]/page.tsx
import { getAllPostsInSection } from '@/lib/mdx'
import PostList from '@/components/PostList'

export default function SectionPage({
  params,
}: {
  params: { section: string }
}) {
  const posts = getAllPostsInSection(params.section)

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold capitalize mb-6 text-zinc-900">
        {params.section}
      </h1>
      <PostList
        posts={posts.map((post) => ({
          title: post.title,
          slug: `${params.section}/${post.slug}`,
          date: post.date,
          excerpt: post.excerpt,
        }))}
      />
    </main>
  )
}
