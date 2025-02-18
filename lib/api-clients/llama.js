export async function fetchLlamaResponse(prompt) {
    try {
        const response = await fetch('/api/llama', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Error(`Llama API error: ${response.status}`);
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error fetching from Llama:', error);
        throw error;
    }
}