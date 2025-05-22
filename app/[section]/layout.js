// app/[section]/layout.js
export default function SectionLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {children}
      </div>
    </div>
  );
}
