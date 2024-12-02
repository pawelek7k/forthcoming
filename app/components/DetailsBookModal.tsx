import { Book } from "@/types/book";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

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
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-999 dark:bg-zinc-900/50">
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-tl-3xl rounded-br-3xl justify-center w-full md:w-[50rem] dark:bg-black/70"></div>
      </div>
    </>
  );
};
