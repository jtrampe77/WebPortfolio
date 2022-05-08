import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full- h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* Container */}
            <div className='max-w=[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-2 border-pink-600'>About</p>
                </div>

                <div></div>
            
            </div>
            
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Get to know me better. Feel free to look around.</p>
                </div>
                <div>
                    <p>I'm a Junior Web Developer graduate from Northern Alberta Institute of Technology. Over the course of my journey, I`ve learned the fundamentals and advanced concepts for building elegant and responsive websites. I`ve had an experience as a Digital Marketing Intern at UW Insure Brokers, which gave me more in-depth knowledge about marketing websites. I also had the opportunity to work as a Junior Graphic Designer remotely at Wish USA which is located in Los Angeles, California. </p>
                </div>
            </div>

    
        </div>
    </div>
  )
}

export default About