import { NextRequest, NextResponse } from "next/server";
import { hash } from "argon2"
import prisma from "@/lib/prisma"
import { registerSchema } from "@/schema/auth.schema";
import { ResponseSchemaType } from "@/schema/api.schema";


export async function POST(req: NextRequest): Promise<NextResponse<ResponseSchemaType>> {
    try {
        const body = await req.json();
        const { email, password, name, phone } = registerSchema.parse(body);
        const hashedPassword = await hash(password);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                phone
            }
        });
        if (!user) {
            return NextResponse.json({
                status: "error",
                message: "User creation failed",
                data: null
            },{status: 500});
        }
        return NextResponse.json({
            status: "success",
            message: "User created successfully",
            data: {
                id: user.id,
                email: user.email,
                name: user.name,
                phone: user.phone,
                role: user.role
            }
        },{status: 201});
    } catch (error) {
        console.error("User creation error:", error);
        return NextResponse.json({
            status: "error",
            message: "User creation failed",
            data: null
        },{status: 500});
    }
}
