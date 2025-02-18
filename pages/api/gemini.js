import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = result.response.text();

        res.status(200).json({
            response,
            model: "gemini-pro"
        });
    } catch (error) {
        console.error('Gemini API error:', error);
        res.status(500).json({
            error: 'Failed to fetch response from Gemini',
            details: error.message
        });
    }
}