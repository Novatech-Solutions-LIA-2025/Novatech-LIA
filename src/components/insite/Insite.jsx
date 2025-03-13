"use client";

import React, { useState } from "react";
import "./insite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Insite() {
  const images = [
    { src: "/images/blog1.jpg", title: "Blogginlägg" },
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
    <div className="insite-container">
      <div className="insite-content">
        <h6 className="insite-title">
          <li className="insite-list-highlight"></li>
          Blog
        </h6>

        <h1 className="insite-headline-title">
          <span className="insite-headline-highlight">NovaTech</span>- Insite
          <div className="insite-underscore"></div>
        </h1>
      </div>
      <div className="image-slider">
      <button
          onClick={prevImage}
          className={`slider-button prev-button ${
            isPrevButtonDisabled ? "disabled" : ""
          }`}
          disabled={isPrevButtonDisabled}>
          &lt;
        </button>

        <div className="slider-image-container">
          <div
            className="slider-image-wrapper"
            style={{ transform: getTransform() }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <div className="image-wrapper">
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  className="slider-image"
                />
                </div>
                <div className="image-title">
                  <h2>{image.title}</h2>
                  <p className="read-more">
                  Läs mer <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextImage} className={`slider-button next-button ${
            isNextButtonDisabled ? "disabled" : ""
          }`}
          disabled={isNextButtonDisabled}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Insite;
