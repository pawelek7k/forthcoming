import { motion } from "framer-motion";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputField } from "./InputField";

import {
  setSearchQuery,
  setSelectedGenre,
} from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { DropdownMenu } from "./Dropdown";
import { ToggleSwitch } from "./ToggleSwitch";

export const Filter = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(
    (state: RootState) => state.books.searchQuery
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleGenreChange = (genre: string) => {
    dispatch(setSelectedGenre(genre));
  };

  const clearFilters = () => {
    dispatch(setSearchQuery(""));
    dispatch(setSelectedGenre(null));
  };

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
        id="filter-title"
        onChange={handleInputChange}
        placeholder="Enter title"
        value={searchQuery}
        label="Enter title"
      />
      <div className="flex justify-between flex-col gap-4">
        <DropdownMenu onChange={handleGenreChange} />
        <div className="flex gap-2 items-center">
          <span className="text-sm">PL</span>
          <ToggleSwitch
            name="languageToggle"
            value="pl"
            onValue="pl"
            offValue="eng"
            onChange={(newValue) => console.log("Nowa wartość:", newValue)}
          />
          <span className="text-sm">ENG</span>
        </div>
        <ToggleSwitch
          name="booleanToggle"
          value="false"
          onValue="true"
          offValue="false"
          onChange={(newValue) => console.log("Nowa wartość:", newValue)}
        />
      </div>
      <Button onClick={clearFilters} primary={true}>
        Clear Filters
      </Button>
    </motion.div>
  );
};
