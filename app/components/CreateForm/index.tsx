"use client";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import Notiflix from "notiflix";
import { useState } from "react";
import { Button } from "../Button";
import { Loader } from "../Loader";
import { FormCoverPicker } from "./FormCoverPicker";
import { FormFields } from "./FormFields";
import { FormHeader } from "./FormHeader";
import { FormOptions } from "./FormOptions";
import { FormTagsAndLang } from "./FormTagsAndLang";

export const initialFormData = {
  title: "",
  cover: "",
  description: "",
  forAdult: false,
  date: "",
  tags: [] as string[],
  genre: "",
  lang: "pl" as "pl" | "eng",
};

export const CreateForm = () => {
  const [formData, setFormData] = useState(initialFormData);
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

    const currentDate = new Date().toISOString();
    setFormData((prev) => ({ ...prev, date: currentDate }));

    if (
      !formData.title ||
      !formData.cover ||
      !formData.description ||
      !formData.genre ||
      formData.tags.length === 0
    ) {
      Notiflix.Notify.warning("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log(formData);

      const response = await fetch("/api/book/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, date: currentDate }),
      });

      if (!response.ok) throw new Error("Something went wrong");

      const result = await response.json();
      Notiflix.Notify.success("Book successfully created!");
      router.push(`/myworks/${result.id}`);
    } catch (error) {
      console.log(formData);

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
          className="flex flex-col sm:flex-row sm:gap-2 md:gap-16 shadow-lg md:p-12 sm:p-4 rounded-md items-center justify-center bg-zinc-950 z-0"
          encType="multipart/form-data"
          onSubmit={submitHandler}
        >
          <FormCoverPicker
            value={formData.cover}
            onChange={handleChange("cover")}
          />
          <div className="sm:w-[25rem] w-screen p-10">
            <FormHeader />
            <FormFields formData={formData} handleChange={handleChange} />
            <FormOptions
              formData={formData}
              handleChange={handleChange}
              t={t}
            />
            <FormTagsAndLang
              formData={formData}
              handleChange={handleChange}
              t={t}
            />
            <Button primary={true} isDisabled={isSubmitting}>
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
