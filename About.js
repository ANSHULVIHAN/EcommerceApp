//import React, { useContext } from 'react'
//import { AppContext } from '../../context/ProductContext'
import { useProductContext } from '../../context/ProductContext';
import HeroSection from '../HeroSection'

const About = () => {
  const {myName}=useProductContext();

  const data={
    name:"Ahan Store"
  }
  return (
    <div>
    {myName}
     <HeroSection myData={data
    }/>
    </div>
  )
}

export default About

