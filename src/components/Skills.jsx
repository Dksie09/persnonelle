import React from 'react';
import list from '../assets/list-of-me.png';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import quote from '../assets/quote-icon-6.png'
import unquote from '../assets/quote-icon-9.png'

function Skills() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className='flex-row m-3 overflow-hidden'>
      <div className='flex items-center justify-center'>
        <motion.div style={{ scale }}>
          <h1 className='text-6xl font-bold text-white px-10 mt-20 pb-4 overflow-hidden'>ABOUT ME🥯</h1>
        </motion.div>
      </div>
      <div className='m-4 flex items-center justify-center md:flex-row'>
        <img src={quote}></img><span className='text-xl font-semibold'>A goofy lil girl who's in a love-hate relationship with coding</span><br /><img src={unquote} />
      </div>
      <div class="flex">
        <div class="flex-1 px-4  hidden md:block">
          <div className='items-center justify-center'><img src={list} className='w-100 h-auto' /></div>
        </div>
        <div class="flex-1 p-4 flex items-center">
          <div className='w-2/3'>


            {/* Pursuing every Indian dad's dream - <span className='line-through'>MBA</span> BTech in Computer Science with AI & ML at Bennett University, Noida. <br /> */}

            <p className='text-base'>While my skill lies at the intersection of ML, web and app development<span className='opacity-40'> (guess I can call myself an AI developer)</span>. <br />I'm busy exploring the captivating realms of NLP. <br />Currently, I'm proudly <span className='text-pink-600'>#fangirling over LLMs</span>.
            </p>
            <p className='text-base mt-10 opacity-40'>My vision for the near future holds making it through this semester, build some cool AI tools, and make engaging content for beginners in tech :)
            </p>
            <div className='flex justify-between mt-6'>
              <p className='font-mono'>
                Also, <a href="https://twitter.com/duckwhocodes" className='relative' target='_blank'>
                  <span className='group'>
                    I tweet sometimes.
                    <span className='absolute w-full h-1 bg-pink-700 bottom-0 left-0 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform'></span>
                  </span>
                </a>
              </p>
              <span className='font-bold text-purple-800'> — Delhi, India</span>
            </div>


            <div className='flex gap-2 my-2'>
              <div className='tag'>LLMs</div>
              <div className='tag'>Flutter</div>
              <div className='tag'>NLP</div>
              <div className='tag'>React</div>
              <div className='tag'>Content</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Skills