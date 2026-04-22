"use client"
import React from 'react'
import HeroSection from '../../_components/services/App-developement/HeroSection/herosection'
import Application from '../../_components/services/App-developement/Applicationsection/Application'
import MobileSection from "../../_components/services/App-developement/MobileApp/MobileApp"
function page() {
  return (

   <> 
    <HeroSection />
    <Application />
    <MobileSection/>
    
    </>
  )
}

export default page
