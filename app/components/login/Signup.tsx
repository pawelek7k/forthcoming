import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "../Button";
import { InputField } from "../InputField";
import { Socials } from "./Socials";

type SignupFormType = {
  formData: {
    email: string;
    username: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export const SignupForm = ({
  formData,
  handleChange,
  submitHandler,
  isLoading,
}: SignupFormType) => {
  const t = useTranslations("signup");
  return (
    <div className="bg-zinc-950/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 shadow-rose-950">
      <h1 className="text-2xl  font-semibold text-neutral-100 text-center mb-4">
        {t("heading")}
      </h1>
      <p className="text-zinc-950 shadow-zinc-100 bg-zinc-100 p-1 rounded-full shadow-lg text-center mb-6 font-semibold text-sm uppercase">
        {t("paragraph")}
      </p>
      <form onSubmit={submitHandler} className="flex flex-col gap-6">
        <InputField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("emailPlaceholder")}
          autoComplete="email"
          label={t("emailLabel")}
        />
        <InputField
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder={t("usernamePlaceholder")}
          autoComplete="username"
          label={t("usernameLabel")}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={t("passwordPlaceholder")}
          autoComplete="new-password"
          label={t("passwordLabel")}
        />
        <Button primary={true} isDisabled={isLoading}>
          {t("button")}
        </Button>
      </form>
      <Socials />
    </div>
  );
};
