import React from "react";
import HeroSection from "./component/HeroSection";

const Home = () => {
  const data = {
    name:"Online Store"
  }
  return (
    <HeroSection myData={data}/>
  );
};

export default Home;
