import { Book } from "@/types/book";
import { Cover } from "./Cover";
import { Heading } from "./Heading";

export const BookItem = ({ book }: { book: Book }) => {
  return (
    <li
      key={book._id.toString()}
      className="cursor-pointer flex gap-2 p-2 transition ease-in-out rounded-lg hover:shadow-sm flex-col sm:flex-row bg-zinc-900 hover:bg-zinc-800"
    >
      <Cover title={book.title} cover={book.cover} />
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="p-2 flex flex-col gap-2">
          <Heading as="h3" className="font-semibold text-xl">
            {book.title}
          </Heading>
          {book.forAdult ? "yes" : "no"}
          <p className="text-sm md:text-base">{book.description}</p>
        </div>
      </div>
    </li>
  );
};
