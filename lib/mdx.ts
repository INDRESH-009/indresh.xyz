// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllPostsInSection(section: string) {
  const dir = path.join(process.cwd(), 'content', section)
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { data } = matter(raw)
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? new Date().toISOString(),
      excerpt: data.excerpt ?? '',
    }
  })
}
