"use client"
// pages/yourComponent.js

import { useState } from 'react';

export default function YourComponent() {
  const [result, setResult] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: 'Can you please let us know more details about your' }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
