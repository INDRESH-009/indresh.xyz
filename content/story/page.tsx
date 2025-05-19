// app/story/page.tsx
import PostList from '@/components/PostList'

// Dummy data for now
const posts = [
  {
    title: 'The Wound That Taught Me',
    slug: 'the-wound-that-taught-me',
    date: '2023-11-21',
    excerpt: 'A quiet afternoon that shifted my relationship with pain forever.',
  },
  {
    title: 'First Pages of Becoming',
    slug: 'first-pages',
    date: '2024-02-04',
    excerpt: 'The early days of my journey inward — messy, uncertain, honest.',
  },
]

export default function StoryPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-zinc-800 mb-6">Story</h1>
      <PostList posts={posts} />
    </main>
  )
}
