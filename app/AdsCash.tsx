"use client"
// components/AdStartGetScript.js

import { useEffect } from 'react';

const AdsCash = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      aclib.runAutoTag({
          zoneId: 'bf4lqdber9',
      });
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default AdsCash;
