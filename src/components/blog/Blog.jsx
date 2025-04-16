import blogPosts from "./blogData";
import BlogPostCard from "./BlogPostCard";

export default function Blog() {
  return (
    <section className="grid gap-6 p-6 md:grid-cols-3">
      {blogPosts.map((post, index) => {
        // Bestäm vilken kolumnspan inlägget ska få
        // Om du vill att mönstret ska upprepas per 3 inlägg kan du använda modulo
        let spanClass;
        if (index % 3 === 0) {
          spanClass = "md:col-span-1"; // Första i gruppen
        } else if (index % 3 === 1) {
          spanClass = "md:col-span-3"; // Andra i gruppen
        } else {
          spanClass = "md:col-span-1"; // Tredje i gruppen
        }

        return <BlogPostCard key={post.id} post={post} className={spanClass} />;
      })}
    </section>
  );
}
