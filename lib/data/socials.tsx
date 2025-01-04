import { FaFacebookSquare, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type socialsType = {
  icon: JSX.Element;
  link: string;
};

export const socials: socialsType[] = [
  {
    icon: <FaFacebookSquare className="text-zinc-100" />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaXTwitter className="text-zinc-100" />,
    link: "https://x.com/",
  },
  {
    icon: <FaPinterest className="text-zinc-100" />,
    link: "https://pl.pinterest.com/",
  },
];
