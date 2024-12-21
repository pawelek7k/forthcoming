import { Paragraph } from "./Paragraph";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t to-zinc-950 from-rose-950 p-4">
      <Paragraph
        namespace="footer.copyright"
        className="text-center text-zinc-100"
      ></Paragraph>
    </footer>
  );
};
