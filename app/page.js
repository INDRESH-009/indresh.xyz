import SectionCard from "@/components/SectionCard";

const sections = [
  {
    slug: 'story',
    title: 'My Story',
    description:
      'Life throws different situaltions at us and this is the interesting bits about my experiences in life and my perspectives on them.',
  },
  {
    slug: 'vision',
    title: 'Vision Board',
    description:
      'Vision is what drives humans to take action. It’s the light that guides through the fog of uncertainty.This is my vision board and what i want to achieve in life.',
  },
  {
    slug: 'systems',
    title: 'Path in Motion',
    description:
      'Bridge the gap between who I am and who I want to be. This is my system for self-improvement and personal growth.',
  },
  {
    slug: 'experiments',
    title: 'Field Notes from the Edge',
    description:
      'Experiments in discomfort, curiosity, and becoming. This is where I document my experiments and the lessons learned from them.',
  },
  {
    slug: 'echoes',
    title: 'Echoes & Guides',
    description:
      'The people, books, and voices that whispered something I needed to hear. This is where I share the people and books that have inspired me.',
  },
  {
    slug: 'research',
    title: 'The Research Shelf',
    description:
      'Where understanding becomes personal knowledge. This is where I share my research and the things I’m learning.',
  },
  {
    slug: 'monologue',
    title: 'Inner Monologue',
    description:
      'Letters to myself, the truths I’m not ready to say out loud. This is where I share my thoughts and feelings that I’m not ready to share with the world.',
  },
];
export default function Home() {
  return (
    <section>
      <div>
        <h1>My personal Journal</h1>
        <p>A space for my brain to talk to the universe</p>
      </div>

      <div>
        {sections.map((sec)=>(
          <SectionCard key={sec.slug} {...sec} />
        ))}
      </div>
    </section>
  );
}
