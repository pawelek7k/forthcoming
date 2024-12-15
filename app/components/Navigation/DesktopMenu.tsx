"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LinkComponent as Link } from "../Link";
import Hamburger from "hamburger-react";
import { Filter } from "../Filter";
import { Logo } from "../Logo";

type LinkType = {
  label: string;
  path: string;
}[];

type DesktopMenuProps = {
  isOpen: boolean;
  links: LinkType;
  setIsOpen: () => void;
};

export const DesktopMenu = ({ isOpen, setIsOpen, links }: DesktopMenuProps) => {
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
              toggle={setIsOpen}
              color="#f4f4f5"
            />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className="bottom-0 max-w-sm shadow-lg z-30 h-screen w-screen sm:w-[500px] bg-zinc-950 fixed top-0 right-0"
          >
            <Filter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
