"use client";

import { EditorContainer } from "@/app/components/EditorContainer";
import { Loader } from "@/app/components/Loader";
import { Section } from "@/app/components/Section";
import { Suspense, use } from "react";

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
      <Suspense fallback={<Loader />}>
        <EditorContainer bookId={bookId} />
      </Suspense>
    </Section>
  );
};

export default CreateChapters;
