import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";

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

export const Socials: React.FC = () => {
  return (
    <ul className="flex gap-10 md:items-center md:mt-10 mb-10 md:mb-0 justify-center mt-4">
      {socials.map((social) => (
        <li
          className="rounded-full hover:border-zinc-100 transition ease-in-out cursor-pointer p-3 border border-rose-950"
          key={social.link}
        >
          <a href={social.link} target="_blank">
            <span>{social.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
