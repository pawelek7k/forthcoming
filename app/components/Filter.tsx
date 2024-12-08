import { motion } from "framer-motion";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputField } from "./InputField";

import {
  setSearchQuery,
  setSelectedGenre,
  setSelectedLanguage,
  toggleForAdult,
} from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { DropdownMenu } from "./Dropdown";
import { ToggleSwitch } from "./ToggleSwitch";
import { UserProfile } from "./UserProfile";

export const Filter = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootState) => state.books.selectedLanguage
  );
  const forAdult = useSelector((state: RootState) => state.books.forAdult);
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
    dispatch(setSelectedLanguage(null));
    dispatch(toggleForAdult());
  };

  return (
    <motion.div
      className="h-screen w-full bg-zinc-950 pt-20 p-6 flex-col flex justify-between"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div>
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
          <div className="flex gap-2 items-center justify-between">
            <Heading as="h4">Language of books</Heading>
            <div className="flex items-center gap-2">
              <span className="text-sm">PL</span>
              <ToggleSwitch
                name="languageToggle"
                value={selectedLanguage || "eng"}
                onValue="pl"
                offValue="eng"
                onChange={(value) => dispatch(setSelectedLanguage(value))}
              />
              <span className="text-sm">ENG</span>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <Heading as="h4">For Adult</Heading>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm">NO</span>
              <ToggleSwitch
                name="forAdultToggle"
                value={forAdult ? "on" : "off"}
                onChange={() => dispatch(toggleForAdult())}
              />
              <span className="text-sm">YES</span>
            </div>
          </div>
        </div>
        <Button onClick={clearFilters} primary={true}>
          Clear Filters
        </Button>
      </div>
      <UserProfile />
    </motion.div>
  );
};
