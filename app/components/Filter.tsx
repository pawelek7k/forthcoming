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
      <DropdownMenu onChange={handleGenreChange} />
      <Button primary={true}>Submit</Button>
    </motion.div>
  );
};
