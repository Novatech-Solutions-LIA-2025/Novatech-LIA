
import React from "react";
import Header from "../components/header/Header";
import Colleagues from "../components/colleagues/Colleagues";
import Services from "../components/ourServices/Services";
import InputField from "../components/inputField/InputField";
import Insite from "../components/insite/Insite";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Colleagues></Colleagues>
      <Services></Services>
      <Insite></Insite>
      <InputField></InputField>
    </>
  );
}
