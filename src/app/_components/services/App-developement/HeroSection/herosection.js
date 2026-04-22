import React from 'react'

function HeroSection() {
  return (
    <section
      className="relative w-full bg-white pt-8 pb-14 md:pt-10 md:pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-[170px] md:top-[255px] bottom-0"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: 'radial-gradient(#d2d2d2 2.2px, transparent 2.2px)',
          backgroundSize: '42px 42px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="bg-[#252122] rounded-[22px] px-3 md:px-4 pt-6 md:pt-[26px] pb-24 md:pb-24 text-center shadow-[0px_8px_20px_rgba(0,0,0,0.18)]">
          <h1 className="font-montserrat text-white uppercase font-[700] leading-[1.03] text-[30px] sm:text-[38px] md:text-[44px]">
            Custom Mobile App Development In Dubai & <br className="hidden md:block" />
            UAE For Businesses Worldwide
          </h1>
        </div>

        <div
          className="relative -mt-14 md:-mt-[72px] mx-auto w-[95%] md:w-[82%] bg-[#41B349] rounded-[18px] px-5 md:px-14 py-8 md:py-14 shadow-[0px_10px_20px_rgba(65,179,73,0.45)]"
          style={{
            backgroundImage: 'radial-gradient(rgba(31,112,35,0.18) 2px, transparent 2px)',
            backgroundSize: '24px 24px',
          }}
        >
          <p className="text-white text-center text-[16px] md:text-[18px] leading-[1.68] md:leading-[1.75] font-[400]">
            We provide custom mobile app development services in Dubai, Abu Dhabi, and across
            the UAE, delivering secure, scalable, and user-focused iOS, Android, and web
            applications. As a leading app development company in the UAE, we work with startups,
            SMEs, and enterprises worldwide. From idea validation to launch and ongoing support,
            our expert developers transform your vision into high-performing digital products built
            to drive business growth, enhance user engagement, and maximize ROI.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
