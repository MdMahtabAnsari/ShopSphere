import {pinoHttp} from 'pino-http';
import logger from './index.js';

const httpLogger = pinoHttp({ logger });

export default httpLogger;
