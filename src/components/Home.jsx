import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'



const Home = () => {

  const [nav, setNav] = useState(false)
  const handleClick =() => setNav(!nav)


  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hey! My name is,</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>John Trampe</h1>
        <h2 className='text-3xl  sm:text-6xl font-bold text-[#8892b0]'>I`m a Junior Web Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I`m` a Web Developer that is willing to showcase the skills I have learned. Designing and developing websites is a passion of mine. I have experience in using HTML, CSS, JS, PHP, React, Next, SQL, and many more that is essential for building websites.</p>

        <div>
          <Link className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 sm:w-[30%] lg:w-[20%]' onClick={handleClick} to="work" smooth={true} duration={500}>View Projects

          <span className=' group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
          </Link>
       
        </div>
      </div>

    </div>
  )
}

export default Home