import { PremiumCard } from "@/app/components/PremiumCard";
import { Section } from "@/app/components/Section";

export const metadata = {
  title: "Future - Write your ideas!",
  description: "Future",
};

const NotesPage = () => {
  // const t = useTranslations("headings");
  return (
    <Section>
      <PremiumCard />
    </Section>
  );
};

export default NotesPage;
