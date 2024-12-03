"use client";

import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { LinkComponent as Link } from "./Link";
import { Logo } from "./Logo";

type LinkType = {
  label: string;
  path: string;
}[];

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const links: LinkType = [
    { label: "Home", path: "/home" },
    { label: "Create", path: "/myworks/create" },
    { label: "Library", path: "/library" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <>
      <header className="flex justify-around w-full fixed z-40 backdrop-blur-md rounded-b-lg top-0 items-center shadow-lg pl-12 gap-12">
        <Logo />
        <div className="bg-zinc-100 rounded-l-full border border-rose-950 text-zinc-950 p-1 px-12 w-full flex justify-between">
          <nav className="flex items-center">
            <ul className="flex gap-4">
              {links.map(({ label, path }) => (
                <li key={label} className="font-semibold text-sm hover-effect">
                  <Link to={path}>{label.toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="rounded-full bg-zinc-950">
            <Hamburger
              size={20}
              toggled={isOpen}
              toggle={setOpen}
              color="#f4f4f5"
            />
          </div>
        </div>
      </header>
    </>
  );
};
