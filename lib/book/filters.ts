import { Book } from "@/types/book";

export const filterBooks = (books: Book[], searchQuery: string): Book[] => {
    if (!searchQuery.trim()) {
        return books;
    }

    return books.filter((book: Book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
};