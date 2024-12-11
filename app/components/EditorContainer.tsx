"use client";

import { TinyMCEEditor } from "@/app/components/Editor";
import axios from "axios";
import Notiflix from "notiflix";
import { useState } from "react";
import { Button } from "./Button";

type CreateChaptersType = {
  bookId: string;
};

export const EditorContainer = ({ bookId }: CreateChaptersType) => {
  const [text, setText] = useState<string>("");

  if (!bookId) {
    console.error("RichTextEditor requires a valid bookId prop.");
    return null;
  }

  const handleChange = (value: string) => setText(value);

  const handleSave = async () => {
    try {
      const response = await axios.put(`/api/book/update/${bookId}`, {
        content: text,
      });
      if (response.status === 200) {
        Notiflix.Notify.success("Content saved successfully!");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(
          "Error saving content:",
          err.response?.data || err.message
        );
        Notiflix.Notify.failure("Failed to save content");
      } else {
        console.error("Unexpected error:", err);
        Notiflix.Notify.warning("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="w-full min-h-screen p-6 sm:p-10 relative flex flex-col gap-4">
      <TinyMCEEditor value={text} onEditorChange={handleChange} />
      <Button primary={true} onClick={handleSave} className="w-max self-center">
        Save
      </Button>
    </div>
  );
};
