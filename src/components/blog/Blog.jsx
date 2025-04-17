"use client";

import { useEffect, useState } from "react";
import { fetchBlogPosts } from "./api";
import BlogPostCard from "./BlogPostCard";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts().then((response) => {
      setBlogPosts(response.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold">Laddar...</h1>
      </div>
    );
  }
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-6 mx-16 p-6">
        <div className="flex items-center justify-center flex-col p-8 text-center border rounded-xl min-h-[300px] col-span-1">
          <h1 className="text-3xl font-bold">Våra senaste blogginlägg</h1>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            aspernatur, nisi esse saepe doloremque, perspiciatis, autem debitis
            repellendus corporis ea voluptas nulla natus ut. Cupiditate.
          </p>
        </div>
        <div
          className="min-h-[400px] rounded-xl bg-cover bg-center bg-no-repeat col-span-2"
          style={{
            backgroundImage: `url("https://picsum.photos/200/300?random=8")`,
          }}
        ></div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mx-16 p-6">
        {blogPosts.slice(0, 5).map((post, index) => {
          let spanClass;
          if (index % 3 === 0) {
            spanClass = "md:row-span-1";
          } else if (index % 2 === 1) {
            spanClass = "md:row-span-2";
          } else {
            spanClass = "md:row-span-1";
          }
          return (
            <BlogPostCard key={post.id} post={post} className={spanClass} />
          );
        })}
      </div>
    </section>
  );
}
