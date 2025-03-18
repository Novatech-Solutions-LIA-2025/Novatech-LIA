"use client";

import React, { useEffect } from "react";
import Button from "../button/Button";
import SmallCard from "../cards/smallCard/SmallCard";
import Tools from "../tools/Tools";
import "./header.css";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroContainer = document.querySelector(".hero-container");

      if (heroContainer) {
        // Calculate the new position for the background image
        const verticalPosition = 50 + scrollPosition * 0.1; // Adjust 0.1 to control the speed
        heroContainer.style.backgroundPosition = `center ${verticalPosition}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="oval-gradient"></div>
      <div className="oval-gradient2"></div>
      <div className="oval-gradient3"></div>
      <div className="oval-gradient4"></div>
      <div className="oval-gradient5"></div>

      <header>
        <h1 className="hero-text">
          Växla Upp Med <span className="hero-highlight">Ny Tech</span>
          <br></br>- Framtiden Är Nu
        </h1>
        <div className="button-container">
          <Button label="Begär offert" variant="primary" />
          <Button label="Våra tjänster" variant="secondary" />
        </div>
        <div className="hero-border-shadow">
          <div className="hero-container">
            <p className="hero-subtext">
              Vi arbetar med kraftfulla verktyg och sömlösa integrationer som
              stärker företag världen över.
            </p>
            <div className="tools-container">
              <Tools></Tools>
            </div>
          </div>
          <div className="small-cards-container">
            <SmallCard
              smBackgroundClass="smallbg1"
              smIconClass="smallicon1"
              title="Rådgivning och workshops"
              text="Från tanke till verklighet - strategisk planering i
samarbete med kund"
            />
            <SmallCard
              smBackgroundClass="smallbg1"
              smIconClass="smallicon1"
              title="Rådgivning och workshops"
              text="Från tanke till verklighet - strategisk planering i
samarbete med kund"
            />
            <SmallCard
              smBackgroundClass="smallbg1"
              smIconClass="smallicon1"
              title="Rådgivning och workshops"
              text="Från tanke till verklighet - strategisk planering i
samarbete med kund"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
