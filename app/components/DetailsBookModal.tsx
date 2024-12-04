import { Book } from "@/types/book";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";
import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Heading } from "./Heading";
import { Buttons } from "./ModalBtns";
import { Tag } from "./Tag";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  book: Book | null;
};

export const DetailsBookModal = ({ isOpen, onClose, book }: ModalType) => {
  const t = useTranslations("global");
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !book) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 dark:bg-zinc-900/50">
        <div className="bg-white/70 backdrop-blur-md md:p-6 rounded-md justify-center w-full md:w-[50rem] dark:bg-black/70">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-lg font-bold"
          >
            <IoCloseOutline className="w-6 h-6" />
          </button>
          <div className="flex gap-4 flex-col sm:flex-row p-6">
            <div className="flex flex-col gap-4 md:gap-6 px-6 text-nowrap ">
              <Heading as="h2" className="font-semibold text-2xl">
                {book.title}
              </Heading>
              <div className="relative overflow-hidden rounded-md sm:w-48 sm:h-80 w-full h-64 md:self-center">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div>
                <Buttons book={book} />
              </div>
            </div>
            <div className="w-full flex flex-col p-0 justify-center md:py-6 gap-2">
              <Heading as="h5" className="font-semibold">
                {t("description")}:
              </Heading>
              <p className="text-gray-700 dark:text-neutral-100 hidden md:block">
                {book.description}
              </p>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Heading as="h5" className="font-semibold">
                    {t("genre")}:
                  </Heading>
                  <p className="text-gray-700 dark:text-neutral-100 flex">
                    {book.genre}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Heading as="h5" className="font-semibold">
                    {t("adultChecker")}:{" "}
                  </Heading>
                  <p className="text-gray-700 dark:text-neutral-100 flex">
                    {book.forAdult ? t("yes") : t("no")}
                  </p>
                </div>
              </div>
              <Heading as="h5" className="font-semibold">
                {t("tags")}:
              </Heading>
              <ul className="flex flex-wrap gap-2 mt-2">
                {book.tags.map((tag, index) => (
                  <li key={index}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
