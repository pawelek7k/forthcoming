"use client";

import type { Book } from "@/types/book";
import Notiflix from "notiflix";
import { useCallback, useState } from "react";
import { BookItem } from "./BookItem";
import { DetailsBookModal } from "./DetailsBookModal";
import { Heading } from "./Heading";

type RenderBooksType = {
  books: Book[];
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

  const removeBookFromLibrary = useCallback(async (bookId: string) => {
    try {
      const response = await fetch("/api/user/library/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId }),
      });

      if (!response.ok) throw new Error("Failed to remove book");

      Notiflix.Notify.success("Book removed from library");
    } catch (err) {
      Notiflix.Notify.failure("Error removing book");
    }
  }, []);

  return (
    <>
      {books.length === 0 ? (
        <div className="text-center mt-10">
          <Heading as="h3">Ooops... Empty here.</Heading>
        </div>
      ) : (
        <ul className="flex flex-col gap-6 mt-10">
          {books.map((book) => (
            <BookItem
              key={book._id.toString()}
              book={book}
              //   isInLibrary={userLibrary.includes(book._id)}
              onBookClick={handleBookClick}
              //   onRemove={removeBookFromLibrary}
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
