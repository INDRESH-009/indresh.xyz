import BlogPreview from "./BlogPreview";
export default function BlogList({section,posts}){
      return (
        <div className="border-t border-gray-200">
            {posts.map(({ slug, frontmatter }) => (
            <BlogPreview
                key={slug}
                section={section}
                slug={slug}
                date={frontmatter.date}
                title={frontmatter.title}
                excerpt={frontmatter.excerpt}
            />
            ))}
        </div>
      );
}