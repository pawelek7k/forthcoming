"use client";

import { EditorContainer } from "@/app/components/EditorContainer";
import { Section } from "@/app/components/Section";
import { use } from "react";

type CreateChaptersType = {
  params: Promise<{ bookId: string }>;
};

const CreateChapters = ({ params }: CreateChaptersType) => {
  const { bookId } = use(params);

  if (!bookId) {
    console.error("BookId is missing");
    return null;
  }

  return (
    <Section>
      <EditorContainer bookId={bookId} />
    </Section>
  );
};

export default CreateChapters;
