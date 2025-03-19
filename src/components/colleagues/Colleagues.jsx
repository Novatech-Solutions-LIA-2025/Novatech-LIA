import React from "react";
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
  return (
    <>
    <div id="#colleagues"> 
    <div className="colleagues-container">
      
      <div className="colleagues-title-container">
        <h6 className="colleagues-small-title">
          <li className="colleagues-list-highlight"></li>
          Kunder
        </h6>
        <h3 className="colleagues-big-title">Våra <span className="colleagues-title-highlight">kollegor</span> genom åren</h3>
      </div>
      {/* Placeholders for colleagues */}
      <div className="colleagues-logos"> 
        <FontAwesomeIcon icon={faApple} />
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faMicrosoft} />
        <FontAwesomeIcon icon={faAmazon} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faSlack} />
        <FontAwesomeIcon icon={faDropbox} />
      </div>
    </div>
    </div>
    </>
  );
}

export default Colleagues;
