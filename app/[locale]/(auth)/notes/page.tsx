import { ParticlesBackground } from "@/app/components/ParticlesBackground";
import { PremiumCardModal } from "@/app/components/PremiumCard";
import { Section } from "@/app/components/Section";

export const metadata = {
  title: "Future - Write your ideas!",
  description: "Future",
};

const NotesPage = () => {
  return (
    <Section className="relative w-full h-screen">
      <ParticlesBackground />
      <PremiumCardModal />
    </Section>
  );
};

export default NotesPage;
