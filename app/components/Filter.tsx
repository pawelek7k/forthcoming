import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { InputField } from "./InputField";

export const Filter = () => {
  return (
    <motion.div
      className="h-screen w-full bg-zinc-950 pt-20 flex flex-col p-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Heading as="h2" className="text-2xl font-semibold text-zinc-100 mb-4">
        Filter
      </Heading>
      <InputField
        id={"filter-title"}
        onChange={undefined}
        placeholder={"Enter title"}
        label={"Enter title"}
      />
    </motion.div>
  );
};
