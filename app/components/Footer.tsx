import classNames from "classnames";
import { Paragraph } from "./Paragraph";

type FooterType = {
  className?: string;
};

export const Footer = ({ className }: FooterType) => {
  const classes = classNames("p-2", className);
  return (
    <footer className={classes}>
      <Paragraph
        namespace="footer.copyright"
        className="text-center text-zinc-100"
      ></Paragraph>
    </footer>
  );
};
