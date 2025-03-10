import React from "react";
import SmallCard from "../cards/smallCard/SmallCard";
import InputField from "../inputField/InputField";
import Insite from "../insite/Insite";

function MainComponent() {
  return (
    <>
      <div>
        <SmallCard
          title="Rådgivning och Workshops"
          text="Från tanke till verklighet - strategisk planering i
samarbete med kund 1"
          backgroundClass="smallbg1"
        />
      </div>

      <Insite></Insite>
      <InputField></InputField>
    </>
  );
}

export default MainComponent;
