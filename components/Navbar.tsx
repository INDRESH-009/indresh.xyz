// components/NavBar.tsx
'use client'
import Link from 'next/link'

const sections = [
  'story',
  'dreams',
  'path',
  'experiments',
  'echoes',
  'research',
  'monologue',
]

export function NavBar() {
  return (
    <nav className="bg-gray-100 py-4">
      <ul className="flex justify-center space-x-6">
        <li key="home">
            <Link href="/" className="capitalize text-lg hover:underline">
                Home
            </Link>
        </li>
        {sections.map((sec) => (
          <li key={sec}>
            <Link
              href={`/${sec}`}
              className="capitalize text-lg hover:underline"
            >
              {sec}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
