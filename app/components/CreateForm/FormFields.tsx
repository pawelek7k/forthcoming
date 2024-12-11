import { initialFormData } from ".";
import { InputField } from "../InputField";

type FormFieldsProps = {
  formData: typeof initialFormData;
  handleChange: (key: keyof typeof initialFormData) => (value: string) => void;
};

export const FormFields = ({ formData, handleChange }: FormFieldsProps) => (
  <div className="flex flex-col gap-4">
    <InputField
      id="title"
      placeholder="Title"
      label="Title"
      value={formData.title}
      onChange={(e) => handleChange("title")(e.target.value)}
    />
    <InputField
      component="textarea"
      id="description"
      placeholder="Description"
      label="Description"
      className="mb-0"
      value={formData.description}
      onChange={(e) => handleChange("description")(e.target.value)}
    />
  </div>
);
