import { useState } from 'react';

export default function PromptInput({ onSubmit, isLoading, onReset }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue);
        }
    };

    const handleReset = () => {
        setInputValue('');
        onReset();
    };

    const promptSuggestions = [
        "Explain quantum computing in simple terms",
        "Write a short poem about artificial intelligence",
        "Compare and contrast renewable energy sources",
        "Provide a step-by-step guide to make sourdough bread",
        "Explain the concept of blockchain to a 10-year-old"
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                        Enter your prompt
                    </label>
                    <textarea
                        id="prompt"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your prompt here..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
                        disabled={isLoading}
                    />
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                    {promptSuggestions.map((suggestion, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setInputValue(suggestion)}
                            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-2 rounded transition-colors"
                            disabled={isLoading}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>

                <div className="flex space-x-4">
                    <button
                        type="submit"
                        disabled={isLoading || !inputValue.trim()}
                        className={`px-4 py-2 rounded-md text-white font-medium flex items-center justify-center min-w-[120px] transition-colors ${isLoading || !inputValue.trim()
                                ? 'bg-blue-300 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Comparing...
                            </>
                        ) : (
                            'Compare Models'
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                        disabled={isLoading}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}