# LLM Comparison Dashboard

![LLM Comparison Dashboard](https://github.com/raihan5802/llm-comparison-dashboard/public/screenshots/dashboard.png)

A powerful, interactive dashboard that allows you to compare responses from multiple Large Language Models (LLMs) side by side. This project was built to demonstrate the different capabilities, response styles, and performance metrics of leading AI language models.

## 🌟 Features

- **Side-by-side comparison** of responses from OpenAI GPT-4, Google Gemini Pro, and Meta's Llama 3
- **Performance metrics** including response time and token usage
- **Response analysis** with sentiment, complexity, and creativity evaluation
- **Visual metrics** with interactive charts and graphs
- **Responsive design** for desktop and mobile devices
- **Pre-built prompt suggestions** for quick testing

## 🛠️ Technologies Used

### Frontend
- Next.js 15+
- React 18
- TailwindCSS
- Chart.js / React-chartjs-2

### Backend
- Next.js API Routes
- OpenAI API
- Google Generative AI API
- Replicate API (for Llama models)

## 📋 Getting Started

### Prerequisites

- Node.js 18.18+ installed
- API keys for:
  - OpenAI
  - Google Generative AI (Gemini)
  - Replicate (for Llama models)

### Installation

1. Clone the repository
```bash
git clone https://github.com/raihan5802/llm-comparison-dashboard.git
cd llm-comparison-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file in the root directory with your API keys:
```
OPENAI_API_KEY=your_openai_api_key
GOOGLE_API_KEY=your_google_api_key
REPLICATE_API_KEY=your_replicate_api_key
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧠 How It Works

1. **Input your prompt**: Type a question or request, or use one of the pre-built suggestions
2. **Compare responses**: The system simultaneously queries multiple LLM APIs
3. **View analysis**: See detailed metrics on response time, content analysis, and more
4. **Explore differences**: Toggle between different views to understand how each model approaches the prompt

## 📊 Performance Considerations

- **API Usage**: This application makes parallel API calls to multiple providers. Be mindful of API usage costs.
- **Response Times**: Llama models accessed through Replicate may have longer response times due to cold starts.
- **Rate Limiting**: Basic rate limiting is implemented to prevent excessive API usage.

## 🔒 Privacy & Security

- No prompts or responses are stored permanently
- All API calls are made server-side to protect your API keys
- No user tracking or analytics beyond standard Vercel deployment analytics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👤 About the Developer

This project was developed by [MD Raihan Chowdhury](https://github.com/raihan5802) as a portfolio project demonstrating expertise in working with Large Language Models, frontend development, and API integration.

## 🙏 Acknowledgements

- [OpenAI](https://openai.com/) for GPT API access
- [Google](https://deepmind.google/technologies/gemini/) for Gemini API access
- [Meta AI](https://ai.meta.com/llama/) for developing Llama and making it accessible
- [Replicate](https://replicate.com/) for hosting Llama models
