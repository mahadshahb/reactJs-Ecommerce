import React from 'react';
import HeroSection from './component/HeroSection';

const About = () => {
  const data = {
    name:"About Us"
  }
  return (
    <HeroSection myData={data}/>
  )
}

export default About
