"use client";

import React, { useState, useRef, useEffect } from "react";
import "./insite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Insite() {
  const images = [
    // Temporära bilder
    { src: "/images/blog1.jpg", title: "Våra senaste inlägg" },
    { src: "/images/blog2.jpg", title: "Blogginlägg" },
    { src: "/images/blog3.jpg", title: "Blogginlägg" },
    { src: "/images/blog4.jpg", title: "Blogginlägg" },
    { src: "/images/blog5.jpg", title: "Blogginlägg" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timeoutRef = useRef(null); // För att förhindra dubbelklick buggar

  // Minimum swipe distance to trigger slide change
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1400);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const onTouchStart = (e) => {
    if (!isMobile && !isTablet) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!isMobile && !isTablet) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobile && !isTablet) return;
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const nextImage = () => {
    if (currentImageIndex >= images.length - 1) return; // Stanna på sista bilden

    clearTimeout(timeoutRef.current); // Avbryt pågående animation
    setSlideDirection("next");
    timeoutRef.current = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
      setSlideDirection(null);
    }, 1000);
  };

  const prevImage = () => {
    if (currentImageIndex <= 0) return; // Stanna på första bilden

    clearTimeout(timeoutRef.current); // Avbryt pågående animation
    setSlideDirection("prev");
    timeoutRef.current = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
      setSlideDirection(null);
    }, 1000);
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
          {!isMobile && (
            <button
              onClick={prevImage}
              className={`slider-button prev-button ${
                isPrevButtonDisabled ? "disabled" : ""
              } ${isTablet ? "tablet-button" : ""}`}
              disabled={isPrevButtonDisabled}
            >
              &lt;
            </button>
          )}

          <div className="insite-slider-container">
            <div
              className="insite-slider-wrapper"
              style={{ transform: getTransform() }}
              ref={sliderRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
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
                    <a href="#blog">
                      <p className="insite-read-more">
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

          {!isMobile && (
            <button
              onClick={nextImage}
              className={`slider-button slider-next-button ${
                isNextButtonDisabled ? "disabled" : ""
              } ${isTablet ? "tablet-button" : ""}`}
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
