import React from 'react'
import WebDevBanner from '../../_components/services/web-developement/Banner/WebDevBanner'
import Strategy from '../../_components/services/web-developement/Strategy/Strategy'
import Struggling from '../../_components/services/web-developement/Struggling/Struggling'
import TechnoligesWeUse from '../../_components/services/web-developement/TechnoligesWeUse/TechnoligesWeUse'
import HowDoWeResults from '../../_components/services/web-developement/HowDoWeResults/HowDoWeResults'
// import WebDevBanner from '../../_components/services/web-developement/Banner/WebDevBanner'

const page = () => {
  return (
    <div>
      <h1 className='text-center text-[45px] font-bold mt-5'>WEB DEVELOPMENT SERVICES</h1>
      <WebDevBanner/>
      <Strategy/>
      <Struggling/>
      <TechnoligesWeUse/>
      <HowDoWeResults/>
    </div>
  )
}

export default page
