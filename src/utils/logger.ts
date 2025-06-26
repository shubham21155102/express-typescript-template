import { createLogger } from 'winston';
import LokiTransport from 'winston-loki';

const options = {
   transports: new LokiTransport({
    host:"https://3100-shubham2115-expresstype-ky9k5tzayzx.ws-us120.gitpod.io",
    labels: { job: 'express-app' },
   })
}

const logger = createLogger(options);

export default logger;
