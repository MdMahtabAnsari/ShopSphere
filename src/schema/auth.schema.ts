import {z} from 'zod';

const email = z.string({message: 'Email is required'}).email({message: 'Invalid email address'});
// password is required and must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
const password = z.string({message: 'Password is required'}).min(8, {message: 'Password must be at least 8 characters long'}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'});
// name is required and must be at least 2 characters long and contain only letters and spaces
const name = z.string({message: 'Name is required'}).min(2, {message: 'Name must be at least 2 characters long'}).regex(/^[a-zA-Z\s]+$/, {message: 'Name must contain only letters and spaces'});
// phone is required and must be only numbers and have a length of 10
const phone = z.string({message: 'Phone is required'}).length(10, {message: 'Phone must be 10 digits long'}).regex(/^[0-9]+$/, {message: 'Phone must contain only numbers'});


export const registerSchema = z.object({
    email,
    password,
    name,
    phone
});

export const loginSchema = z.object({
    email,
    password
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;