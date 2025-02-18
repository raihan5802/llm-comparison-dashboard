import { OpenAI } from 'openai';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt }
            ],
            max_tokens: 1000,
        });

        res.status(200).json({
            response: completion.choices[0].message.content,
            usage: completion.usage,
            model: completion.model
        });
    } catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).json({
            error: 'Failed to fetch response from OpenAI',
            details: error.message
        });
    }
}