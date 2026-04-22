import React from 'react'
import Image from 'next/image'
import SmilingMan from '../../../../../../Components/Images/newsmilingman.png'

function Application() {
  return (
    <section className="w-full bg-[#41B349] relative overflow-hidden h-[360px] md:h-[355px]">
      <div className="max-w-[1365px] mx-auto h-full relative px-4 md:px-10">
        <div className="absolute bottom-0 left-2 md:left-20 z-10">
          <Image
            src={SmilingMan}
            alt="Smiling man"
            width={340}
            height={360}
            className="w-[200px] h-[220px] md:w-[340px] md:h-[355px] object-contain object-bottom mix-blend-multiply"
            priority
          />
        </div>

        <div className="h-full flex items-center justify-center md:items-start md:justify-center md:pt-[56px]">
          <h2 className="font-montserrat text-white uppercase font-[700] text-center leading-[1.15] text-[30px] sm:text-[34px] md:text-[36px] md:ml-[120px]">
            Transforming Ideas Into <br />
            Powerful Mobile <br />
            Applications
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Application
