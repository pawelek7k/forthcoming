import { LinkComponent } from "./Link";

export const PremiumCard = () => {
  return (
    <div className="border border-rose-950 w-max p-4 rounded-md">
      <h2>Buy premium and save your gold thoughts!</h2>
      <LinkComponent to="/" className="hover-effect">
        Learn More
      </LinkComponent>
    </div>
  );
};
