import { Book } from "@/types/book";
import { Cover } from "./Cover";
import { Heading } from "./Heading";

export const BookItem = ({ book }: { book: Book }) => {
  return (
    <>
      <Cover title={book.title} cover={book.cover} />
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="p-2 flex flex-col gap-2">
          <Heading as="h3" className="font-semibold text-xl">
            {book.title}
          </Heading>
          <div className="flex gap-2 font-semibold items-center rounded-full bg-zinc-100 text-zinc-950 px-4 w-max">
            <Heading as="h4">For adult:</Heading>
            <span className="text-sm">{book.forAdult ? "YES" : "NO"}</span>
          </div>
          <p className="text-sm md:text-base">{book.description}</p>
        </div>
      </div>
    </>
  );
};
