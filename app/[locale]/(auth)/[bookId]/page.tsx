import { Heading } from "@/app/components/Heading";
import { Socials } from "@/app/components/login/Socials";
import { Section } from "@/app/components/Section";
import { getBookDetails } from "@/lib/mongoDB/getDetails";
import Image from "next/legacy/image";

type DetailsType = {
  params: { bookId: string };
};

const DetailsDynamicPage = async ({ params }: DetailsType) => {
  const { bookId } = await params;

  const book = await getBookDetails(bookId);

  if (!book) return <section>Book not found</section>;

  return (
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
            <Heading as="h1">{book.title}</Heading>
            <p className="text-sm sm:text-base">{book.description}</p>
            <div className="flex gap-10">
              <Heading as="h3">For Adult:</Heading>{" "}
              {book.forAdult ? "Yes" : "No"}
              <Heading as="h3">Language of the book:</Heading>{" "}
              {book.lang ? "PL" : "ENG"}
            </div>
            <Heading as="h3">Genre: </Heading>
            {book.genre}
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
  );
};

export default DetailsDynamicPage;
