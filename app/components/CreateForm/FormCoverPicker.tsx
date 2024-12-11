import { CoverPicker } from "../CoverPicker";

type FormCoverPickerProps = {
  value: string;
  onChange: (value: string) => void;
};

export const FormCoverPicker = ({ value, onChange }: FormCoverPickerProps) => (
  <div className="w-[9rem] h-[14rem] sm:w-[12rem] flex items-center justify-center">
    <CoverPicker name="selectedCover" value={value} onChange={onChange} />
  </div>
);
