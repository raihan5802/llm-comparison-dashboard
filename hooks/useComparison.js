import { useState } from 'react';
import { fetchOpenAIResponse } from '../lib/api-clients/openai';
import { fetchGeminiResponse } from '../lib/api-clients/gemini';
import { fetchLlamaResponse } from '../lib/api-clients/llama';
import { calculateMetrics } from '../lib/utils/metrics';

export function useComparison() {
    const [responses, setResponses] = useState([]);
    const [metrics, setMetrics] = useState({});
    const [history, setHistory] = useState([]);

    const models = [
        {
            id: 'gpt-4',
            name: 'OpenAI GPT-4',
            provider: 'OpenAI',
            description: 'Latest GPT model with advanced reasoning capabilities',
            fetchFunction: fetchOpenAIResponse,
            logoUrl: '/assets/openai-logo.svg',
        },
        {
            id: 'gemini-pro',
            name: 'Google Gemini Pro',
            provider: 'Google',
            description: 'Google\'s multimodal AI model with strong reasoning abilities',
            fetchFunction: fetchGeminiResponse,
            logoUrl: '/assets/gemini-logo.svg',
        },
        {
            id: 'llama-3',
            name: 'Meta Llama 3',
            provider: 'Meta',
            description: 'Open-source LLM with competitive performance',
            fetchFunction: fetchLlamaResponse,
            logoUrl: '/assets/llama-logo.svg',
        }
    ];

    const compareModels = async (prompt) => {
        const startTime = Date.now();

        // Create promise array for all model API calls
        const responsePromises = models.map(model => {
            const modelStartTime = Date.now();

            return model.fetchFunction(prompt)
                .then(responseText => {
                    const responseTime = Date.now() - modelStartTime;

                    return {
                        modelId: model.id,
                        modelName: model.name,
                        provider: model.provider,
                        prompt,
                        response: responseText,
                        responseTime,
                        timestamp: new Date().toISOString(),
                        logoUrl: model.logoUrl
                    };
                })
                .catch(error => {
                    console.error(`Error with ${model.name}:`, error);
                    return {
                        modelId: model.id,
                        modelName: model.name,
                        provider: model.provider,
                        prompt,
                        response: `Error: Could not get response from ${model.name}`,
                        responseTime: 0,
                        error: true,
                        timestamp: new Date().toISOString(),
                        logoUrl: model.logoUrl
                    };
                });
        });

        // Wait for all responses
        const newResponses = await Promise.all(responsePromises);
        setResponses(newResponses);

        // Add to history
        setHistory(prev => [...prev, {
            prompt,
            responses: newResponses,
            timestamp: new Date().toISOString()
        }]);

        // Calculate metrics
        const newMetrics = calculateMetrics(newResponses, Date.now() - startTime);
        setMetrics(newMetrics);

        return newResponses;
    };

    const resetComparison = () => {
        setResponses([]);
        setMetrics({});
    };

    return {
        responses,
        metrics,
        history,
        models,
        compareModels,
        resetComparison
    };
}