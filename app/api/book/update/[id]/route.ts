import { connectToDatabase } from "@/lib/mongoDB/connect";
import Joi from "joi";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const contentSchema = Joi.object({
    content: Joi.string().required()
});

export async function PUT(request: NextRequest) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    if (!id || !ObjectId.isValid(id)) {
        return NextResponse.json({ message: 'Invalid or missing book ID' }, { status: 400 });
    }

    const { content } = await request.json();
    const { error } = contentSchema.validate({ content });

    if (error) {
        console.log("Validation error:", error.details);
        return NextResponse.json({ message: error.details[0].message }, { status: 400 });
    }

    try {
        const db = await connectToDatabase();
        const booksCollection = db.collection('books');

        console.log(`Updating book with ID: ${id}`);
        console.log(`New content: ${content}`);

        const result = await booksCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { content } }
        );

        console.log('Update result:', result);


        if (result.modifiedCount === 0) {
            return NextResponse.json({ message: 'Book not found or no changes made' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Content updated!' }, { status: 200 });
    } catch (err) {
        console.error('Error updating content:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
