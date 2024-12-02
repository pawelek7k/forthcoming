import { ArrayGenres } from '@/lib/data/bookGenre';
import { connectToDatabase } from '@/lib/mongoDB/connect';
import { schema } from '@/models/book';

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export const validGenres = ArrayGenres.map(genre => genre.name);
export const validLanguages = ['pl', 'eng'];

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { error, value } = schema.validate(body);

    if (error) {
        return NextResponse.json({ message: error.details[0].message }, { status: 400 });
    }

    const data = {
        ...value,
        author: session.user?.name || 'Unknown',
    };

    try {
        const db = await connectToDatabase();
        const booksCollection = db.collection('books');
        const result = await booksCollection.insertOne(data);

        return NextResponse.json(
            { message: 'Book created!', id: result.insertedId.toString() },
            { status: 201 }
        );
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
