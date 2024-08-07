import React from 'react'
import './expd.css'

const ExpDisplay = () => {
  return (
    <main className='max-w-[1200px] mx-auto my-[5%] px-4'>
      <section className='flex my-10 flex-col lg:flex-row justify-between items-center'>

        <h1 className='one text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 text-center lg:text-left w-full lg:w-[40%]'>01</h1>

        <div className='w-full md:w-[90%] lg:w-[60%]'>
            <div className='two bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-200 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Co_Lab Apes</h1>
                    <p className='text-[.9rem] text-gray-400 font-mono'>January, 2023 - Present, Tenack, New Jersey, United states</p>
                </div>
                <p className='font-mono text-[1rem] text-center md:text-justify lg:text-justify text-gray-400'>Fullstack Developer</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Collaborated effectively with cross-functional teams, leading requirements gathering, user interface design, and feature-rich 
functionality implementation, resulting in the project's overall success and the delivery of a secure, user-centric platform that 
surpassed expectations. </li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Developed a high-performance landing page using React and Tailwind CSS, resulting in an engaging and responsive user interface 
that improved user engagement and conversion rates. </li>
<li className='list-disc p-2 text-[.9rem] font-mono'>Spearheaded the development of a comprehensive platform, encompassing authentication, Web3 integration, a full-stack 
architecture, and employing React, Tailwind CSS, Redux, and React Hooks to build a scalable, user-friendly application. </li>
<li className='list-disc p-2 text-[.9rem] font-mono'>Strengthened security and enabled secure cryptocurrency transactions by integrating Multisig wallets with Web3. </li>
<li className='list-disc p-2 text-[.9rem] font-mono'> Implemented Redux for streamlined state management, enhancing data flow and user interactions, and utilized React Hooks to 
simplify complex operations, improving code maintainability and development efficiency. </li>
<li className='list-disc p-2 text-[.9rem] font-mono'>reserved new and existing systems for a 30% efficiency increase in vital external webapp, utilizing aws function, Docker, 
Kubernetes e.t.c </li>
                </ul>
            </div>
        </div>

      </section>

      {/* <section className='flex my-10 flex-col lg:flex-row justify-between items-center'>


        <div className='w-full md:w-[90%] lg:w-[60%]'>
            <div className='two bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-200 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Zuri Team, Inc.</h1>
                    <p className='text-[.9rem] text-gray-400 font-mono'>September, 2023 - November, 2023, Kano, Nigeria</p>
                </div>
                <p className='font-mono text-[1rem] text-center md:text-justify lg:text-justify text-gray-400'>Frontend Developer || Internship || Remote</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Developed responsive landing pages in HTML and CSS for various devices.</li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Collaborated with a team of five to design and construct email templates using MJML, ensuring responsive and visually appealing communication materials.</li>
                </ul>
            </div>
        </div>

        <h1 className='one text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 text-center lg:text-right w-full lg:w-[40%]'>02</h1>

      </section> */}



      <section className='flex my-10 flex-col-reverse lg:flex-row justify-between items-center'>

        

        <div className='w-full md:w-[90%] lg:w-[60%]'>
            <div className='three bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-300 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Metridash</h1>
                    <p className='text-[.9rem] text-gray-400 font-mono'>August, 2021 - December, 2022, Chennai, India</p>
                </div>
                <p className='text-[1rem] text-center md:text-justify lg:text-justify text-gray-400 font-mono'>FullStack Developer ||  Remote</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Redesigned the organization's official website download page using HTML, Bootstrap, JS, and Firebase, resulting in a 30% 
increase in page views and downloads. </li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Enhanced the user experience of the staff website profile page by revamping it with Bootstrap, improving the layout, and 
implementing responsive design, leading to a 40% increase in user satisfaction. </li>
<li className='list-disc p-2 text-[.9rem] font-mono'> Developed the Publication Admin Control Panel, streamlining publication management with HTML, CSS, JavaScript, Git, Firebase, 
React, Bootstrap, and GitHub, Node.js, express.js, MongoDB reducing administrative time spent by 50%. </li>
<li className='list-disc p-2 text-[.9rem] font-mono'>Created three web applications (Media Center, Live Chat, and Live Stream) within two weeks, facilitating Bible reading, 
messaging, and live service viewing for over 15,000 worshippers from a centralized platform. </li>
<li className='list-disc p-2 text-[.9rem] font-mono'>Designed a web application to host and share audio recordings of religious preaching. Implemented the front-end using React, 
Tailwind, Git, and GitHub. Hosted the app on GitHub Pages. The application currently serves over 300 users and encompasses 
more than 800 audio files. </li>
                </ul>
            </div>
        </div>

        
        <h1 className='five text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 text-center lg:text-right w-full lg:w-[40%]'>02</h1>
      </section>


      <section className='flex my-10 flex-col lg:flex-row justify-between items-center'>
      <h1 className='four text-[2.2rem] md:text-[2.4rem] lg:text-[4rem] font-mono text-purple-600 w-full lg:w-[40%] text-center lg:text-left'>03</h1>

        <div className='w-full md:w-[90%] lg:w-[60%]'>
            <div className='six bg-zinc-900 p-4 rounded-lg w-full cursor-pointer duration-200 hover:scale-105'>
                <div className='flex flex-col md:flex-row lg:flex-row text-center md:text-justify lg:text-justify justify-between items-center'>
                    <h1 className='text-[1.2rem] font-mono text-purple-500'>Greatsome Innovation Limited</h1>
                    <p className='text-[.9rem] text-gray-400 font-mono'>September, 2020 - September, 2021, futa-south Gate, Nigeria</p>
                </div>
                <p className='text-[1rem] text-center md:text-justify lg:text-justify text-gray-400 font-mono'>Frontend Developer || On-site</p>
                <ul className='py-2 px-2'>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Engineered a centralised platform for private university students to manage their residency needs, serving over 2000+ users and 
maintaining an uptime of 99.98%.</li>
                    <li className='list-disc p-2 text-[.9rem] font-mono'>Maximised user experience by implementing React for seamless integration of new features and updates, and Bootstrap for a 
responsive and visually appealing interface, resulting in a 99.98% up-time and a 3% increase in adoption rate per week. </li>
<li className='list-disc p-2 text-[.9rem] font-mono'>Increased user adoption rate by 3% per week, as measured by success metrics, including the satisfaction level of users (students 
and program administrators), which resulted in referrals and improved efficiency of the residency application process. </li>
<li className='list-disc p-2 text-[.9rem] font-mono'>Monitored user feedback to identify and prioritise necessary updates and enhancements, resulting in a 20% increase in user 
satisfaction. </li>
                </ul>
            </div>
        </div>

       
      </section>

    </main>
  )
}

export default ExpDisplay
