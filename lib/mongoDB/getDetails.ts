import { Book } from '@/types/book';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from './connect';

export async function getBookDetails(bookId: string): Promise<Book | null> {
    try {
        const db = await connectToDatabase();

        const booksCollection = db.collection('books');

        const book = await booksCollection.findOne({ _id: new ObjectId(bookId) });

        if (!book) return null;

        return {
            _id: book._id.toString(),
            title: book.title,
            userId: book.userId,
            date: book.date,
            cover: book.cover,
            description: book.description,
            forAdult: book.forAdult,
            genre: book.genre,
            tags: book.tags,
            lang: book.lang,
            content: book.content,
        };
    } catch (error) {
        console.error('Error fetching book details:', error);
        throw new Error('Failed to fetch book details');
    }
}
