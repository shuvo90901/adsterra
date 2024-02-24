"use client"
// components/MyComponent.tsx
import { useEffect } from 'react';

const MyComponent: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('container-2704bdf80d29f960c8cd8aedaa856531');
    if (!container) {
      console.error('Container element not found');
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = '//strewviolently.com/2704bdf80d29f960c8cd8aedaa856531/invoke.js';
    script.setAttribute('data-cfasync', 'false');
    container.appendChild(script);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <div id="container-2704bdf80d29f960c8cd8aedaa856531"></div>;
};

export default MyComponent;
