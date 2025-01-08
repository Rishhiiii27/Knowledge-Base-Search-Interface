const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const queryKnowledgeBase = async (query, filters) => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-003',
                prompt: `Search through the knowledge base and answer the following query: "${query}" with these filters: ${JSON.stringify(filters)}`,
                max_tokens: 1000,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                }
            }
        );
        return response.data.choices[0].text;
    } catch (error) {
        console.error(error);
        throw new Error('Error querying GPT');
    }
};

module.exports = { queryKnowledgeBase };
