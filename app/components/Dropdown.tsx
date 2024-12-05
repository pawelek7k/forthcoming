import { ArrayGenres } from "@/lib/data/bookGenre";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

type DropdownType = {
  name?: string;
  value?: string;
  onChange: (value: string) => void;
};

export const DropdownMenu = ({ name, value, onChange }: DropdownType) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(value);
  const bookGenres = ArrayGenres;
  const t = useTranslations("global");

  const handleSelectGenre = (genreName: string) => {
    setSelectedGenre(genreName);
    setIsDropdownOpen(false);
    onChange(genreName);
  };

  useEffect(() => {
    setSelectedGenre(value);
  }, [value]);

  return (
    <div className="relative z-20">
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label="Select genre"
        className="flex items-center text-gray-700 dark:text-neutral-100 text-sm font-medium mb-2"
      >
        {selectedGenre || t("genre")}
        <HiChevronDown
          className={`ml-2 transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 w-64 shadow-lg backdrop-blur-lg p-1 rounded-lg transition-opacity duration-300 ease-in-out bg-zinc-950/90">
          {bookGenres.map(({ id, name }) => (
            <li
              key={id}
              className=" rounded-md cursor-pointer text-neutral-300 hover:bg-rose-950/10"
              onClick={() => handleSelectGenre(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
      <input type="hidden" id={name} name={name} value={selectedGenre} />
    </div>
  );
};
