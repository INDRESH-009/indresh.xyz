// components/PostList.tsx
import Link from 'next/link'

type Post = {
  title: string
  date: string
  slug: string
  excerpt: string
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="divide-y divide-gray-200">
      {posts.map((post) => {
        const date = new Date(post.date)
        const day = date.getDate()
        const month = date.toLocaleString('default', { month: 'short' })
        const year = date.getFullYear()

        return (
          <div key={post.slug} className="flex py-6 gap-4">
            {/* Date */}
            <div className="text-right w-12 shrink-0 text-zinc-700 font-bold text-xl leading-tight">
              <div>{day}</div>
              <div className="text-sm font-normal text-zinc-500">
                {month} {year}
              </div>
            </div>

            {/* Post Content */}
            <div>
              <Link
                href={`/story/${post.slug}`}
                className="text-lg font-semibold text-blue-700 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-sm text-zinc-600 mt-1">{post.excerpt}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
