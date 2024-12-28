import { setSelectedLanguage } from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { ToggleSwitch } from "../ToggleSwitch";

export const FilterLanguageToggle = () => {
  const dispatch = useDispatch();
  const t = useTranslations("global");
  const selectedLanguage = useSelector(
    (state: RootState) => state.books.selectedLanguage
  );

  return (
    <div className="flex gap-2 items-center justify-between">
      <p className="text-xs md:text-sm text-zinc-100 font-semibold uppercase">
        {t("langSwitch")}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-xs md:text-sm text-zinc-100">PL</span>
        <ToggleSwitch
          name="languageToggle"
          value={selectedLanguage || "eng"}
          onValue="pl"
          offValue="eng"
          onChange={(value) => dispatch(setSelectedLanguage(value))}
        />
        <span className="text-xs md:text-sm text-zinc-100">ENG</span>
      </div>
    </div>
  );
};
