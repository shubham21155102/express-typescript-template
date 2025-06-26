import { createLogger } from 'winston';
import LokiTransport from 'winston-loki';

const options = {
   transports: new LokiTransport({
    host:`http://${process.env.SERVER_IP}:3100`,
   //  host:"http://13.126.235.56:3001",
    labels: { job: 'express-app' },
   })
}

const logger = createLogger(options);

export default logger;
