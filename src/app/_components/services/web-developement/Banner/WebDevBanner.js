import React from 'react'
import Eclipse from '../../../../../../Components/Images/webdeveclipse.png'
import WebDevDots from '../../../../../../Components/Images/webdevbannerdots.png'
import WebDevImage from '../../../../../../Components/Images/webdevbannerpic.png'
import Image from 'next/image'
const WebDevBanner = () => {
  return (
    <div className='bg-[#41b349] w-full h-[500px] relative flex items-start py-10 justify-between px-10 md:px-20 overflow-hidden mt-5  '>
      <div className="bg-dots-image   absolute top-0 right-0 ">
        <Image alt='Web Dev Dots' src={WebDevDots} width={1000} height={1000} className=''/>
      </div>
      <div className="left-banner text-white z-50">
        <h1 className='text-[50px] font-[800] leading-[50px]'>WEB <br /> DEVELOPMENT <br /> SERVICES</h1>
        <p className='mt-5'>Build a robust foundation that enhances engagement and supercharges <br /> your digital marketing.</p>
      </div>
      <div className="right-banner">
        <Image alt='Web Dev Image' src={WebDevImage} width={1000} height={1000} className='w-[480px] h-[422px]'/>
      </div>
      <div className="eclipse absolute -left-5 -bottom-15 z-50">
        <Image alt='Eclipse' src={Eclipse} width={1000} height={1000} className='w-[400px] h-[400px] md:w-[700px] md:h-[400px] '/>
      </div>
    </div>
  )
}

export default WebDevBanner
