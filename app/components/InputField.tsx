import React from "react";

type InputFieldType = {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({
  id,
  onChange,
  placeholder,
  label,
  ...rest
}: InputFieldType) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-neutral-100 text-sm font-semibold mb-2 uppercase"
    >
      {label}
    </label>
    <input
      {...rest}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-neutral-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
    />
  </div>
);
