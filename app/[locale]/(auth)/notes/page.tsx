import { ParticlesBackground } from "@/app/components/ParticlesBackground";
import { PremiumCard } from "@/app/components/PremiumCard";
import { Section } from "@/app/components/Section";

export const metadata = {
  title: "Future - Write your ideas!",
  description: "Future",
};

const NotesPage = () => {
  return (
    <Section className="relative w-full h-screen">
      <ParticlesBackground />
      <PremiumCard />
    </Section>
  );
};

export default NotesPage;
