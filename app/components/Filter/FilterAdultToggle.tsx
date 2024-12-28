import { ToggleSwitch } from "../ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { toggleForAdult } from "@/lib/redux/slices/booksSlice";
import { RootState } from "@/lib/redux/store";
import { useTranslations } from "next-intl";

export const FilterAdultToggle = () => {
  const dispatch = useDispatch();
  const t = useTranslations("global");
  const forAdult = useSelector((state: RootState) => state.books.forAdult);

  return (
    <div className="flex items-center justify-between mb-4">
      <p className="text-xs md:text-sm text-zinc-100 font-semibold uppercase">
        {t("adultChecker")}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-xs md:text-sm text-zinc-100 uppercase">
          {t("no")}
        </span>
        <ToggleSwitch
          name="forAdultToggle"
          value={forAdult ? "on" : "off"}
          onChange={() => dispatch(toggleForAdult())}
        />
        <span className="text-xs md:text-sm text-zinc-100 uppercase">
          {t("yes")}
        </span>
      </div>
    </div>
  );
};
