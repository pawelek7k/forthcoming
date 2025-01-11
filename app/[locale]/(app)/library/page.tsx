import { Heading } from "@/app/components/Heading";
import { Loader } from "@/app/components/Loader";
import { RenderBooks } from "@/app/components/RenderBooks";
import { Section } from "@/app/components/Section";
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
    <Section>
      <Heading
        as="h1"
        namespace="headings.library"
        className="text-xl sm:text-3xl text-neutral-100 uppercase font-semibold"
      />
      <Suspense fallback={<Loader />}>
        <RenderBooks books={books} userLibrary={userLibrary} />
      </Suspense>
    </Section>
  );
};

export default LibraryPage;
