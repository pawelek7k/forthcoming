"use client";

import useMediaQuery from "@/lib/useMediaQuery";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Logo } from "../Logo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export type LinkType = {
  label: string;
  path: string;
}[];

const NavigationWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navigation");
  const links: LinkType = [
    { label: t("home"), path: "/home" },
    { label: t("create"), path: "/myworks/create" },
    { label: t("library"), path: "/library" },
    { label: t("notes"), path: "/notes" },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="flex justify-around w-full fixed z-40 backdrop-blur-md rounded-b-lg top-0 items-center shadow-lg pl-12 gap-12">
      <Logo />
      {isMobile ? (
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
      ) : (
        <DesktopMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
      )}
    </header>
  );
};

export default NavigationWrapper;
