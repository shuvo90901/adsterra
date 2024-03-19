"use client"
import React, { useEffect } from 'react';

const Compo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//strewviolently.com/22/c7/78/22c7783e322679a3d3166f06cf257df7.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, []);

  return null; // Since this component doesn't render anything visible, we return null
};

export default Compo;
