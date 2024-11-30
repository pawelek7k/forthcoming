
import { connectToDatabase } from "@/lib/mongoDB/connect";
import { hashPassword } from "@/lib/signup/hashPasswd";
import { schema } from "@/models/signup";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { email, username, password } = data;
        const { error, value } = schema.validate({ email, username, password });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        const db = await connectToDatabase();

        const existingUser = await db.collection('users').findOne({ email });

        if (existingUser) {
            return NextResponse.json({ message: 'User already exists.' }, { status: 422 });
        }

        const hashedPassword = await hashPassword(password);

        const result = await db.collection('users').insertOne({
            ...value,
            password: hashedPassword
        });


        return NextResponse.json({ message: 'User created successfully', userId: result.insertedId.toString() }, { status: 201 });

    } catch (e) {
        console.error('Database operation failed:', e);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}