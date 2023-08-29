import React from 'react';

const ScrollDownArrow = () => {
    return (
        <div className=" bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-8 h-8 border-b-2 border-r-2 transform rotate-45 mx-auto opacity-50"></div>
        </div>
    );
};

export default ScrollDownArrow;