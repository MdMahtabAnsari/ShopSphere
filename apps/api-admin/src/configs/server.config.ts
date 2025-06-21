import {config} from "dotenv";
config();

const serverConfig = {
    PORT: process.env.PORT || 3003,
    CORS_ORIGIN: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
    CORS_CREDENTIALS: process.env.CORS_CREDENTIALS === 'true',
    CORS_METHODS: process.env.CORS_METHODS?.split(',') || ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    CORS_ALLOWED_HEADERS: process.env.CORS_ALLOWED_HEADERS?.split(',') || ['Content-Type', 'Authorization', 'Accept'],
    NODE_ENV: process.env.NODE_ENV || 'development',
}

export default serverConfig;