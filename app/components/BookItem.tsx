"use client";

import { Book } from "@/types/book";
import Notiflix from "notiflix";
import { useCallback, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { Cover } from "./Cover";
import { Heading } from "./Heading";

export const BookItem = ({
  book,
  onBookClick,
  isInLibrary,
}: {
  book: Book;
  onBookClick?: (book: Book) => void;
  isInLibrary: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

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
    <li
      key={book._id.toString()}
      className="cursor-pointer flex gap-2 p-2 transition ease-in-out rounded-lg hover:shadow-sm flex-col sm:flex-row hover:bg-zinc-950/30"
      onClick={() => onBookClick && onBookClick(book)}
    >
      <Cover title={book.title} cover={book.cover} />
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="p-2 flex flex-col gap-2">
          <Heading as="h3" className="font-semibold text-xl">
            {book.title}
          </Heading>
          <div className="flex gap-2 font-semibold items-center rounded-full bg-zinc-100 text-zinc-950 md:px-4 w-max text-sm md:text-base px-2">
            <Heading as="h4">For adult:</Heading>
            <span className="text-sm">{book.forAdult ? "YES" : "NO"}</span>
          </div>
          <p className="text-sm md:text-base">{book.description}</p>
        </div>
      </div>
      {isInLibrary && (
        <div
          className="flex items-center justify-center p-4 md:p-12 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button
            onClick={() => removeBookFromLibrary(book._id.toString())}
            className="flex items-center justify-center"
            aria-label="Remove book from library"
          >
            <IoTrashBin className="text-red-500 transition ease-in-out hover:text-rose-950 w-6 h-6" />
          </button>
          {hovered && (
            <div className="absolute top-8 mb-2 px-2 py-1 text-sm bg-zinc-950 rounded-md text-neutral-100">
              Remove from library
            </div>
          )}
        </div>
      )}
    </li>
  );
};
