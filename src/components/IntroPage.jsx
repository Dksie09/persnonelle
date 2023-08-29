import React from 'react';
import { motion } from 'framer-motion';
import CodeBox from './CodeBox';
import girlImage from '../assets/girl.png';
import ScrollDownArrow from './ScrollDownArrow';

function IntroPage() {

  const header = "<dakshie />"

  return (
    <>
      <div className='flex items-center justify-center p-32'>
        <a href="#" className='font-pacifico font-bold text-white absolute top-8 right-12 text-3xl'>{header}</a>
        <motion.div className='top-10 w-96 h-96 bg-blue-400 rounded-full filter blur-2xl opacity-50 animate-blob'></motion.div>
        <motion.div className='absolute top-36 w-96 h-96 bg-pink-500 rounded-full filter blur-2xl opacity-50 animate-blob'></motion.div>
        <motion.div className='top-10 w-96 h-96 bg-pink-600 rounded-full filter blur-2xl opacity-50 animate-blob'></motion.div>
        <div className='absolute flex flex-col justify-center px-24'>
          <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" className='w-10' />
          <h3 className='text-4xl text-white'>Hey, I'm</h3>
          <h1 className='text-7xl font-bold text-white'>Dakshi Goel</h1>
          <div className='my-6'></div>
          <CodeBox code='npx hi-dakshi' />

        </div>
      </div>

      <div className='hidden md:block'>
        <img src={girlImage} className='absolute bottom-0 left-0' /></div>

      <ScrollDownArrow />
    </>
  );
}

export default IntroPage;

