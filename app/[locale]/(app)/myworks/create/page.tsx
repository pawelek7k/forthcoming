import { CreateForm } from "@/app/components/CreateForm";
import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";

export const metadata = {
  title: "Future - Create your book",
  description: "Future",
};

const CreatePage = () => {
  return (
    <Section>
      <Heading
        as="h1"
        className="text-xl sm:text-3xl text-neutral-100 uppercase font-semibold"
        namespace="headings.create.first"
      />
      <CreateForm />
    </Section>
  );
};

export default CreatePage;
