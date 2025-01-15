import { authOptions } from "@/lib/authOptions";
import { connectToDatabase } from "@/lib/mongoDB/connect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json(
                { message: 'You need to be logged in to view books.' },
                { status: 401 }
            );
        }

        const db = await connectToDatabase();
        const books = await db.collection('books').find({}).toArray();

        return NextResponse.json(books, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { error: `Failed to fetch books ${err}` },
            {
                status: 500,
                headers: {
                    "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
                },
            }
        );
    }
}
