import blogPosts from "./blogData";
import BlogPostCard from "./BlogPostCard";

export default function Blog() {
  return (
    <section>
      <div className="grid md:grid-cols-3 mx-28">
        <div className="flex items-center border rounded-xl min-h-[300px] col-span-1">
          <h1 className="text-3xl font-bold">Våra nyaste blogginlägg</h1>
        </div>
        <div className="min-h-[400px] border rounded-xl bg-cover bg-center bg-no-repeat col-span-2"
        style={{ backgroundImage: `url("https://picsum.photos/200/300?random=8")` }}>
        </div>
      </div>
      <div className="grid mx-16 gap-6 p-6 md:grid-cols-3">
        {blogPosts.map((post, index) => {
          let spanClass;
          if (index % 3 === 0) {
            spanClass = "md:row-span-1";
          } else if (index % 2 === 1) {
            spanClass = "md:row-span-2";
          } else {
            spanClass = "md:row-span-1";
          }
          return <BlogPostCard key={post.id} post={post} className={spanClass} />;
        })}
      </div>
    </section>
  );
}
