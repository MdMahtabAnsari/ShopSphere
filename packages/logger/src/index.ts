import { pino } from 'pino';

const isDev = process.env.NODE_ENV !== 'production';

const logger = pino(
    isDev
        ? {
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                    translateTime: 'SYS:standard',
                    // ignore: 'pid,hostname',
                    singleLine: true,
                },
            },
        }
        : {
            formatters: {
                level(label: string) {
                    return { level: label };
                },
            },
            timestamp: pino.stdTimeFunctions.isoTime,
        }
);

export default logger;