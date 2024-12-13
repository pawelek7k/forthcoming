import { useTranslations } from "next-intl";
import { initialFormData } from ".";
import { InputField } from "../InputField";

type FormFieldsProps = {
  formData: typeof initialFormData;
  handleChange: (key: keyof typeof initialFormData) => (value: string) => void;
};

export const FormFields = ({ formData, handleChange }: FormFieldsProps) => {
  const t = useTranslations("global");
  return (
    <div className="flex flex-col gap-4">
      <InputField
        id="title"
        placeholder={t("title")}
        label={t("title")}
        value={formData.title}
        onChange={(e) => handleChange("title")(e.target.value)}
      />
      <InputField
        component="textarea"
        id="description"
        placeholder={t("description")}
        label={t("description")}
        className="mb-0"
        value={formData.description}
        onChange={(e) => handleChange("description")(e.target.value)}
      />
    </div>
  );
};
