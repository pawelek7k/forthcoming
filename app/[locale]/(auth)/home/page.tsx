"use client";

import { BookItem } from "@/app/components/BookItem";
import { DetailsBookModal as Modal } from "@/app/components/DetailsBookModal";
import { Loader } from "@/app/components/Loader";
import { fetchBooks } from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { Book } from "@/types/book";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Welcome = dynamic(() => import("@/app/components/Welcome"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { books, status, error, searchQuery } = useSelector(
    (state: RootState) => state.books
  );

  const handleBookClick = useCallback((book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedBook(null);
  }, []);

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

  if (sessionStatus === "loading") return <Loader />;

  const filteredBooks = books.filter((book: Book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const email = session?.user?.email ?? "unknown@example.com";
  const username = session?.user?.name ?? email.split("@")[0];

  return (
    <>
      <div>
        <Welcome email={email} username={username} />
        {status === "loading" && <p>Loading books...</p>}
        {status === "failed" && <p>{error}</p>}
        <ul className="flex flex-col gap-4">
          {filteredBooks.map((book: Book) => (
            <BookItem
              key={book._id.toString()}
              book={book}
              onBookClick={handleBookClick}
            />
          ))}
        </ul>
        {filteredBooks.length === 0 && <p>No books found.</p>}
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
      )}
    </>
  );
}
