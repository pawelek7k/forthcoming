import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Heading } from "../Heading";
import { UserProfile } from "../UserProfile";
import { FilterInputs } from "./FilterInputs";

export const Filter = () => {
  const t = useTranslations("filters");
  return (
    <motion.div
      className="h-screen bg-zinc-950 pt-20 p-6 flex-col flex justify-between z-40"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div>
        <Heading as="h2" className="text-2xl font-semibold text-zinc-100 mb-4">
          {t("heading")}
        </Heading>
        <FilterInputs />
      </div>
      <UserProfile />
    </motion.div>
  );
};
