"use client";

import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGoogle,
  faMicrosoft,
  faAmazon,
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faSlack,
  faDropbox,
} from "@fortawesome/free-brands-svg-icons";
import "./colleagues.css";

function Colleagues() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    // Fake API-data
    const fakeApiData = [
      { id: 1, icon: faApple, alt: "Apple" },
      { id: 2, icon: faGoogle, alt: "Google" },
      { id: 3, icon: faMicrosoft, alt: "Microsoft" },
      { id: 4, icon: faAmazon, alt: "Amazon" },
      { id: 5, icon: faFacebook, alt: "Facebook" },
      { id: 6, icon: faTwitter, alt: "Twitter" },
      { id: 7, icon: faLinkedin, alt: "LinkedIn" },
      { id: 8, icon: faGithub, alt: "GitHub" },
      { id: 9, icon: faSlack, alt: "Slack" },
      { id: 10, icon: faDropbox, alt: "Dropbox" },
    ];
    setLogos(fakeApiData);
  }, []);

  return (
    <div className="colleagues-container">
      <div className="colleagues-title-container">
        <h6 className="colleagues-small-title">
          <li className="colleagues-list-highlight"></li>
          Kunder
        </h6>
        <h3 className="colleagues-big-title">
          Våra <span className="colleagues-title-highlight">kollegor</span>{" "}
          genom åren
        </h3>
      </div>
      <div className="colleagues-slider-container">
        <div className="colleagues-slide">
          {logos.map((logo) => (
            <FontAwesomeIcon key={logo.id} icon={logo.icon} alt={logo.alt} />
          ))}
          {logos.map((logo) => (
            <FontAwesomeIcon key={logo.id} icon={logo.icon} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Colleagues;
