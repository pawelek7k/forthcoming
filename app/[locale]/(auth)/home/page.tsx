"use client";

import { BookItem } from "@/app/components/BookItem";
import { fetchBooks } from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { Book } from "@/types/book";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Welcome = dynamic(() => import("@/app/components/Welcome"), {
  ssr: false,
  loading: () => null,
});

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

  const email = session?.user?.email ?? "unknown@example.com";
  const username = session?.user?.name ?? email.split("@")[0];

  return (
    <div>
      <Welcome email={email} username={username} />
      {status === "loading" && <p>Loading books...</p>}
      {status === "failed" && <p>{error}</p>}
      <ul className="flex flex-col gap-4">
        {books.map((book: Book) => (
          <BookItem key={book._id.toString()} book={book} />
        ))}
      </ul>
    </div>
  );
}
