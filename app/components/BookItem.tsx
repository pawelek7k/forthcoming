import { Book } from "@/types/book";

export const BookItem = ({ book }: { book: Book }) => {
  return (
    <li
      key={book._id.toString()}
      className="cursor-pointer dark:shadow-sm flex gap-2 hover:bg-neutral-100/20 p-2 transition ease-in-out rounded-lg dark:hover:bg-zinc-950/30 hover:shadow-sm flex-col sm:flex-row"
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="p-2 flex flex-col gap-2">
          <p className="text-sm md:text-base">{book.title}</p>
          <p className="text-sm md:text-base">{book.description}</p>
        </div>
      </div>
    </li>
  );
};
