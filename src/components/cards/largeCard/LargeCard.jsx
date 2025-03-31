import React from "react";
import "./largeCard.css";

function LargeCard({
  title,
  text,
  width,
  lgBackgroundClass,
  isSplitLayout,
  lgIconClass,
  imageUrl,
}) {
  return (
    <div
      className={`lg-card-container ${lgBackgroundClass}`}
      style={{ width: width }} //  Set width of card
    >
      <div className="text-section">
        {lgIconClass && (
          <>
            <div className="lg-blur-effect"></div>
            <div className={`lg-icon-container ${lgIconClass}`}></div>
          </>
        )}

        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      {isSplitLayout && ( //  If isSplitLayout = true then show .image-section
        <div
          className="image-section"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      )}
    </div>
  );
}

export default LargeCard;
