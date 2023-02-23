import FeatureProduct from "./FeatureProducts";

import Services from "./Services";
import Trusted from "./Truested";

import React from "react";
import HeroSection from "./HeroSection";

const Home = () => {

const data={
  name:"Anshul Store"
}

 return (
 <>
 <HeroSection myData={data}/>
 <FeatureProduct/>
 <Services/>
 <Trusted/>

 </>
 
 );
};

export default Home;

