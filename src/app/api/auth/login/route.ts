import {NextResponse} from 'next/server';
import prisma from '@/lib/prisma';
import { verify } from 'argon2';
import { loginSchema } from '@/schema/auth.schema';
import { ResponseSchemaType } from '@/schema/api.schema';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse<ResponseSchemaType>> {
    try {
        const body = await req.json();
        const { email, password } = loginSchema.parse(body);
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            return NextResponse.json({
                status: 'fail',
                message: 'Invalid email or password',
                data: null
            }, { status: 401 });
        }
        const isValidPassword = await verify(user.password, password);
        if (!isValidPassword) {
            return NextResponse.json({
                status: 'fail',
                message: 'Invalid email or password',
                data: null
            }, { status: 401 });
        }
    return NextResponse.json({
        status: 'success',
        message: 'Login successful',
        data: {
            id: user.id,
            email: user.email,
            role: user.role,
        }
    }, { status: 200 });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({
            status: 'error',
            message: 'Login failed',
            data: null
        }, { status: 500 });
    }
}