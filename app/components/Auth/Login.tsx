import { formDataTypes } from "@/types/formData";
import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "../Button";
import { GoogleBtn } from "../GoogleBtn";
import { InputField } from "../InputField";
import { Socials } from "../Socials";

type LoginFormType = {
  formData: formDataTypes;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export const LoginForm = ({
  formData,
  handleChange,
  submitHandler,
  isLoading,
}: LoginFormType) => {
  const t = useTranslations("login");
  return (
    <div className="bg-zinc-950/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20 shadow-rose-950">
      <h1 className="text-2xl font-semibold text-neutral-100 text-center mb-4">
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
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={t("passwordPlaceholder")}
          autoComplete="current-password"
          label={t("passwordLabel")}
        />
        <ul className="flex flex-col gap-4">
          <li>
            <Button primary={true} isDisabled={isLoading}>
              {t("button")}
            </Button>
          </li>
          <li>
            <GoogleBtn />
          </li>
        </ul>
      </form>
      <Socials />
    </div>
  );
};
