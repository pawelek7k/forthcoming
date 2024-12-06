import { Book } from "@/types/book";

export const filterBooks = (
    books: Book[],
    searchQuery: string,
    selectedGenre: string | null,
    selectedLanguage: string | null,
    forAdult: boolean
): Book[] => {
    if (!searchQuery.trim() && !selectedGenre && !selectedLanguage && !forAdult) {
        return books;
    }

    return books.filter((book: Book) => {
        const matchesQuery = book.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = selectedGenre ? book.genre === selectedGenre : true;
        const matchesLanguage = selectedLanguage ? book.lang === selectedLanguage : true;
        const matchesForAdult = !forAdult || book.forAdult === forAdult;

        return matchesQuery && matchesGenre && matchesLanguage && matchesForAdult;
    });
};
