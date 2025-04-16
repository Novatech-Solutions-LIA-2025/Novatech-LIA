import React from "react";
import PropTypes from "prop-types";
export default function BlogPostCard({ post }) {
  return (
    <article className="border rounded-xl p-4 shadow-md max-w-[400px] mx-auto">
      <img 
        src={post.image} 
        alt={post.title} 
        className="object-cover rounded-[20px] max-h-[400px] w-full"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
        <p className="text-sm text-gray-500">{post.date}</p>
        <p className="my-2">{post.content}</p>
      </div>
    </article>
  );
}

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

