"use client";
import Image from "next/image";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { LinkComponent as Link } from "./Link";
import { Overlay } from "./Overlay";
import { Paragraph } from "./Paragraph";

type PremiumCardModalTypes = {
  onClose: () => void;
  onProceed: () => void;
};

export const PremiumCardModal = ({
  onClose,
  onProceed,
}: PremiumCardModalTypes) => {
  return (
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
        <ul className="flex gap-4 flex-col">
          <li>
            <Button
              onClick={onProceed}
              namespace="premium.premiumBtn"
              primary={true}
            />
          </li>
          <li>
            <Button
              danger={true}
              onClick={onClose}
              namespace="premium.cancelBtn"
            />
          </li>
        </ul>
      </div>
    </Overlay>
  );
};
