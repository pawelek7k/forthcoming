import { Heading } from "@/app/components/Heading";
import { RenderBooks } from "@/app/components/RenderBooks";
import { Section } from "@/app/components/Section";
import { getUserLibrary as fetchUserLibrary } from "@/lib/mongoDB/getUserLibrary";
import { redirect } from "@/navigation";
import { cache } from "react";

export const metadata = {
  title: "Forthcoming - Your Library",
  description: "Forthcoming",
};

const getUserLibrary = cache(fetchUserLibrary);

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
      <RenderBooks books={books} userLibrary={userLibrary} />
    </Section>
  );
};

export default LibraryPage;
