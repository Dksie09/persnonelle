import React, { useState, useEffect } from 'react';
import me from '../assets/coolest-caption.png';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import quote from '../assets/quote-icon-6.png';
import unquote from '../assets/quote-icon-9.png';

function Experience() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768); // 768px is the breakpoint for medium screens in Tailwind

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='m-3'>
      <div className='mt-12 mx-20 my-4 '>
        <h1 className='text-5xl font-bold text-pink-600 pb-4'>Work<span className="text-white">.init()</span></h1>
        <span className='text-xl font-semibold mt-6'>Talking about places and people I worked with ♡</span>
      </div>
      <div className='m-4 grid grid-cols-1 md:grid-cols-2'>
        {/* Your content for the two columns can go here */}
      </div>
      <div className="flex flex-col md:flex-row py-10 mb-24">
        <div className="flex-1 px-4 ">
          {isLargeScreen ? (
            <motion.div style={{ scale }}>
              <div className=' pt-10'>
                <img src={me} className='h-auto pl-40' style={{ width: 550 }} />
              </div>
            </motion.div>
          ) : (
            <div className='items-end justify-end mb-10'>
              <img src={me} className='h-auto' style={{ width: 350 }} />
            </div>
          )}
        </div>
        <div className="flex-1 px-4 flex items-center">
          <div className='w-2/3'>
            <h1 className='text-4xl pb-8 text-white'>
              <span className='font-bold text-pink-600'>DevRel</span> — Appwrite
              <span className='text-sm text-gray-600 mx-2'> (Internship)</span>
            </h1>
            <p className='text-base'>
              This role was all about fostering the developer community's growth.
              <span className='opacity-40'> (turns out building bridges between developers and technology is my jam! 🌉)</span>.
            </p>
            <div className='flex my-1 justify-end'>
              <span className='font-bold text-purple-800'> — Remote</span>
            </div>
            <p className='text-base mt-2'>Highlights of my work:
              <ul className='list-disc list-inside'>
                <li className='text-white m-1'>
                  <span className='font-bold text-pink-600'>👉Community meetup</span>: Delivered a hands-on talk on OAuth2 authentication at Appwrite's Delhi meetup.
                  <a href="https://duckwhocodes.hashnode.dev/everything-you-need-to-know-about-oauth" className='relative' target='_blank'>
                    <span className='group font-semibold'> Checkout blog.
                      <span className='absolute w-full h-1 bg-pink-700 bottom-0 left-0 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform'></span>
                    </span>
                  </a>
                </li>
                <li className='text-white m-1'>
                  <span className='font-bold text-pink-600'>👉Documentation</span>: Enhanced Appwrite's OAuth documentation for different providers.
                </li>
                <li className='text-white m-1'>
                  <span className='font-bold text-pink-600'>👉Assistance & tutorials</span>: Created YouTube videos and writing blogs
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
