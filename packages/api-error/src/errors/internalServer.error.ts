import {AppError} from "./app.error.js";

export class InternalServerError extends AppError {
    constructor(message: string|null = null) {
        super(message || 'Internal server error', 500);
    }
}