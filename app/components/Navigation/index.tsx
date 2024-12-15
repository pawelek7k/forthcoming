"use client";

import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import useMediaQuery from "@/lib/useMediaQuery";

const NavigationWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", path: "/home" },
    { label: "Create", path: "/myworks/create" },
    { label: "Library", path: "/library" },
    { label: "Notes", path: "/notes" },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? (
    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
  ) : (
    <DesktopMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
  );
};

export default NavigationWrapper;
