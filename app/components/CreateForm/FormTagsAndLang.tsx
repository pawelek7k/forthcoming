import { initialFormData } from ".";
import { Tags } from "../CreateTag";
import { ToggleSwitch } from "../ToggleSwitch";

type FormTagsAndLangProps = {
  formData: typeof initialFormData;
  handleChange: (
    key: keyof typeof initialFormData
  ) => (value: string | string[]) => void;
  t: (key: string) => string;
};

export const FormTagsAndLang = ({
  formData,
  handleChange,
  t,
}: FormTagsAndLangProps) => (
  <>
    <Tags name="tags" value={formData.tags} onChange={handleChange("tags")} />
    <div className="flex gap-2 items-center mb-4 justify-between">
      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium z-0">
        {t("langSwitch")}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-sm">ENG</span>
        <ToggleSwitch
          name="lang"
          value={formData.lang}
          onValue="pl"
          offValue="eng"
          onChange={handleChange("lang")}
        />
        <span className="text-sm">PL</span>
      </div>
    </div>
  </>
);
