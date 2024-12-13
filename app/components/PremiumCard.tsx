import { LinkComponent } from "./Link";

export const PremiumCard = () => {
  return (
    <div>
      <h2>Buy premium and save your gold thoughts!</h2>
      <LinkComponent to="/" className="hover-effect">
        Learn More
      </LinkComponent>
    </div>
  );
};
