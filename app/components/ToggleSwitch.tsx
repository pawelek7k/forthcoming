import { useEffect, useState } from "react";

type ToggleSwitchType = {
  name: string;
  onChange: (value: string) => void;
  value?: string;
  onValue?: string;
  offValue?: string;
};

export const ToggleSwitch = ({
  name,
  value = "off",
  onChange,
  onValue = "on",
  offValue = "off",
}: ToggleSwitchType) => {
  const [checked, setChecked] = useState(value === onValue);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked ? onValue : offValue);
  };

  useEffect(() => {
    setChecked(value === onValue);
  }, [value, onValue]);

  return (
    <div className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={name}
        className="sr-only"
        checked={checked}
        onChange={handleChange}
        aria-checked={checked}
        role="switch"
      />
      <label
        htmlFor={name}
        className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out cursor-pointer ${
          checked ? "bg-rose-950" : "bg-black/50"
        }`}
        aria-label="Toggle switch"
      >
        <div
          className={`w-4 h-4 bg-neutral-100 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
          onClick={handleChange}
        />
      </label>
    </div>
  );
};
