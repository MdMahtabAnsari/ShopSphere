import {AppError} from './app.error.js';

export class BadRequestError extends AppError {
    constructor(message: string[] | string) {
        const errorMessage = `invalid fields: ${Array.isArray(message) ? message.join(', ') : message}`;
        super(errorMessage, 400);
    }
}