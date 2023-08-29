import React, { useState } from 'react';

const UpButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-8 bg-gray-500 hover:bg-gray-700 text-white p-2 rounded-full shadow-md transition duration-300 ${showButton ? 'visible' : 'invisible'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </button>
  );
};

export default UpButton;
