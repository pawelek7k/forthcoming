"use client";

import Image from "next/image";
import { useState } from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Button } from "./Button";
import { LinkComponent } from "./Link";

export const PremiumCardModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className="border border-zinc-950 w-max p-6 rounded-md bg-dark-primary-bg shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4 text-center">
              Buy premium and save your gold thoughts!
            </h2>
            <LinkComponent
              to="/"
              className="hover-effect flex items-center gap-2 text-center justify-center font-semibold mb-4"
            >
              Learn More <MdOutlineWorkspacePremium />
            </LinkComponent>
            <Image
              src="/images/premium.png"
              width={300}
              height={300}
              alt="premium img"
            />
            <Button danger={true} onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
