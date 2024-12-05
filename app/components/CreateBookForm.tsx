"use client";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import Notiflix from "notiflix";
import React, { useState } from "react";
import { Button } from "./Button";
import { CoverPicker } from "./CoverPicker";
import { Tags } from "./CreateTag";
import { InputField } from "./InputField";
import { Loader } from "./Loader";
import { ToggleSwitch } from "./ToggleSwitch";
import { DropdownMenu } from "./Dropdown";

export const CreateForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    cover: "",
    description: "",
    forAdult: false,
    tags: [] as string[],
    genre: "",
    lang: "pl" as "pl" | "eng",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const t = useTranslations("global");

  const handleChange =
    (key: keyof typeof formData) => (value: string | boolean | string[]) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const { title, cover, description, genre, tags } = formData;
    if (!title || !cover || !description || !genre || tags.length === 0) {
      Notiflix.Notify.warning("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/books/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Something went wrong");
      const result = await response.json();
      Notiflix.Notify.success("Book successfully created!");
      router.push(`/myworks/${result.id}`);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && <Loader />}
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-0">
        <form
          className="flex flex-col sm:flex-row sm:gap-2 md:gap-16 shadow-lg md:p-12  sm:p-4 rounded-md items-center justify-center bg-zinc-950"
          encType="multipart/form-data"
          onSubmit={submitHandler}
        >
          <div className="w-[9rem] h-[14rem] sm:w-[12rem] flex items-center justify-center">
            <CoverPicker
              name="selectedCover"
              value={formData.cover}
              onChange={handleChange("cover")}
            />
          </div>
          <div className="sm:w-[25rem] w-screen p-10">
            <InputField
              id={"title"}
              onChange={(e) => handleChange("title")(e.target.value)}
              placeholder={"Title"}
              label={"Title"}
            />
            <InputField
              component="textarea"
              id={"description"}
              onChange={(e) => handleChange("description")(e.target.value)}
              placeholder={"Description"}
              label={"description"}
            />
            <div className="flex gap-6 items-center justify-between">
              <DropdownMenu
                name="genre"
                value={formData.genre}
                onChange={handleChange("genre")}
              />
              <div className="flex gap-2 items-center justify-center">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {t("adultChecker")}
                </span>
                <ToggleSwitch
                  name="forAdult"
                  value={formData.forAdult ? "on" : "off"}
                  onChange={(value) => handleChange("forAdult")(value === "on")}
                />
              </div>
            </div>
            <Tags
              name="tags"
              value={formData.tags}
              onChange={handleChange("tags")}
            />
            <div className="flex gap-2 items-center mb-4">
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                {t("langSwitch")}
              </span>
              {/* <div className="flex items-center gap-2">
                <span className="text-sm">PL</span>
                <LangSwitch
                  name="Lang"
                  onChange={handleChange("lang")}
                  value={formData.lang}
                />
                <span className="text-sm">ENG</span>
              </div> */}
            </div>
            <Button primary={true} isDisabled={isSubmitting}>
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
