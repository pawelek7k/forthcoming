import { ParticlesBackground } from "@/app/components/ParticlesBackground";
import { PremiumCard } from "@/app/components/PremiumCard";
import { Section } from "@/app/components/Section";

export const metadata = {
  title: "Future - Write your ideas!",
  description: "Future",
};

const NotesPage = () => {
  return (
    <div className="relative w-full h-screen">
      <ParticlesBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Section>
          <PremiumCard />
        </Section>
      </div>
    </div>
  );
};

export default NotesPage;
