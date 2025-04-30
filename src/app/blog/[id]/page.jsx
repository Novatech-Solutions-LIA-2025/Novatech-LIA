import { fetchBlogPosts } from "../../../components/blog/api";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }) {
  const { id } = params;
  const { data: posts } = await fetchBlogPosts();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) return notFound();

  return (
    <article className="flex flex-row max-w-6xl mx-auto m-32">
      <img
        src={post.image}
        alt={post.title}
        className="rounded-xl w-full object-cover mb-6"
      />
      <div className="flex flex-col justfiy-center w-full p-6">
        <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500 text-sm my-2">{post.date}</p>
      <p className="mt-4 text-lg">{post.content}</p>
        </div>
    </article>
  );
}
