import React from 'react'

const Struggling = () => {
    const cards = [
        {title: 'Low Organic Traffic and Search Engine', desc: 'If your site is not ranking well for relevant keywords. It can be difficult for your ideal customers to find you and visit your website. We implement SEO best practices in web design to enhance your visibility in search results ensuring your content aligns with what your target audience is searching for.'},
        {title: 'Lackluster User Engagement and Conversation', desc: 'High traffic numbers means little if visitors bounce quickly or dont convert into leads or customers. We focus on optimizing the user experience and aligning yours website content with user intent to keep visitors engaged and encourage them to act.'},
        {title: 'Misalignment With Your Brands Identity', desc: 'If your websites design and functionality no longer represent your brand accurately, its time for a change. We make sure your new website reflects your current brand identity, vision, mission, and goals, making it a true representation of your business in the digital world.'},
        {title: 'A Lack of Qualified Leads', desc: 'Your website must be optimized for the user experience and conversation. If youre struggling to generate leads for your business, web design and development services could help you optimize the user experience and most visitors toward conversion points.'},
    ]
  return (
    <div className='flex flex-col items-center justify-center gap-10 h-[600px] mt-20 z-0'>
      <h1 className='text-center text-[35px] font-[700] leading-[35px]'>IF YOU'RE STRUGGLING IN ANY OF THE <br /> FOLLWING AREAS,TECH SOLUTIONOR'S WEB <br /> DEVELOPMENT SERVICES CAN HELP</h1>
      <div className="cards-struggling flex flex-wrap  gap-10 items-center justify-center ">
        {cards.map((card, idx) => (
            <div key={idx} className="card-struggling w-[572px] h-[235px] flex flex-col items-center justify-start bg-[#262323]" style={{boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '0px 0px 20px 20px'}}  >
                <h1 className='bg-[#41B349] w-full text-white flex items-center justify-center py-3 text-[20px] font-bold'>{card.title}</h1>
                <p className='text-[16px]  p-5 text-white bg-[#262323] font-[400] leading-[28px] text-center h-full' style={{borderRadius: '0px 0px 20px 20px'}}>{card.desc}</p>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Struggling
