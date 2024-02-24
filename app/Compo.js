"use client"
import React, { useEffect } from 'react';

const Compo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//strewviolently.com/77c8371ed207a70e3d12825fed07fe01/invoke.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="adContainer" />;
};

export default Compo;
