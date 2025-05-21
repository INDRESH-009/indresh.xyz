export const sections = [
  {
    slug: 'story',
    label: 'Stories',
    title: 'My Stories',
    description:
      'Life throws different situaltions at us and this is the interesting bits about my experiences in life and my perspectives on them.',
  },
  {
    slug: 'vision',
    label: 'Vision',
    title: 'Vision Board',
    description:
      'Vision is what drives humans to take action. It’s the light that guides through the fog of uncertainty.This is my vision board and what i want to achieve in life.',
  },
  {
    slug: 'systems',
    label: 'Systems',
    title: 'Systems in place',
    description:
      'Bridge the gap between who I am and who I want to be. This is my system for self-improvement and personal growth.',
  },
  {
    slug: 'experiments',
    label: 'Experiments',
    title: 'Field Notes from the Edge',
    description:
      'Experiments in discomfort, curiosity, and becoming. This is where I document my experiments and the lessons learned from them.',
  },
  {
    slug: 'echoes',
    label: 'Echoes',
    title: 'Echoes & Guides',
    description:
      'The people, books, and voices that whispered something I needed to hear. This is where I share the people and books that have inspired me.',
  },
  {
    slug: 'research',
    label: 'Research',
    title: 'The Research Shelf',
    description:
      'Where understanding becomes personal knowledge. This is where I share my research and the things I’m learning.',
  },
  {
    slug: 'monologue',
    label: 'Monolouge',
    title: 'Inner Monologue',
    description:
      'Letters to myself, the truths I’m not ready to say out loud. This is where I share my thoughts and feelings that I’m not ready to share with the world.',
  },
];

// Helper to look up by slug
export function getSection(slug) {
  return sections.find((s) => s.slug === slug);
}