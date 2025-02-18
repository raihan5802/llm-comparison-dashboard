import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function PerformanceMetrics({ metrics }) {
    const [chartType, setChartType] = useState('responseTime');

    if (!metrics || Object.keys(metrics).length === 0) {
        return null;
    }

    const { modelMetrics } = metrics;

    const chartData = {
        labels: modelMetrics.map(m => m.modelName),
        datasets: [
            {
                label: chartType === 'responseTime' ? 'Response Time (ms)' : 'Token Count',
                data: modelMetrics.map(m =>
                    chartType === 'responseTime' ? m.responseTime : (m.tokenCount || 0)
                ),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                ],
                borderColor: [
                    'rgb(54, 162, 235)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: chartType === 'responseTime' ? 'Response Time Comparison' : 'Token Count Comparison',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Performance Comparison</h3>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setChartType('responseTime')}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${chartType === 'responseTime'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        Response Time
                    </button>
                    <button
                        onClick={() => setChartType('tokenCount')}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${chartType === 'tokenCount'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        Token Count
                    </button>
                </div>
            </div>

            <div className="h-64">
                <Bar data={chartData} options={chartOptions} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-700 mb-1">Total Processing Time</h4>
                    <p className="text-2xl font-semibold">{metrics.totalTime}ms</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-green-700 mb-1">Avg Response Time</h4>
                    <p className="text-2xl font-semibold">{Math.round(metrics.avgResponseTime)}ms</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-purple-700 mb-1">Success Rate</h4>
                    <p className="text-2xl font-semibold">{Math.round(metrics.successRate)}%</p>
                </div>
            </div>
        </div>
    );
}