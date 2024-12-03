import { motion } from "framer-motion";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputField } from "./InputField";
import { ToggleSwitch } from "./ToggleSwitch";

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
      <div className="flex items-center gap-2 mb-4">
        <span className="dark:text-neutral-100 text-sm font-medium text-gray-700">
          For adult
        </span>
        <ToggleSwitch
          name="forAdult"
          //   value={filters.forAdult ? "on" : "off"}
          //   onChange={(value) => handleInputChange("forAdult", value === "on")}
        />
      </div>
      <Button primary={true}>Submit</Button>
    </motion.div>
  );
};
