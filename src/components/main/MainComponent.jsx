import React from "react";
import SmallCard from "../cards/smallCard/SmallCard";
import "./mainComponent.css";

function MainComponent() {
  return (
    <>
      <div className="main-container">
      <SmallCard  title="Rådgivning och Workshops" text="Från tanke till verklighet - strategisk planering i
samarbete med kund" smBackgroundClass="smallbg1" smIconClass="smallicon1"/>
      </div>
    </>
  );
}

export default MainComponent;
