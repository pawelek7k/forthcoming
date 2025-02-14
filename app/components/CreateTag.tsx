import Notiflix from "notiflix";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Tag } from "./Tag";
import { useTranslations } from "next-intl";

type TagType = {
  name: string;
  onChange: (value: string[]) => void;
  value?: string[];
};

export const Tags = ({ name, value = [], onChange }: TagType) => {
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState<string[]>(value);
  const t = useTranslations("global");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue.length <= 2) {
        Notiflix.Notify.warning("Enter a minimum of three characters.");
        return;
      }

      if (words.includes(trimmedValue)) {
        Notiflix.Notify.warning("This word is already added.");
        return;
      }

      const newWords = [...words, trimmedValue];
      setWords(newWords);
      setInputValue("");
      onChange(newWords);
    }
  };

  const handleDelete = (index: number) => {
    const newWords = words.filter((_, i) => i !== index);
    setWords(newWords);
    onChange(newWords);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="tags"
        className="z-0 text-zinc-100 text-sm font-semibold uppercase flex items-center mb-2"
      >
        {t("tags")}
      </label>
      <input
        type="text"
        name={name}
        id="tags"
        placeholder="Split space"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full px-3 py-2 rounded-lg dark:text-neutral-100 dark:bg-rose-950/30 text-gray-900 placeholder-gray-500 focus:outline-none shadow-lg backdrop-blur-md mb-4"
      />
      <input type="hidden" name={name} value={JSON.stringify(words)} />
      <div className="flex gap-2 flex-wrap">
        {words.map((word, index) => (
          <Tag key={index}>
            <span className="text-nowrap">{word}</span>
            <div onClick={() => handleDelete(index)} className="cursor-pointer">
              <RxCross2 />
            </div>
          </Tag>
        ))}
      </div>
    </div>
  );
};
