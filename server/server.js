const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// OpenAI GPT setup
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const gptService = require('./gptService');

// Simulate syncing with Google Drive/OneDrive
const syncDocuments = async () => {
    return [
        { id: 1, title: 'Document 1', content: 'This is the content of document 1.' },
        { id: 2, title: 'Document 2', content: 'This is the content of document 2.' },
    ];
};

app.post('/api/search', async (req, res) => {
    const { query, filters } = req.body;
    try {
        const searchResults = await gptService.queryKnowledgeBase(query, filters);
        res.json(searchResults);
    } catch (error) {
        console.error('Error searching knowledge base:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/api/sync', async (req, res) => {
    const docs = await syncDocuments();
    res.json(docs);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
