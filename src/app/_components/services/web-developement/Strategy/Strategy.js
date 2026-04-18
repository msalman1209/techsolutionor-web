import React from 'react'
import StrategyImage from '../../../../../../Components/Images/webdevstra.png'
import Image from 'next/image'
import GreePart from '../../../../../../Components/Images/stragreen.png'

const Strategy = () => {
  return (
    <div className='w-full z-50 mt-10 relative h-[550px] p overflow-hidden flex flex-col md:flex-row items-center justify-between pl-10 md:pl-20 '>
      <div className="left-stra basis-[50%] flex flex-col items-start gap-5 md:gap-10 mt-20">
        <h1 className='text-[45px] font-[700] leading-[45px]'>IS IT TIME FOR A NEW <br /> WEB DEVELOPMENT STRATEGY</h1>
        <p className='text-[15px] leading-[20px] text-justify'>In the past, your approach to web design and development might have been to address issues as they arose, stiching together solutions without a comprehensive strategy. However a piecemeal approach can lead to an unfocused websites that struggles to gain momentum or generate significant results. Without a cohesive strategy, your web presence can become disjointed, failing to effectively communicate your brand’s message or meets the needs of your audience.</p>
      </div>
      <div className="right-stra absolute -right-10 bottom-0">
        <Image alt='Strategy Image' src={StrategyImage} width={1000} height={1000} className='w-[400px] h-[400px] md:w-[350px] md:h-[400px]'/>
      </div>
      <div className="green-part absolute left-0 -bottom-12 z-50">
        <Image alt='Green Part' src={GreePart} width={1000} height={1000} className='w-[200px] h-[200px] md:w-[200px] md:h-[150px] z-50'/>
      </div>
    </div>
  )
}

export default Strategy
