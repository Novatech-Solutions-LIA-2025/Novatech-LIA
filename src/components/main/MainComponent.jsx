import React from "react";
import SmallCard from "../cards/smallCard/SmallCard";
import "./mainComponent.css";
import Colleagues from "../colleagues/Colleagues";
import InputField from "../inputField/InputField";
import Insite from "../insite/Insite";
import Services from "../ourServices/Services";


function MainComponent() {
  return (
    <>
      <div className="main-container">
      <SmallCard  title="Rådgivning och Workshops" text="Från tanke till verklighet - strategisk planering i
samarbete med kund" smBackgroundClass="smallbg1" smIconClass="smallicon1"/>
      <Colleagues></Colleagues>
      <Services></Services>
      <Insite></Insite>
      <InputField></InputField>
      </div>
    </>
  );
}

export default MainComponent;
