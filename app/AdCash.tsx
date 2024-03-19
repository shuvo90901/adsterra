// components/AdStartGetScript.js

import React, { useEffect } from 'react';

const AdCash = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
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

export default AdCash;
