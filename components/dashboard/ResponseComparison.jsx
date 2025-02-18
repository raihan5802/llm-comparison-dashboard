import { useState } from 'react';

export default function ResponseComparison({ responses, isLoading }) {
    const [activeTab, setActiveTab] = useState('side-by-side');

    if (responses.length === 0) {
        return null;
    }

    return (
        <div className="mt-12">
            <div className="border-b border-gray-200 mb-6">
                <h2 className="text-2xl font-bold mb-4">Model Responses</h2>
                <div className="flex space-x-8">
                    <button
                        onClick={() => setActiveTab('side-by-side')}
                        className={`pb-2 font-medium transition-colors ${activeTab === 'side-by-side'
                                ? 'border-b-2 border-blue-600 text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Side by Side
                    </button>
                    <button
                        onClick={() => setActiveTab('tabbed')}
                        className={`pb-2 font-medium transition-colors ${activeTab === 'tabbed'
                                ? 'border-b-2 border-blue-600 text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Tabbed View
                    </button>
                </div>
            </div>

            {activeTab === 'side-by-side' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {responses.map((response) => (
                        <div
                            key={response.modelId}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all h-full"
                        >
                            <div className="bg-gray-50 px-4 py-3 border-b flex items-center">
                                <img
                                    src={response.logoUrl}
                                    alt={`${response.provider} logo`}
                                    className="h-6 w-6 mr-2"
                                />
                                <h3 className="font-semibold">{response.modelName}</h3>
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-gray-500 mb-1">
                                    Response time: {response.responseTime}ms
                                </div>
                                <div className="prose max-w-none">
                                    {response.error ? (
                                        <p className="text-red-500">{response.response}</p>
                                    ) : (
                                        <p>{response.response}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="border-b border-gray-200">
                        <div className="flex">
                            {responses.map((response, index) => (
                                <button
                                    key={response.modelId}
                                    onClick={() => setActiveTab(`model-${index}`)}
                                    className={`py-3 px-6 font-medium transition-colors ${activeTab === `model-${index}`
                                            ? 'border-b-2 border-blue-600 text-blue-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={response.logoUrl}
                                            alt={`${response.provider} logo`}
                                            className="h-5 w-5 mr-2"
                                        />
                                        {response.modelName}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="p-6">
                        {responses.map((response, index) => (
                            <div
                                key={response.modelId}
                                className={activeTab === `model-${index}` ? 'block' : 'hidden'}
                            >
                                <div className="text-sm text-gray-500 mb-2">
                                    Response time: {response.responseTime}ms
                                </div>
                                <div className="prose max-w-none">
                                    {response.error ? (
                                        <p className="text-red-500">{response.response}</p>
                                    ) : (
                                        <p>{response.response}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}