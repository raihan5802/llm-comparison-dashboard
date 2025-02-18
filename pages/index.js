import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import PromptInput from '../components/dashboard/PromptInput';
import ResponseComparison from '../components/dashboard/ResponseComparison';
import PerformanceMetrics from '../components/dashboard/PerformanceMetrics';
import ModelInfoCards from '../components/dashboard/ModelInfoCards';
import { useComparison } from '../hooks/useComparison';

export default function Dashboard() {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {
        responses,
        metrics,
        models,
        compareModels,
        resetComparison
    } = useComparison();

    const handlePromptSubmit = async (inputPrompt) => {
        if (!inputPrompt.trim()) return;

        setIsLoading(true);
        setPrompt(inputPrompt);

        try {
            await compareModels(inputPrompt);
        } catch (error) {
            console.error('Error comparing models:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setPrompt('');
        resetComparison();
    };

    return (
        <Layout>
            <Head>
                <title>LLM Comparison Dashboard</title>
                <meta name="description" content="Compare responses from GPT, Gemini, and Llama models" />
            </Head>

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">LLM Comparison Dashboard</h1>
                    <p className="text-gray-600">
                        Compare responses from leading LLM models including OpenAI GPT, Google Gemini, and Meta's Llama
                    </p>
                </div>

                {responses.length === 0 && (
                    <div className="mb-12">
                        <ModelInfoCards models={models} />
                    </div>
                )}

                <PromptInput
                    onSubmit={handlePromptSubmit}
                    isLoading={isLoading}
                    onReset={handleReset}
                />

                {prompt && (
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h2 className="text-lg font-medium mb-2">Current Prompt:</h2>
                        <p className="text-gray-800">{prompt}</p>
                    </div>
                )}

                {responses.length > 0 && (
                    <>
                        <ResponseComparison
                            responses={responses}
                            isLoading={isLoading}
                        />

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
                            <PerformanceMetrics metrics={metrics} />
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
}