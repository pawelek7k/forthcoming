"use client";

import { Editor } from "@tinymce/tinymce-react";

export const TinyMCEEditor = ({
  value,
  onEditorChange,
}: {
  value: string;
  onEditorChange: (content: string) => void;
}) => {
  const handleEditorChange = (content: string) => {
    onEditorChange(content);
  };

  return (
    <Editor
      apiKey="87ejqubxggtbhrcx0mxu07pl0n6x696d4e4b6yd95p2nbldx"
      value={value}
      init={{
        height: 500,
        menubar: false,
        plugins: ["link", "image", "lists", "table", "code"],
        toolbar:
          "undo redo | bold italic | alignleft aligncenter alignright | code | link image | bullist numlist | table",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};
