import React from 'react'
import Header from "../components/header/Header";
import MainComponent from '../components/main/MainComponent';
import Colleagues from '../components/colleagues/Colleagues';
import Services from '../components/ourServices/Services';
import InputField from '../components/inputField/InputField';
import Insite from '../components/insite/Insite';

function Landing() {
  return (
    <div>
      <Header></Header>
      {/* <MainComponent></MainComponent> */}
      <Colleagues></Colleagues>
      <Services></Services>
      <InputField></InputField>
      <Insite></Insite>
    </div>
  )
}

export default Landing
