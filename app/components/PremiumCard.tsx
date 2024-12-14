import Image from "next/image";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { LinkComponent } from "./Link";

export const PremiumCard = () => {
  return (
    <div className="border border-zinc-950 w-max p-4 rounded-md bg-dark-primary-bg shadow-md">
      <h2>Buy premium and save your gold thoughts!</h2>
      <LinkComponent
        to="/"
        className="hover-effect flex items-center gap-2 text-center justify-center font-semibold"
      >
        Learn More <MdOutlineWorkspacePremium />
      </LinkComponent>
      <Image
        src="/images/premium.png"
        width={300}
        height={300}
        alt="premium img"
      />
    </div>
  );
};
