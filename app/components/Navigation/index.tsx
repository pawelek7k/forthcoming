"use client";

import useMediaQuery from "@/lib/useMediaQuery";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

type LinkType = {
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

  return isMobile ? (
    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
  ) : (
    <DesktopMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
  );
};

export default NavigationWrapper;
