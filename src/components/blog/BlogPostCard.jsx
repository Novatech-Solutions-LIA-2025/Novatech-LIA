import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

export default function BlogPostCard({ post, excerptLength, onClick, className = "" }) {
const contentToShow = excerptLength
? post.content.length > excerptLength
? (
  <>
  {post.content.slice(0, excerptLength)} 
  <span className="text-blue-400"> ...läs mer</span>
  </>
)

: post.content
: post.content;

  return (
    <article
      onClick={onClick}
      className={`cursor-pointer relative rounded-xl p-4 shadow-md bg-cover min-h-[300px] bg-center bg-no-repeat ${className} hover:border hover:scale-105 transition-transform duration-300`}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
      <div className="relative p-4 text-white flex flex-col justify-end h-full">
        <h2 className="text-3xl font-semibold">{post.title}</h2>
        <div className="flex flex-row gap-2 items-center mt-2">
          <p className="text-sm text-gray-300">{post.date}</p>
          <p className="my-2">{contentToShow}</p>
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
  excerptLength: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
