"use client";

import { Loader } from "@/app/components/Loader";
import { RenderBooks } from "@/app/components/RenderBooks";
import { fetchBooks } from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { useRouter } from "@/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Welcome = dynamic(() => import("@/app/components/Welcome"), {
  ssr: false,
  loading: () => <Loader />,
});

const HomePage = () => {
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

  if (sessionStatus === "loading") return <Loader />;

  const email = session?.user?.email ?? "unknown@example.com";
  const username = session?.user?.name ?? email.split("@")[0];

  return (
    <>
      <Welcome email={email} username={username} />
      {status === "loading" && <Loader />}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && <RenderBooks books={books} />}
    </>
  );
};

export default HomePage;
