import {
  setSearchQuery,
  setSelectedGenre,
  setSelectedLanguage,
  toggleForAdult,
} from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { DropdownMenu } from "../Dropdown";
import { InputField } from "../InputField";
import { FilterAdultToggle } from "./FilterAdultToggle";
import { FilterLanguageToggle } from "./FilterLanguageToggle";

export const FilterInputs = () => {
  const dispatch = useDispatch();
  const t = useTranslations("filters");

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
        placeholder={t("search")}
        value={searchQuery}
        label={t("search")}
      />
      <div className="flex justify-between flex-col mt-4 gap-2">
        <DropdownMenu onChange={handleGenreChange} />
        <FilterLanguageToggle />
        <FilterAdultToggle />
      </div>
      <Button onClick={clearFilters} primary={true}>
        {t("clearFilters")}
      </Button>
    </div>
  );
};
