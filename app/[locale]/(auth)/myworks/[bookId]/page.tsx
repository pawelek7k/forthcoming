type CreateChaptersType = {
  params: {
    bookId: string;
  };
};

export const metadata = {
  title: "Future - Book Content",
  description: "Write Your Best Thoughts",
};

const CreateChapters = ({ params }: CreateChaptersType) => {
  const { bookId } = params;

  return <>{/* <RichTextEditor bookId={bookId} /> */}</>;
};

export default CreateChapters;
