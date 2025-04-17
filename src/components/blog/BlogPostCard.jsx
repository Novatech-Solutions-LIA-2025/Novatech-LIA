import React from "react";
import PropTypes from "prop-types";

export default function BlogPostCard({ post, className = "" }) {
  return (
    <article
      className={`relative rounded-xl p-4 shadow-md bg-cover min-h-[300px] bg-center bg-no-repeat ${className} hover:border hover:scale-105 transition-transform duration-300`}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
      <div className="relative p-4 text-white flex flex-col justify-end h-full">
        <h2 className="text-3xl font-semibold">{post.title}</h2>
        <div className="flex flex-row gap-2 items-center mt-2">
          <p className="text-sm text-gray-300">{post.date}</p>
          <p className="my-2">{post.content}</p>
        </div>
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
  className: PropTypes.string,
};
