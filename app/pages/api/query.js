// pages/api/query.js

async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }
  
  export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const data = req.body;
        const result = await query(data);
        res.status(200).json(result);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  