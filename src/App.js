import React from 'react';
import './App.css';

import "@appwrite.io/pink";
import "@appwrite.io/pink-icons";
import IntroPage from './components/IntroPage';
import Skills from './components/Skills';
import UpButton from './components/UpButton';
import { motion, useScroll, useSpring, useTransform, useViewportScroll } from "framer-motion";
import MouseTrail from './components/MouseTrail';
import Experience from './components/Experience';
import End from './components/End';
import Projects from './components/Projects';


function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { scrollYProgress: scrollYProgresss } = useViewportScroll(); // Fixed the variable name here
  return (<div>
    <div className='h-screen'>
      <IntroPage />
    </div>
    <Skills />
    <motion.div
      style={{ scale: scrollYProgress }}
    ><hr className='w-48 h-1 mx-auto my-20 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700' />
    </motion.div>
    <Projects />
    <motion.div
      style={{ scale: scrollYProgress }}
    ><hr className='w-48 h-1 mx-auto mb-10 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700' />
    </motion.div>
    <Experience />
    <motion.div
      style={{ scale: scrollYProgress }}
    ><hr className='w-48 h-1 mx-auto mb-10 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700' />
    </motion.div>
    <End />
    <UpButton />
  </div>
  );
}

export default App;
