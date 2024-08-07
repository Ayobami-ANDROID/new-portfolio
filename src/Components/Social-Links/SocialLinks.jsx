import React from 'react'
import {FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF, FaGithub} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <section>
        <div className='textThree flex list-none'>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white cursor-pointer'>
                <a target='_blank' href='https://www.linkedin.com/in/ayobami-ajetunmobi-b25361218/'>
                    <FaLinkedinIn size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                <a target='_blank' href='https://www.instagram.com/ayobami.ajetunmobi/'>
                    <FaInstagram size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                <a target='_blank' href='https://x.com/ayobami_codes'>
                    <FaTwitter size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                <a target='_blank' href='https://web.facebook.com/ayobami.ajetunmobi.3'>
                    <FaFacebookF size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
            <li className='mx-auto my-[8%] duration-300 hover:scale-110 text-white hover:text-purple-600 cursor-pointer'>
                <a target='_blank' href='https://github.com/Ayobami-ANDROID'>
                    <FaGithub size={40} className='border border-white hover:border hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full p-2 animate-bounce'/>
                </a>
            </li>
        </div>
    </section>
  )
}

export default SocialLinks
