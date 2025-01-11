import { CreateForm } from "@/app/components/CreateForm";
import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";

export const metadata = {
  title: "Forthcoming - Create your book",
  description: "Forthcoming",
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
