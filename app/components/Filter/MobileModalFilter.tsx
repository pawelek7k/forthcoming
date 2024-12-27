import { motion } from "framer-motion";
import { Heading } from "../Heading";
import { Overlay } from "../Overlay";
import { UserProfile } from "../UserProfile";
import { FilterInputs } from "./FilterInputs";

export const MobileModalFilter = () => {
  return (
    <Overlay>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-zinc-100 rounded-2xl shadow-lg w-full sm:w-[500px] text-zinc-950 relative h-96"
      >
        <div>
          <Heading
            as="h2"
            className="text-2xl font-semibold text-zinc-100 mb-4"
            namespace="filters.heading"
          />
          <FilterInputs />
        </div>
        <UserProfile />
      </motion.div>
    </Overlay>
  );
};
