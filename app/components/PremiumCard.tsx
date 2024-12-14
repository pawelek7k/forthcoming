"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Button } from "./Button";
import { LinkComponent } from "./Link";

export const PremiumCardModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const t = useTranslations("premium");

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
          <div
            className="border border-zinc-950 w-max p-6 rounded-md bg-dark-primary-bg shadow-md flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-center">{t("heading")}</h2>
            <p>{t("paragraph")}</p>
            <LinkComponent
              to="/"
              className="hover-effect flex items-center gap-2 text-center justify-center font-semibold mb-4"
            >
              {t("link")} <MdOutlineWorkspacePremium />
            </LinkComponent>
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
        </div>
      )}
    </>
  );
};
