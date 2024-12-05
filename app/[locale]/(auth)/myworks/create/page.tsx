import { CreateForm } from "@/app/components/CreateBookForm";
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
      <Heading as="h1">{t("create")}</Heading>
      <CreateForm />
    </Section>
  );
};

export default CreatePage;
