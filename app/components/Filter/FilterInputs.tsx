import { InputField } from "../InputField";
import { DropdownMenu } from "../Dropdown";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  setSelectedGenre,
  setSelectedLanguage,
  toggleForAdult,
} from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { FilterLanguageToggle } from "./FilterLanguageToggle";
import { FilterAdultToggle } from "./FilterAdultToggle";

export const FilterInputs = () => {
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
    dispatch(setSelectedLanguage(null));
    dispatch(toggleForAdult());
  };

  return (
    <div>
      <InputField
        id="filter-title"
        onChange={handleInputChange}
        placeholder="Enter a title"
        value={searchQuery}
        label="Enter a title"
      />
      <div className="flex justify-between flex-col mt-4 gap-2">
        <DropdownMenu onChange={handleGenreChange} />
        <FilterLanguageToggle />
        <FilterAdultToggle />
      </div>
      <Button onClick={clearFilters} primary={true}>
        Clear Filters
      </Button>
    </div>
  );
};
