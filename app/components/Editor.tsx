"use client";
import axios from "axios";
import dynamic from "next/dynamic";
import Notiflix from "notiflix";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Button } from "./Button";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type RichTextEditorProps = {
  bookId: string;
} & RichTextEditorStaticType;

type RichTextEditorStaticType = {
  modules: unknown;
  formats: unknown;
};

export const RichTextEditor = ({ bookId }: RichTextEditorProps) => {
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
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error saving content:",
          error.response?.data || error.message
        );
        Notiflix.Notify.failure("Failed to save content");
      } else {
        console.error("Unexpected error:", error);
        Notiflix.Notify.warning("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="w-full min-h-screen p-6 sm:p-10 relative bg-gray-100 dark:bg-gray-900">
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
        placeholder="Once upon a time lived a king who had three daughters..."
      />
      <Button primary={true} onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

RichTextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

RichTextEditor.formats = [
  "header",
  "font",
  "list",
  "bullet",
  "bold",
  "italic",
  "underline",
  "color",
  "background",
  "align",
  "link",
  "image",
];
