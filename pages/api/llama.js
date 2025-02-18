export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        // Using Replicate API to access Llama models
        const response = await fetch('https://api.replicate.com/v1/predictions', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.REPLICATE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                version: "meta/llama-3-8b-instruct:ccd51e490cf38f45b87c87825a2b0dabe0e9d6d43a64292c87bf2f4f5f279d6b",
                input: {
                    prompt: `<|user|>\n${prompt}\n<|assistant|>`,
                    system_prompt: "You are a helpful assistant.",
                    max_tokens: 1000,
                    temperature: 0.7,
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Replicate API error: ${response.status}`);
        }

        const prediction = await response.json();

        // Replicate returns a URL to poll for results
        const pollUrl = prediction.urls.get;
        const result = await pollReplicate(pollUrl);

        res.status(200).json({
            response: result.output.join(''),
            model: "meta/llama-3-8b-instruct"
        });
    } catch (error) {
        console.error('Llama API error:', error);
        res.status(500).json({
            error: 'Failed to fetch response from Llama',
            details: error.message
        });
    }
}

// Helper function to poll Replicate API for results
async function pollReplicate(url, maxAttempts = 10, delay = 1000) {
    let attempts = 0;

    while (attempts < maxAttempts) {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Token ${process.env.REPLICATE_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Polling error: ${response.status}`);
        }

        const result = await response.json();

        if (result.status === 'succeeded') {
            return result;
        } else if (result.status === 'failed') {
            throw new Error('Prediction failed');
        }

        // Wait before polling again
        await new Promise(resolve => setTimeout(resolve, delay));
        attempts++;
        // Increase delay with each attempt (exponential backoff)
        delay *= 1.5;
    }

    throw new Error('Polling timed out');
}