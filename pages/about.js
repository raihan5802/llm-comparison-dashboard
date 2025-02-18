import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About - LLM Comparison Dashboard</title>
                <meta name="description" content="Learn about the LLM Comparison Dashboard project" />
            </Head>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">About This Project</h1>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
                        <p className="text-gray-700 mb-4">
                            The LLM Comparison Dashboard is an interactive web application that allows users
                            to compare responses from different Large Language Models (LLMs) side by side.
                            This tool provides insights into how different models respond to the same prompts,
                            their performance metrics, and their unique characteristics.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Currently, the dashboard supports three leading LLMs:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li className="text-gray-700">
                                <span className="font-medium">OpenAI GPT-4</span> - OpenAI's most advanced language model
                            </li>
                            <li className="text-gray-700">
                                <span className="font-medium">Google Gemini Pro</span> - Google's multimodal AI model
                            </li>
                            <li className="text-gray-700">
                                <span className="font-medium">Meta Llama 3</span> - Meta's open-source large language model
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-medium text-lg mb-2">Frontend</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li className="text-gray-700">Next.js</li>
                                    <li className="text-gray-700">React</li>
                                    <li className="text-gray-700">TailwindCSS</li>
                                    <li className="text-gray-700">Chart.js</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg mb-2">Backend</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li className="text-gray-700">Next.js API Routes</li>
                                    <li className="text-gray-700">OpenAI API</li>
                                    <li className="text-gray-700">Google Generative AI API</li>
                                    <li className="text-gray-700">Replicate API (for Llama)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Features</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">
                                    <span className="font-medium">Side-by-side comparison</span> of responses from multiple LLMs
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">
                                    <span className="font-medium">Performance metrics</span> including response time and token usage
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">
                                    <span className="font-medium">Responsive design</span> for desktop and mobile devices
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">
                                    <span className="font-medium">Pre-built prompt suggestions</span> for quick testing
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">About the Developer</h2>
                        <p className="text-gray-700 mb-4">
                            This project was developed by MD Raihan Chowdhury as a portfolio project to demonstrate
                            skills in working with Language Models, frontend development, and API integration.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Feel free to connect with me or check out my other projects:
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/raihan5802"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="www.linkedin.com/in/raihanc7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}