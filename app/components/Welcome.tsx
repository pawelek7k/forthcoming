"use client";
import { useTranslations } from "next-intl";

type UserType = {
  email: string;
  username: string;
};

const Welcome = ({ email, username }: UserType) => {
  const t = useTranslations("headings");
  return (
    <div className="bg-black rounded-xl p-10 my-8 bg-home-img bg-top dark:bg-center dark:bg-dark-home-img bg-no-repeat bg-cover ">
      <h2 className="text-xl text-neutral-100">
        {t("home.welcome")}, {username || email.split("@")[0]}!
      </h2>
      <h1 className="text-3xl text-neutral-100 uppercase font-semibold">
        {t("home.mainHeading")}
      </h1>
    </div>
  );
};

export default Welcome;
