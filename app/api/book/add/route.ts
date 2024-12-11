import { authOptions } from '@/lib/authOptions';
import { ArrayGenres } from '@/lib/data/bookGenre';
import { connectToDatabase } from '@/lib/mongoDB/connect';
import Joi from 'joi';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

const validGenres = ArrayGenres.map(genre => genre.name);
const validLanguages = ['pl', 'eng'];

const bookSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    cover: Joi.string().uri().required(),
    description: Joi.string().max(1000).required(),
    forAdult: Joi.boolean().required(),
    genre: Joi.string().valid(...validGenres).required(),
    tags: Joi.array().items(Joi.string().min(1)).required(),
    lang: Joi.string().valid(...validLanguages).required(),
    date: Joi.date().iso().required()
});

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { error, value } = bookSchema.validate(body);

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
        return NextResponse.json({ error: `Internal Server Error ${err}` }, { status: 500 });

    }
}
