import { Heading } from "@/app/components/Heading";
import { Loader } from "@/app/components/Loader";
import { Section } from "@/app/components/Section";
import { Socials } from "@/app/components/Socials";
import { getBookDetails } from "@/lib/mongoDB/getDetails";
import Image from "next/legacy/image";
import { Suspense } from "react";

export const metadata = {
  title: "Forthcoming - The book you like",
  description: "Read the books you like with your favorite wine and music.",
};

type DetailsType = {
  params: Promise<{ bookId: string }>;
};

const DetailsDynamicPage = async ({ params }: DetailsType) => {
  const { bookId } = await params;

  const book = await getBookDetails(bookId);

  if (!book) return <section>Book not found</section>;

  return (
    <Suspense fallback={<Loader />}>
      <Section className="flex flex-col gap-4">
        <div className="flex flex-col items-center shadow-lg rounded-lg">
          <div className="flex md:p-10 p-4 gap-12 flex-col md:flex-row items-center md:items-start">
            <div>
              <div className="relative overflow-hidden rounded-md md:w-48 md:h-80 w-40 h-60">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <Heading as="h1" className="font-semibold text-xl md:text-3xl">
                {book.title}
              </Heading>
              <p className="text-sm sm:text-base">{book.description}</p>
              <div className="flex gap-10">
                <div className="flex gap-2">
                  <Heading as="h3" namespace="global.adultChecker" />
                  {book.forAdult ? "Yes" : "No"}
                </div>
                <div className="flex gap-2">
                  <Heading as="h3" namespace="global.langSwitch" />
                  {book.lang ? "PL" : "ENG"}
                </div>
              </div>
              <div className="flex gap-2">
                <Heading as="h3" namespace="global.genre" />
                {book.genre}
              </div>
            </div>
          </div>
        </div>
        <Socials />
        <div className="flex md:gap-20 flex-col md:flex-row">
          {book.content && (
            <div>
              <div dangerouslySetInnerHTML={{ __html: book.content }} />
            </div>
          )}
        </div>
      </Section>
    </Suspense>
  );
};

export default DetailsDynamicPage;
