import { initialFormData } from ".";
import { DropdownMenu } from "../Dropdown";
import { ToggleSwitch } from "../ToggleSwitch";

type FormOptionsProps = {
  formData: typeof initialFormData;
  handleChange: (
    key: keyof typeof initialFormData
  ) => (value: string | boolean | string[]) => void;
  t: (key: string) => string;
};

export const FormOptions = ({
  formData,
  handleChange,
  t,
}: FormOptionsProps) => (
  <div className="flex gap-6 items-center justify-between">
    <DropdownMenu
      name="genre"
      value={formData.genre}
      onChange={handleChange("genre")}
    />
    <div className="flex gap-2 items-center justify-center">
      <span className="z-0 text-zinc-100 text-sm font-semibold uppercase flex items-center">
        {t("adultChecker")}
      </span>
      <ToggleSwitch
        name="forAdult"
        value={formData.forAdult ? "on" : "off"}
        onChange={(value) => handleChange("forAdult")(value === "on")}
      />
    </div>
  </div>
);
