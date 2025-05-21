import SectionCard from "@/components/SectionCard";
import { sections } from "@/lib/sections";

export default function Home() {
  return (
    <section className="pt-16 pb-24">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My personal Journal</h1>
        <p>A space for my brain to talk to the universe</p>
      </div>

      <div  className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto p-6">
        {sections.map((sec)=>(
          <SectionCard key={sec.slug} {...sec} />
        ))}
      </div>
    </section>
  );
}
