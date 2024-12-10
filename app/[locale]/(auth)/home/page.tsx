"use client";

import { Loader } from "@/app/components/Loader";
import { RenderBooks } from "@/app/components/RenderBooks";
import { Section } from "@/app/components/Section";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchBooks } from "@/lib/redux/slices/booksSlice";
import { useRouter } from "@/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Welcome = dynamic(() => import("@/app/components/Welcome"), {
  ssr: false,
  loading: () => <Loader />,
});

const HomePage = () => {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { books, status, error } = useAppSelector((state) => state.books);

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
    <Section>
      <Welcome email={email} username={username} />
      {status === "loading" && <Loader />}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && <RenderBooks books={books} />}
    </Section>
  );
};

export default HomePage;
