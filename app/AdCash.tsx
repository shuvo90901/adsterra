"use client"
// components/AdStartGetScript.js

import React, { useEffect } from 'react';

const AdCash = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      aclib.runBanner({
          zoneId: '8203406',
      });
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default AdCash;
