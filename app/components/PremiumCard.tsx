"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { LinkComponent as Link } from "./Link";
import { Overlay } from "./Overlay";
import { Paragraph } from "./Paragraph";

export const PremiumCardModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const t = useTranslations("premium");

  return (
    <>
      {isOpen && (
        <Overlay>
          <div
            className="border border-zinc-950 w-max p-6 rounded-md bg-dark-primary-bg shadow-md flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Heading
              as="h2"
              className="text-lg font-bold text-center"
              namespace="premium.heading"
            />
            <Paragraph namespace="premium.paragraph" />
            <Link
              to="/"
              className="hover-effect flex items-center gap-2 text-center justify-center font-semibold mb-4"
              namespace="premium.link"
            >
              <MdOutlineWorkspacePremium />
            </Link>
            <Image
              src="/images/premium.png"
              width={300}
              height={300}
              alt="premium img"
            />
            <Button danger={true} onClick={() => setIsOpen(false)}>
              {t("button")}
            </Button>
          </div>
        </Overlay>
      )}
    </>
  );
};
