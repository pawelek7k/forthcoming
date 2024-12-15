"use client";

import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
import { LinkComponent as Link } from "../Link";
import { Logo } from "../Logo";

type LinkType = {
  label: string;
  path: string;
}[];

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  links: LinkType;
};

export const MobileMenu = ({ isOpen, setIsOpen, links }: MobileMenuProps) => {
  return (
    <>
      <div className="rounded-full bg-zinc-950 z-50 fixed right-2">
        <Hamburger
          size={20}
          toggled={isOpen}
          toggle={setIsOpen}
          color="#f4f4f5"
        />
      </div>
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
            className="fixed top-0 right-0 w-full h-screen bg-zinc-950 z-30 sm:w-[300px] p-8"
          >
            <div className="flex flex-col h-full text-zinc-100 p-6">
              <nav>
                <ul className="flex flex-col gap-6 text-lg">
                  {links.map(({ label, path }) => (
                    <li key={label}>
                      <Link to={path} className="hover-effect">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="self-center mt-auto">
                <Logo />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
