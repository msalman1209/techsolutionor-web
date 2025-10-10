import React from 'react'

const TechnoligesWeUse = () => {
    const technologies = [
        {title: 'HTML', desc: 'The standard markup language used to create and structure web pages, defining the content and layout of a website. It forms the backbone of any web page and integrates with CSS and JavaScript.'},
        {title: 'Css', desc: 'CSS (Cascading Style Sheets) is a language used to style HTML documents, controlling layout, colors, fonts, and the overall visual appearance of web pages, ensuring responsive design.'},
        {title: 'JavaScript', desc: 'A versatile scripting language used to create interactive and dynamic content on web pages. It enables client-side scripting and works alongside HTML and CSS to enhance user experiences.'},
        {title: 'Bootstrap', desc: 'Bootstrap is a popular open-source framework for developing responsive and mobile-first websites. It includes pre-designed CSS and JavaScript components, such as grids.'},
        {title: 'Node.js', desc: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling server-side JavaScript execution. It’s designed for building scalable network applications with event-driven.'},
        {title: 'PHP', desc: 'A server-side scripting language designed for web development that can be embedded into HTML. It is widely used for building dynamic, interactive websites and managing server-side processes.'},
        {title: 'Java', desc: 'Java is a versatile, object-oriented language used for building platform-independent applications. It’s known for its portability and performance in enterprise environments, mobile apps, and web services.'},
        {title: 'laravel', desc: 'Laravel is a PHP framework for web development, offering elegant syntax and built-in tools for routing, authentication, and database management, streamlining complex tasks and enhancing productivity.'},
        {title: 'Shopify', desc: 'A robust e-commerce platform that enables users to create and manage online stores. It provides tools for product management, payment processing, and customizable store designs'},
        {title: 'Python', desc: 'Python is a high-level, interpreted language known for its readability and simplicity. It supports multiple paradigms and is widely used in web development, data analysis, and artificial intelligence.'},
        {title: '.net', desc: '.NET is a Microsoft framework for building and running applications on Windows. It supports multiple languages and provides a large library for web, desktop, and mobile applications'},
        {title: 'wordpress', desc: 'A popular content management system (CMS) that allows users to create and manage websites with ease. It offers a wide range of themes and plugins for customization and functionality.'},
    ]
  return (
    <div className='bg-[#262323] w-full text-white mt-20 py-10 px-5'>
      <p className='text-[#40B348] text-[22px] leading-[26px] ml-7'>We are best</p>
      <h1 className='uppercase text-[40px] font-[800] ml-7'>Technologies We Use</h1>
      <div className="cards flex flex-wrap items-center justify-center gap-10 mt-10 ">
        {technologies.map((tech, idx) => (
            <div key={idx} className="card w-[360px] h-[293px] border-2 border-[#40B348] p-4" style={{boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'}}>
                <h1 className='text-[34px] font-[800] text-[#40B348] uppercase'>{tech.title}</h1>
                <p className='text-[#CFCFCF] text-[18px] leading-[27px]'>{tech.desc}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TechnoligesWeUse
