"use client";

import React, { useState, useEffect } from "react";
import "./insite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { fetchBlogPosts } from "../blog/api";

function Insite() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0); // För swipe-rörelser

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBlogPosts(); // Hämtar blogginlägg
      setBlogPosts(response.data);
    };

    fetchData();
  }, []);

  const handleSwipe = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleSwipeEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const swipeThreshold = 50;

    if (diff > swipeThreshold && currentImageIndex < blogPosts.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    } else if (diff < -swipeThreshold && currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const isPrevDisabled = currentImageIndex === 0;
  const isNextDisabled =
    currentImageIndex === blogPosts.length - 1 || blogPosts.length === 0;

  return (
    <section id="insite-scroll" className="insite">
      <div className="insite-header">
        <h2 className="insite-subtitle">
          <span className="blog-highlight" aria-hidden="true"></span>
          Blog
        </h2>
        <h3 className="insite-title">
          <span className="insite-accent">NovaTech-</span>Insite
          <span className="insite-underline"></span>
        </h3>
        <div className="oval-gradient6"></div>
      </div>

      <div className="insite-image-slider">
        <button
          onClick={() => setCurrentImageIndex((prev) => Math.max(prev - 1, 0))}
          className={`slider-button ${isPrevDisabled ? "disabled" : ""}`}
          disabled={isPrevDisabled}
          aria-label="Föregående inlägg"
        >
          &lt;
        </button>

        <div
          className="insite-slider-container"
          onTouchStart={handleSwipe}
          onTouchEnd={handleSwipeEnd}
        >
          <div
            className="insite-slider-wrapper"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {blogPosts.map((post) => (
              <article key={post.id} className="insite-slide">
                <div className="insite-image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title || "NovaTech blogginlägg"}
                    className="insite-image"
                    loading="lazy"
                  />
                </div>
                <div className="insite-image-content">
                  <h4 className="insite-image-title">{post.title}</h4>
                  <Link
                    href={`/blog/${post.slug || post.id}`}
                    passHref
                    legacyBehavior
                  >
                    <a className="insite-read-more">
                      Läs mer{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="insite-arrow"
                      />
                    </a>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            setCurrentImageIndex((prev) =>
              Math.min(prev + 1, blogPosts.length - 1)
            )
          }
          className={`slider-button ${isNextDisabled ? "disabled" : ""}`}
          disabled={isNextDisabled}
          aria-label="Nästa inlägg"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Insite;
