
// https://codepen.io/sarahwfox/pen/pNrYGb

import React, { useEffect, useState } from 'react';
import '../App.css';

const MouseTrail = () => {
  const [sparkles, setSparkles] = useState([]);

  const newColour = () => {
    const c = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * (256 - c[1] / 2))];
    c.sort(() => 0.5 - Math.random());
    return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  };

  useEffect(() => {
    const numSparkles = 100;
    const sparklesArray = Array.from({ length: numSparkles }, (_, index) => ({
      id: index,
      x: 0,
      y: 0,
      visible: false,
      color: newColour(),
    }));
    setSparkles(sparklesArray);
  }, []);

  const handleMouseMove = (e) => {
    const { pageX, pageY } = e;
    setSparkles((prevSparkles) =>
      prevSparkles.map((sparkle) => ({
        ...sparkle,
        x: pageX,
        y: pageY,
        visible: true,
      }))
    );
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse-trail-container">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            top: sparkle.y + 'px',
            left: sparkle.x + 'px',
            background: sparkle.color,
            visibility: sparkle.visible ? 'visible' : 'hidden',
          }}
        />
      ))}
      <div className="cursor-trail" />
    </div>
  );
};

export default MouseTrail;
