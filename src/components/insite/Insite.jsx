"use client";

import React, { useState, useEffect } from "react";
import "./insite.css";

function Insite() {
  const images = [
    "/images/blog1.jpg",
    "/images/blog2.jpg",
    "/images/blog3.jpg",
    "/images/blog4.jpg",
    "/images/blog5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const nextImage = () => {
    setSlideDirection("next");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setSlideDirection(null);
    }, 750);
  };

  const prevImage = () => {
    setSlideDirection("prev");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setSlideDirection(null);
    }, 750);
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
        <button onClick={prevImage} className="slider-button prev-button">
          &lt;
        </button>

        <div className="slider-image-container">
          <div
            className="slider-image-wrapper"
            style={{ transform: getTransform() }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            ))}
          </div>
        </div>
        <button onClick={nextImage} className="slider-button next-button">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Insite;
