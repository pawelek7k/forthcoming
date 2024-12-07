import { Heading } from "@/app/components/Heading";
import { Loader } from "@/app/components/Loader";
import { RenderBooks } from "@/app/components/RenderBooks";
import { getUserLibrary } from "@/lib/mongoDB/getUserLibrary";
import { redirect } from "@/navigation";
import { Suspense } from "react";

export const metadata = {
  title: "Future - Your Library",
  description: "Future",
};

const LibraryPage = async () => {
  const { books, userLibrary } = await getUserLibrary();

  if (books.length === 0) {
    redirect("/");
    return null;
  }

  return (
    <section>
      <Heading as="h1">Your Library!</Heading>
      <Suspense fallback={<Loader />}>
        <RenderBooks books={books} userLibrary={userLibrary} />
      </Suspense>
    </section>
  );
};

export default LibraryPage;
