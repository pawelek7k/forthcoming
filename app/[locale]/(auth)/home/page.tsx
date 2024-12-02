"use client";

import { BookItem } from "@/app/components/BookItem";
import { fetchBooks } from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { Book } from "@/types/book";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const { books, status, error } = useSelector(
    (state: RootState) => state.books
  );

  useEffect(() => {
    if (sessionStatus === "loading") return;
    if (!session) {
      router.push("/");
    }
  }, [session, sessionStatus, router]);

  useEffect(() => {
    if (status === "idle" && session) {
      dispatch(fetchBooks());
    }
  }, [dispatch, status, session]);

  if (sessionStatus === "loading") return <p>Loading session...</p>;

  return (
    <div>
      <h1>Books</h1>
      {status === "loading" && <p>Loading books...</p>}
      {status === "failed" && <p>{error}</p>}
      <ul className="flex flex-col gap-4">
        {books.map((book: Book) => (
          <>
            <BookItem book={book} />
          </>
        ))}
      </ul>
    </div>
  );
}
