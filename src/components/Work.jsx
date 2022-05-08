import React from 'react'
import Sneakerheadz from '../assets/sneakerheadz.PNG'
import SneakerHeadzReact from '../assets/sneakerheadz-react.PNG'
import Storefront from '../assets/storefront.PNG'
import Mifestival from '../assets/mifestival.PNG'
import MemeGenerator from '../assets/memegenerator.PNG'
import FinancialTracker from '../assets/financialtracker.PNG'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2 border-pink-600 text-gray-300'>Projects</p>
                <p className='py-6'>These are some of my projects. Feel free to take a look at the demo site or the code for each of them.</p>
            </div>


           {/* Grid-Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              
               {/* Card Item */}
                <div style={{backgroundImage:`url(${Sneakerheadz})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Vanilla JS
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://sneakerheadz.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/sneakerheadz">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Card Item */}
                <div style={{backgroundImage:`url(${SneakerHeadzReact})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS /Next JS
                            </span>

                            <span className='tracking-wider px-2 pt-4 text-xs'>
                                <span className='flex flex-col'>
                                    <span className='text-center pb-2'>Login to view</span>
                                    <span>Username: jim@home.com</span>
                                    <span>Password: 123456</span>
                           
                                </span>
                                
                            </span>
                        </div>

                        <div className='pt-8 text-center'>
                            <a href="https://sneakerheadz-react.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/sneakerheadz-react">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card Item */}
                <div style={{backgroundImage:`url(${Storefront})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS / Stripe
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://storefront-nextjs.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/storefront-nextjs">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* Card Item */}
                 <div style={{backgroundImage:`url(${Mifestival})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML / CSS
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://mifestival-htmlcss.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/mifestival">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* Card Item */}
                 <div style={{backgroundImage:`url(${MemeGenerator})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://js-meme-generator.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/meme-generator">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                   {/* Card Item */}
                   <div style={{backgroundImage:`url(${FinancialTracker})`}}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://js-financial-tracker.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/jtrampe77/financial-tracker">
                                <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>







            </div>

            

           
        </div>

    </div>
  )
}

export default Work