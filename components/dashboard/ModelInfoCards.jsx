export default function ModelInfoCards({ models }) {
    if (!models || models.length === 0) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((model) => (
                <div
                    key={model.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                >
                    <div className="bg-gray-50 px-4 py-3 border-b flex items-center">
                        <img
                            src={model.logoUrl}
                            alt={`${model.provider} logo`}
                            className="h-8 w-8 mr-3"
                        />
                        <div>
                            <h3 className="font-semibold text-lg">{model.name}</h3>
                            <p className="text-sm text-gray-500">{model.provider}</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-700 mb-4">{model.description}</p>
                        <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Key Capabilities:</h4>
                            <ul className="space-y-1">
                                {model.id === 'gpt-4' && (
                                    <>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">Advanced reasoning</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">Complex instruction following</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">Nuanced content generation</span>
                                        </li>
                                    </>
                                )}
                                {model.id === 'gemini-pro' && (
                                    <>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">Multimodal understanding</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">Strong code generation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">Factual grounding</span>
                                        </li>
                                    </>
                                )}
                                {model.id === 'llama-3' && (
                                    <>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">Open-source model</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">Efficient deployment</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm">Competitive performance</span>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}