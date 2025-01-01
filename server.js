const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files (for frontend)
app.use(express.static('public'));

// Array of prominent languages to limit options (you can expand this as needed)
const prominentLanguages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'ur', name: 'Urdu' },
  { code: 'tr', name: 'Turkish' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'pl', name: 'Polish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' }
];

// Endpoint to get available languages (prominent ones only)
app.get('/languages', (req, res) => {
  res.json(prominentLanguages);
});

// Translation endpoint
app.get('/api/v1/:source/:target/:query', async (req, res) => {
  const { source, target, query } = req.params;
  try {
    const response = await axios.get(`https://lingva.ml/api/v1/${source}/${target}/${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Translation failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
