import { ParticlesBackground } from "@/app/components/Notes/ParticlesBackground";
import { SubscriptionFlow } from "@/app/components/Notes/SubscriptionFlow";
import { Section } from "@/app/components/Section";
import { TiLockClosed } from "react-icons/ti";

export const metadata = {
  title: "Future - Write your ideas!",
  description: "Future",
};

const NotesPage = () => {
  return (
    <Section className="relative w-full h-screen">
      <ParticlesBackground />
      <div className="bg-zinc-900 w-44 h-60 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-md shadow-lg">
        <TiLockClosed className="w-12 h-12 shadow-lg animate-colorShift" />
      </div>
      <SubscriptionFlow />
    </Section>
  );
};

export default NotesPage;
