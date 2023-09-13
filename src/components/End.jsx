import React, { useState } from 'react';

function End() {
  const [easterEggCounter, setEasterEggCounter] = useState(0);

  const handleDuckClick = () => {
    setEasterEggCounter(easterEggCounter + 1);
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center m-4'>
      <div className='mb-8'>
        <div
          className='w-28 h-28 rounded-lg flex justify-center items-center cursor-pointer transition-transform transform-gpu hover:scale-105'
          onClick={handleDuckClick}
        >
          <img
            src='https://media.tenor.com/XclFYuGpS5UAAAAC/dancing-duck.gif'
            alt='Dancing Duck'
            className='w-36 h-auto rounded-lg'
          />
        </div>
      </div>
      <p className='text-white text-xl mb-4 mx-4'>
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? SHOOT A DM.
      </p>

      <p className='text-gray-400 mt-6 text-2xl mb-6'>
        Let's geek out together?
      </p>
      <div className='flex space-x-4'>
        <a href='https://twitter.com/duckwhocodes' target='_blank' rel='noopener noreferrer' className='icon-twitter cursor-pointer transition-transform transform-gpu hover:scale-150'>
        </a>
        <a href='mailto:dakshiegoel@gmail.com' target='_blank' rel='noopener noreferrer' className='icon-mail cursor-pointer transition-transform transform-gpu hover:scale-150'>
        </a>
        <a href='https://www.linkedin.com/in/dakshi-goel/' target='_blank' rel='noopener noreferrer' className='icon-linkedin cursor-pointer transition-transform transform-gpu hover:scale-150'>
        </a>
        <a href='https://www.youtube.com/@dksie3256' target='_blank' rel='noopener noreferrer' className='icon-youtube cursor-pointer transition-transform transform-gpu hover:scale-150'>
        </a>
        <a href='https://duckwhocodes.hashnode.dev/' target='_blank' rel='noopener noreferrer' className='icon-pencil cursor-pointer transition-transform transform-gpu hover:scale-150'>
        </a>
        <a href='https://github.com/Dksie09' target='_blank' rel='noopener noreferrer' className='icon-github cursor-pointer transition-transform transform-gpu hover:scale-150'>
        </a>
      </div>

      <p className='text-gray-400 mt-6 text-xl'>
        You've clicked the easter egg{' '}
        <span className='font-bold text-pink-600'>{easterEggCounter}</span> times!
      </p>
      {/* <p className='text-gray-400'>
        Contact me at: <a href='mailto:dakshiegoel@gmail.com'>dakshiegoel@gmail.com</a>
      </p> */}
    </div>
  );
}

export default End;
