import React, {useState} from 'react'
import MyselfImg from '../assets/myself.png'
import {Link} from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'

const About = () => {

    const [contact, setContact] = useState(false)
    const handleClick =() => setContact(!contact)
  return (
    <div name='about' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* Container */}
            <div className='max-w=[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-2 border-pink-600'>About Me</p>
                </div>

                <div></div>
            
            </div>
            
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

                <div>
                    <img src={MyselfImg} alt="John Trampe" />
                </div>
                
                <div>
                    <div className=' text-4xl font-bold mb-4'>
                        <p>Get to know me better. Feel free to look around.</p>
                    </div>
                    <p>I'm a Junior Web Developer graduate from Northern Alberta Institute of Technology. Over the course of my journey, I`ve learned the fundamentals and advanced concepts for building elegant and responsive websites. I`ve had an experience as a Digital Marketing Intern at UW Insure Brokers, which gave me more in-depth knowledge about marketing websites. I also had the opportunity to work as a Junior Graphic Designer remotely at Wish USA which is located in Los Angeles, California. </p>
                   <br />
                    <p>As a recent Junior Web Developer graduate, I plan to pursue my career in Web Development and further enhance my skills through work experience and dedication. Please feel free to contact me if you want to work together.</p>

                    <Link className='group text-white border-2 px-6 py-3 my-8 flex items-center hover:bg-pink-600 hover:border-pink-600 sm:w-[30%] lg:w-[35%]' onClick={handleClick} to="contact" smooth={true} duration={500}>Let`s Talk
                        <span className=' group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </Link>

                </div>
            </div>

    
        </div>
    </div>
  )
}

export default About