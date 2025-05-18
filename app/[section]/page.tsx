import Link from 'next/link'
import { getAllSlugs } from '@/lib/mdx'

export default async function SectionPage({
  params,
}: {
  params: { section: string }
}) {
  const slugs = getAllSlugs(params.section)

  return (
    <main className="prose mx-auto py-12">
      <h1 className="text-4xl capitalize">{params.section}</h1>
      <ul className="list-disc pl-6 mt-6">
        {slugs.map((slug) => {
          const href = `/${params.section}/${slug}`
          // strip leading `number.` from the slug
          const display = slug.replace(/^\d+\./, '')  
          const label = display.replace(/-/g, ' ')
          return (
            <li key={slug}>
              <Link href={href} className="text-blue-600 hover:underline">
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
