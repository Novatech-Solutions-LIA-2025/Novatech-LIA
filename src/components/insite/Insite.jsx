"use client";

import React, { useState } from "react";
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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
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
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="slider-image"
        />
        <button onClick={nextImage} className="slider-button next-button">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Insite;
