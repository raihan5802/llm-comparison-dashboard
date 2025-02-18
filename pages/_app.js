import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="LLM Comparison Dashboard - Compare responses from different language models" />
                <meta name="keywords" content="LLM, GPT, Gemini, Llama, AI, comparison, dashboard" />
                <meta name="author" content="Your Name" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;