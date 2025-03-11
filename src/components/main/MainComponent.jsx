import React from "react";
import SmallCard from "../cards/smallCard/SmallCard";
import "./mainComponent.css";
import Colleagues from "../colleagues/Colleagues";


function MainComponent() {
  return (
    <>
      <div className="main-container">
      <SmallCard  title="Rådgivning och Workshops" text="Från tanke till verklighet - strategisk planering i
samarbete med kund" smBackgroundClass="smallbg1" smIconClass="smallicon1"/>
      <Colleagues></Colleagues>
      </div>
      
    </>
  );
}

export default MainComponent;
