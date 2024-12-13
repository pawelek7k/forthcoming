import { CreateForm } from "@/app/components/CreateForm";
import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Future - Create your book",
  description: "Future",
};

const CreatePage = () => {
  const t = useTranslations("headings");
  return (
    <Section>
      <Heading
        as="h1"
        className="text-3xl text-neutral-100 uppercase font-semibold"
      >
        {t("create.first")}
      </Heading>
      <CreateForm />
    </Section>
  );
};

export default CreatePage;
