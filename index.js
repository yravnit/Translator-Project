const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define a route to handle translations
app.get('/translate', async (req, res) => {
    const { source, target, query } = req.query;

    // Validate input
    if (!source || !target || !query) {
        return res.status(400).json({ error: 'Missing parameters: source, target, or query' });
    }

    try {
        // Make API call to Lingva REST API for translation
        const response = await axios.get(`https://lingva.ml/api/v1/${source}/${target}/${query}`);

        // Send the translation result
        res.json({
            translation: response.data.translation,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch translation' });
    }
});

// Define a route to get the available languages
app.get('/languages', async (req, res) => {
    try {
        // Make API call to Lingva REST API for language list
        const response = await axios.get('https://lingva.ml/api/v1/languages');
        
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch languages' });
    }
});

// Define a route for audio translation
app.get('/audio', async (req, res) => {
    const { lang, query } = req.query;

    // Validate input
    if (!lang || !query) {
        return res.status(400).json({ error: 'Missing parameters: lang or query' });
    }

    try {
        // Make API call to Lingva REST API for audio translation
        const audioResponse = await axios.get(`https://lingva.ml/api/v1/audio/${lang}/${query}`);

        // Send the audio data (Uint8Array)
        res.json({
            audio: audioResponse.data.audio,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch audio' });
    }
});

// Define the server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
