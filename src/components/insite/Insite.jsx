"use client";

import React, { useState } from "react";
import "./insite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Insite() {
  const images = [
    { src: "/images/blog1.jpg", title: "Instagram-inlägg" },
    { src: "/images/blog2.jpg", title: "Blogginlägg" },
    { src: "/images/blog3.jpg", title: "Blogginlägg" },
    { src: "/images/blog4.jpg", title: "Blogginlägg" },
    { src: "/images/blog5.jpg", title: "Blogginlägg" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setSlideDirection("next");
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
        setSlideDirection(null);
      }, 1000);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setSlideDirection("prev");
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => prevIndex - 1);
        setSlideDirection(null);
      }, 1000);
    }
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
  const isNextButtonDisabled = currentImageIndex === images.length - 1;

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
          <button
            onClick={prevImage}
            className={`slider-button prev-button ${
              isPrevButtonDisabled ? "disabled" : ""
            }`}
            disabled={isPrevButtonDisabled}
          >
            &lt;
          </button>

          <div className="insite-slider-container">
            <div
              className="insite-slider-wrapper"
              style={{ transform: getTransform() }}
            >
              {images.map((image, index) => (
                <div key={index} className="insite-slide">
                  <div className="insite-image-wrapper">
                    <img
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      className="insite-image"
                    />
                  </div>

                  <div className="insite-image-content">
                    <h2 className="insite-image-title">{image.title}</h2>
                    <a href="#blog" target="blank"><p className="insite-read-more">
                      Läs mer{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="insite-arrow"
                      />
                    </p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextImage}
            className={`slider-button slider-next-button ${
              isNextButtonDisabled ? "disabled" : ""
            }`}
            disabled={isNextButtonDisabled}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Insite;
