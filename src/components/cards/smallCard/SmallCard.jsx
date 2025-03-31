import React from "react";
import "./smallCard.css";

function SmallCard({ title, text, smBackgroundClass, smIconClass, containerClass  }) {
  return (
    <>
      
        <div className={`small-card-container ${smBackgroundClass} ${containerClass }`}>
          <div className="card-blob-wrapper">
            <div className="card-blob"></div>
            </div>
          <div className="small-card-icon-wrapper">
            <div className={`small-card-icon ${smIconClass}`}></div>
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
          {containerClass === "small-card-container-variant2" && (
            <div className="bottom-border"></div>
          )}
        </div>
      
    </>
  );
}

export default SmallCard;
