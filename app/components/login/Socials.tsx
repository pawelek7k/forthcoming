import { socials } from "@/lib/data/socials";

export const Socials = () => (
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
