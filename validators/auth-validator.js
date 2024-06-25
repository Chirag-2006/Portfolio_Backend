const { z } = require('zod');

const LoginSchema = z.object({
    email: z.string({ required_error: 'Email is required' }).trim().email({ message: 'Invalid email address' }),
    password: z.string({ required_error: 'Password is required' }).trim().min(6, { message: 'Password must be at least 6 characters long' }).max(20, { message: 'Password must be at most 20 characters long' }),
});

const SignUpSchema = z.object({
    username: z.string({ required_error: 'Username is required' }).trim().min(3, { message: 'Username must be at least 3 characters long' }).max(20, { message: 'Username must be at most 20 characters long' }),
    email: z.string({ required_error: 'Email is required' }).trim().email({ message: 'Invalid email address' }),
    phone: z.string({ required_error: 'Phone number is required' }).trim().min(10, { message: 'Phone number must be at least 10 characters long' }),
    password: z.string({ required_error: 'Password is required' }).trim().min(6, { message: 'Password must be at least 6 characters long' }).max(20, { message: 'Password must be at most 20 characters long' }),
});




module.exports = { SignUpSchema, LoginSchema };