"use client";

import { fetchBooks } from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { Book } from "@/types/book";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector(
    (state: RootState) => state.books
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Books</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      <ul>
        {books.map((book: Book) => (
          <li key={book._id.toString()}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
