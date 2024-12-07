import { RichTextEditor } from "@/app/components/Editor";

type CreateChaptersType = {
  params: {
    bookId: string;
  };
};

export const metadata = {
  title: "Future - Book Content",
  description: "Write Your Best Thoughts",
};

const CreateChapters = async ({ params }: CreateChaptersType) => {
  const { bookId } = await params;

  return <p>ID: {bookId}</p>;
};

export default CreateChapters;
