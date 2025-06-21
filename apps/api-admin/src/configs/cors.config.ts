import serverConfig from "./server.config.js";

const corsConfig = {
    origin: serverConfig.CORS_ORIGIN,
    credentials: serverConfig.CORS_CREDENTIALS,
    methods: serverConfig.CORS_METHODS,
    allowedHeaders: serverConfig.CORS_ALLOWED_HEADERS,
};
export default corsConfig;