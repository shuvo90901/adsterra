"use client"
// ExternalScripts.tsx

import React, { useEffect } from 'react';

const ExternalScripts: React.FC = () => {
  useEffect(() => {
    const time_wait: number = 0;
    const blackout: number = 0;
    const yaban: number = 0;
    const title: string = "";
    const desc: string = "";

    const script1 = document.createElement('script');
    script1.src = `https://news-zacine.com/code/https-v2.js?uid=179632&site=1222311952&banadu=${yaban}`;
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = `https://news-koxewa.cc/process.js?id=1222311952`;
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // Clean up any resources (if necessary) when component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return null; // Since this component doesn't render anything, returning null
};

export default ExternalScripts;
