export default function MyStoryLayout({ children }) {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {children}
      </div>
    </div>
  );
}