import React from "react";

type InputFieldType = {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  component?: "input" | "textarea";
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({
  id,
  onChange,
  placeholder,
  label,
  component = "input",
  ...rest
}: InputFieldType) => {
  const Component = component === "textarea" ? "textarea" : "input";
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-neutral-100 text-sm font-semibold mb-2 uppercase"
      >
        {label}
      </label>
      {React.createElement(Component, {
        ...rest,
        id,
        onChange,
        placeholder,
        className:
          "w-full px-3 py-2 border border-gray-300 rounded-lg bg-neutral-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950 resize-none",
      })}
    </div>
  );
};
