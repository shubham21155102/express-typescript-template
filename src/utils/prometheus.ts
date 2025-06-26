import client from "prom-client";

const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics({
    register: client.register
});

const reqTimer = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status'],
    buckets: [0.1, 0.5, 1, 2, 5, 10]
});

const totalRequests = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status']       
});

// Register the histogram with the global registry
client.register.registerMetric(reqTimer);
client.register.registerMetric(totalRequests);

export { client, reqTimer, totalRequests };
