export function calculateMetrics(responses, totalTime) {
    // Calculate average response time
    const validResponseTimes = responses
        .filter(r => !r.error && r.responseTime > 0)
        .map(r => r.responseTime);

    const avgResponseTime = validResponseTimes.length > 0
        ? validResponseTimes.reduce((sum, time) => sum + time, 0) / validResponseTimes.length
        : 0;

    // Calculate success rate
    const successRate = (responses.filter(r => !r.error).length / responses.length) * 100;

    // Process individual model metrics
    const modelMetrics = responses.map(response => {
        // Estimate token count based on response length (rough approximation)
        const estimatedTokenCount = Math.round(response.response.length / 4);

        return {
            modelId: response.modelId,
            modelName: response.modelName,
            responseTime: response.responseTime,
            success: !response.error,
            tokenCount: estimatedTokenCount,
            responseLength: response.response.length,
        };
    });

    return {
        totalTime,
        avgResponseTime,
        successRate,
        modelMetrics,
        timestamp: new Date().toISOString(),
    };
}