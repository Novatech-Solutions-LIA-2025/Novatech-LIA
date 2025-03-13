import React from 'react'
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
import "./tools.css";

function tools() {
  return (
    <>
    
       <div className="tools-logos"> {/* Placeholders for colleagues */}
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
    </>
  )
}

export default tools