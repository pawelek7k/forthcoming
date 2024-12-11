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
  const [buttonState, setButtonState] = useState<
    "idle" | "pending" | "fulfilled" | "rejected"
  >("idle");

  if (!bookId) {
    console.error("RichTextEditor requires a valid bookId prop.");
    return null;
  }

  const handleChange = (value: string) => setText(value);

  const handleSave = async () => {
    setButtonState("pending");
    try {
      const response = await axios.put(`/api/book/update/${bookId}`, {
        content: text,
      });
      if (response.status === 200) {
        setButtonState("fulfilled");
        Notiflix.Notify.success("Content saved successfully!");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (err) {
      setButtonState("rejected");
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
    } finally {
      setTimeout(() => setButtonState("idle"), 3000);
    }
  };

  return (
    <div className="w-full min-h-screen p-6 sm:p-10 relative flex flex-col gap-4">
      <TinyMCEEditor value={text} onEditorChange={handleChange} />
      <Button
        primary={true}
        isDisabled={buttonState === "pending"}
        success={buttonState === "fulfilled"}
        danger={buttonState === "rejected"}
        onClick={handleSave}
        className="w-max self-center"
      >
        {buttonState === "pending"
          ? "Saving..."
          : buttonState === "fulfilled"
          ? "Saved!"
          : buttonState === "rejected"
          ? "Retry"
          : "Save"}
      </Button>
    </div>
  );
};
