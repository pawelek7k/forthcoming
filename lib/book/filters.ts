import { Book } from "@/types/book";

export const filterBooks = (books: Book[], searchQuery: string, selectedGenre: string | null): Book[] => {
    if (!searchQuery.trim() && !selectedGenre) {
        return books;
    }

    return books.filter((book: Book) => {
        const matchesQuery = book.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = selectedGenre ? book.genre === selectedGenre : true;

        return matchesQuery && matchesGenre;
    });
};
