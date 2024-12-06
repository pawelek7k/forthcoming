"use client";

import { filterBooks } from "@/lib/book/filters";
import type { Book } from "@/types/book";
import { useCallback, useState } from "react";
import { BookItem } from "./BookItem";
import { DetailsBookModal } from "./DetailsBookModal";
import { Heading } from "./Heading";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

type RenderBooksType = {
  books: Book[];
  searchQuery?: string;
  userLibrary?: string[];
};

export const RenderBooks = ({ books, userLibrary = [] }: RenderBooksType) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = useCallback((book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedBook(null);
  }, []);

  const { searchQuery, selectedGenre } = useSelector(
    (state: RootState) => state.books
  );

  const filteredBooks = filterBooks(books, searchQuery, selectedGenre);

  return (
    <>
      {filteredBooks.length === 0 ? (
        <div className="text-center mt-10">
          <Heading as="h3">Ooops... Empty here.</Heading>
        </div>
      ) : (
        <ul className="flex flex-col gap-6 mt-10">
          {filteredBooks.map((book) => (
            <BookItem
              key={book._id.toString()}
              book={book}
              onBookClick={handleBookClick}
              isInLibrary={userLibrary.includes(book._id.toString())}
              // onRemove={removeBookFromLibrary}
            />
          ))}
        </ul>
      )}
      {isModalOpen && (
        <DetailsBookModal
          isOpen={isModalOpen}
          onClose={closeModal}
          book={selectedBook}
        />
      )}
    </>
  );
};
