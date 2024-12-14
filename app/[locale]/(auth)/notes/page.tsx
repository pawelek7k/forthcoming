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

      <div className="z-1 relative">
        <PremiumCard />
      </div>
    </Section>
  );
};

export default NotesPage;
