import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Heading } from "../Heading";
import { Overlay } from "../Overlay";
import { FilterInputs } from "./FilterInputs";

type MobileModalFilterTypes = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileModalFilter = ({
  isOpen,
  onClose,
}: MobileModalFilterTypes) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center px-4 sm:px-0 z-40 top-80"
      >
        <div className="relative rounded-2xl shadow-lg w-full sm:w-[500px] text-zinc-950 bg-zinc-950 py-12 px-6 flex flex-col justify-between">
          <button onClick={onClose} className="absolute top-4 right-4">
            <IoClose className="text-zinc-100 w-6 h-6" />
          </button>
          <div>
            <Heading
              as="h2"
              className="text-2xl font-semibold text-zinc-100 mb-4"
              namespace="filters.heading"
            />
            <FilterInputs />
          </div>
        </div>
      </motion.div>
    </Overlay>
  );
};
