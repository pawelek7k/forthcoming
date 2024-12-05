
import { Book } from "@/types/book";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "./connect";
import { getUser } from "./getUser";

export async function getUserLibrary(): Promise<{ books: Book[]; userLibrary: string[] }> {
    const user = await getUser();

    if (!user?.library?.length) {
        return { books: [], userLibrary: [] };
    }

    const bookIds = user.library;
    const db = await connectToDatabase();
    const booksCollection = db.collection("books");

    const booksData = await booksCollection
        .find({ _id: { $in: bookIds.map((id: string) => new ObjectId(id)) } })
        .toArray();

    const books = booksData.map((book) => ({
        _id: book._id.toString(),
        title: book.title,
        userId: book.userId,
        cover: book.cover,
        description: book.description,
        forAdult: book.forAdult,
        genre: book.genre,
        tags: book.tags,
        lang: book.lang,
    }));

    return { books, userLibrary: bookIds };
}
