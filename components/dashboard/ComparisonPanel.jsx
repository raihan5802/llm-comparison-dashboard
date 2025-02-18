import { useState } from 'react';

export default function ComparisonPanel({ responses, metrics }) {
    const [selectedFeature, setSelectedFeature] = useState('sentiment');

    // This is a simplified analysis just for demonstration
    // In a real app, you'd use NLP libraries or API calls
    const analyzeResponses = () => {
        if (!responses || responses.length === 0) return null;

        const result = {
            sentiment: {},
            complexity: {},
            creativity: {},
            similarities: []
        };

        // Basic sentiment analysis (very simplified)
        responses.forEach(response => {
            const text = response.response.toLowerCase();
            let score = 0;

            // Positive indicators
            const positiveWords = ['good', 'great', 'excellent', 'positive', 'wonderful', 'happy', 'best'];
            positiveWords.forEach(word => {
                if (text.includes(word)) score += 1;
            });

            // Negative indicators
            const negativeWords = ['bad', 'poor', 'negative', 'terrible', 'unfortunate', 'worst'];
            negativeWords.forEach(word => {
                if (text.includes(word)) score -= 1;
            });

            result.sentiment[response.modelId] = {
                score,
                interpretation: score > 0 ? 'Positive' : score < 0 ? 'Negative' : 'Neutral'
            };

            // Simple text complexity
            result.complexity[response.modelId] = {
                score: Math.round((response.response.length / 100) * 10) / 10,
                avgWordLength: calculateAvgWordLength(response.response),
                sentences: countSentences(response.response)
            };

            // Creativity (based on unique words ratio)
            const uniqueWordsRatio = calculateUniqueWordRatio(response.response);
            result.creativity[response.modelId] = {
                score: Math.round(uniqueWordsRatio * 100) / 100,
                interpretation: getCreativityLevel(uniqueWordsRatio)
            };
        });

        // Find common phrases/similarities
        if (responses.length > 1) {
            // This is very simplified - would use more sophisticated algorithms in production
            const words1 = responses[0].response.toLowerCase().split(/\W+/);
            const words2 = responses[1].response.toLowerCase().split(/\W+/);

            const commonWords = words1.filter(word =>
                word.length > 4 && words2.includes(word)
            );

            result.similarities = Array.from(new Set(commonWords)).slice(0, 10);
        }

        return result;
    };

    // Helper functions
    const calculateAvgWordLength = (text) => {
        const words = text.split(/\s+/);
        const totalLength = words.reduce((sum, word) => sum + word.length, 0);
        return Math.round((totalLength / words.length) * 10) / 10;
    };

    const countSentences = (text) => {
        return text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    };

    const calculateUniqueWordRatio = (text) => {
        const words = text.toLowerCase().split(/\W+/).filter(w => w.length > 0);
        const uniqueWords = new Set(words);
        return uniqueWords.size / words.length;
    };

    const getCreativityLevel = (ratio) => {
        if (ratio > 0.7) return 'High';
        if (ratio > 0.5) return 'Medium';
        return 'Low';
    };

    const analysis = analyzeResponses();
    if (!analysis) return null;

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Response Analysis</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex border-b">
                    <button
                        onClick={() => setSelectedFeature('sentiment')}
                        className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${selectedFeature === 'sentiment'
                                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        Sentiment
                    </button>
                    <button
                        onClick={() => setSelectedFeature('complexity')}
                        className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${selectedFeature === 'complexity'
                                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        Complexity
                    </button>
                    <button
                        onClick={() => setSelectedFeature('creativity')}
                        className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${selectedFeature === 'creativity'
                                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        Creativity
                    </button>
                    <button
                        onClick={() => setSelectedFeature('similarities')}
                        className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${selectedFeature === 'similarities'
                                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        Similarities
                    </button>
                </div>

                <div className="p-6">
                    {selectedFeature === 'sentiment' && (
                        <div>
                            <p className="text-gray-600 mb-4">
                                Basic sentiment analysis of each model's response:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {responses.map(response => (
                                    <div key={response.modelId} className="border rounded-lg p-4">
                                        <div className="flex items-center mb-3">
                                            <img
                                                src={response.logoUrl}
                                                alt={`${response.provider} logo`}
                                                className="h-6 w-6 mr-2"
                                            />
                                            <h3 className="font-medium">{response.modelName}</h3>
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-gray-600">Sentiment: </span>
                                            <span className={`font-medium ${analysis.sentiment[response.modelId].interpretation === 'Positive'
                                                    ? 'text-green-600'
                                                    : analysis.sentiment[response.modelId].interpretation === 'Negative'
                                                        ? 'text-red-600'
                                                        : 'text-gray-600'
                                                }`}>
                                                {analysis.sentiment[response.modelId].interpretation}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Score: </span>
                                            <span className="font-medium">{analysis.sentiment[response.modelId].score}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 bg-gray-50 p-4 rounded-lg text-sm text-gray-500">
                                <p>
                                    <strong>Note:</strong> This is a simplified sentiment analysis for demonstration
                                    purposes. It counts positive and negative words to estimate sentiment.
                                    A production application would use more sophisticated NLP techniques or specialized APIs.
                                </p>
                            </div>
                        </div>
                    )}

                    {selectedFeature === 'complexity' && (
                        <div>
                            <p className="text-gray-600 mb-4">
                                Analysis of response complexity:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {responses.map(response => (
                                    <div key={response.modelId} className="border rounded-lg p-4">
                                        <div className="flex items-center mb-3">
                                            <img
                                                src={response.logoUrl}
                                                alt={`${response.provider} logo`}
                                                className="h-6 w-6 mr-2"
                                            />
                                            <h3 className="font-medium">{response.modelName}</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <div>
                                                <span className="text-gray-600">Length Score: </span>
                                                <span className="font-medium">{analysis.complexity[response.modelId].score}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Avg Word Length: </span>
                                                <span className="font-medium">{analysis.complexity[response.modelId].avgWordLength}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Sentences: </span>
                                                <span className="font-medium">{analysis.complexity[response.modelId].sentences}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedFeature === 'creativity' && (
                        <div>
                            <p className="text-gray-600 mb-4">
                                Creativity assessment based on vocabulary diversity:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {responses.map(response => (
                                    <div key={response.modelId} className="border rounded-lg p-4">
                                        <div className="flex items-center mb-3">
                                            <img
                                                src={response.logoUrl}
                                                alt={`${response.provider} logo`}
                                                className="h-6 w-6 mr-2"
                                            />
                                            <h3 className="font-medium">{response.modelName}</h3>
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-gray-600">Creativity Level: </span>
                                            <span className={`font-medium ${analysis.creativity[response.modelId].interpretation === 'High'
                                                    ? 'text-purple-600'
                                                    : analysis.creativity[response.modelId].interpretation === 'Medium'
                                                        ? 'text-blue-600'
                                                        : 'text-gray-600'
                                                }`}>
                                                {analysis.creativity[response.modelId].interpretation}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Unique Word Ratio: </span>
                                            <span className="font-medium">{analysis.creativity[response.modelId].score}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 bg-gray-50 p-4 rounded-lg text-sm text-gray-500">
                                <p>
                                    <strong>Note:</strong> Creativity is measured by the ratio of unique words to total words.
                                    This is a simplified approach to estimate lexical diversity.
                                </p>
                            </div>
                        </div>
                    )}

                    {selectedFeature === 'similarities' && (
                        <div>
                            <p className="text-gray-600 mb-4">
                                Common themes and vocabulary across responses:
                            </p>
                            {analysis.similarities.length > 0 ? (
                                <div>
                                    <h3 className="font-medium mb-3">Common significant words:</h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {analysis.similarities.map((word, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                {word}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">
                                    No significant common vocabulary detected between responses.
                                </p>
                            )}
                            <div className="mt-6 bg-gray-50 p-4 rounded-lg text-sm text-gray-500">
                                <p>
                                    <strong>Note:</strong> This analysis looks for common significant words between responses.
                                    A more sophisticated analysis would detect common phrases, themes, and semantic similarities.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}