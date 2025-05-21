import { getSection } from "@/lib/sections";
export default function SectionLayout({ children,params }) {
  const section = params.section;
  const meta = getSection(section);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        {meta.description && (
          <p className="text-gray-700 mb-8">{meta.description}</p>
        )}
        {children}
      </div>
    </div>
  );
}