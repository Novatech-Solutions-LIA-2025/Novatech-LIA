"use client";

import React, { useState, useEffect } from "react";
import "./insite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { fetchBlogPosts } from "../blog/api"; // Importera fetchBlogPosts från api.js

function Insite() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    const fetchData = async () => {
      const response = await fetchBlogPosts();
      setBlogPosts(response.data);
    };

    fetchData();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextImage = () => {
    if (currentImageIndex >= blogPosts.length - 1) return; // Stanna på sista bilden
    setSlideDirection("next");
    setCurrentImageIndex(prevIndex => prevIndex + 1);
    setSlideDirection(null);
  };

  const prevImage = () => {
    if (currentImageIndex <= 0) return; // Stanna på första bilden
    setSlideDirection("prev");
    setCurrentImageIndex(prevIndex => prevIndex - 1);
    setSlideDirection(null);
  };

  const getTransform = () => {
    if (slideDirection === "next") {
      return `translateX(-${(currentImageIndex + 1) * 100}%)`;
    } else if (slideDirection === "prev") {
      return `translateX(-${(currentImageIndex - 1) * 100}%)`;
    } else {
      return `translateX(-${currentImageIndex * 100}%)`;
    }
  };

  const isPrevButtonDisabled = currentImageIndex === 0;
  const isNextButtonDisabled = currentImageIndex === blogPosts.length - 1;

  return (
    <div id="#insite">
      <div className="insite">
        <div className="insite-header">
          <h6 className="insite-subtitle">
            <li className="blog-highlight"></li>
            Blog
          </h6>
          <h3 className="insite-title">
            <span className="insite-accent">NovaTech-</span>
            <span>Insite</span>
            <div className="insite-underline"></div>
          </h3>
          <div className="oval-gradient6"></div>
        </div>

        <div className="insite-image-slider">
          {!isMobile && (
            <button
              onClick={prevImage}
              className={`slider-button prev-button ${isPrevButtonDisabled ? "disabled" : ""}`}
              disabled={isPrevButtonDisabled}
            >
              &lt;
            </button>
          )}

          <div className="insite-slider-container">
            <div
              className="insite-slider-wrapper"
              style={{ transform: getTransform() }}
            >
              {blogPosts.map((post, index) => (
                <div key={post.id} className="insite-slide">
                  <div className="insite-image-wrapper">
                    <img
                      src={post.image}
                      alt={`Slide ${index + 1}`}
                      className="insite-image"
                    />
                  </div>
                  <div className="insite-image-content">
                    <h2 className="insite-image-title">{post.title}</h2>
                    <Link href="/blog">
                      <p className="insite-read-more">
                        Läs mer{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="insite-arrow"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <button
              onClick={nextImage}
              className={`slider-button slider-next-button ${isNextButtonDisabled ? "disabled" : ""} ${isTablet ? "tablet-button" : ""}`}
              disabled={isNextButtonDisabled}
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Insite;
