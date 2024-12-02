import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "../Button";
import { InputField } from "../InputField";

type LoginFormType = {
  formData: {
    email: string;
    username: string;
    password: string;
  };
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
      <p className="text-zinc-950 shadow-zinc-100 bg-zinc-100 p-1 rounded-full shadow-lg text-center mb-4 font-semibold text-sm uppercase">
        {t("paragraph")}
      </p>
      <form onSubmit={submitHandler}>
        <InputField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="emailPlaceholder"
          autoComplete="email"
          label="emailLabel"
        />
        <InputField
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="passwordPlaceholder"
          autoComplete="current-password"
          label="passwordLabel"
        />
        <ul className="flex flex-col gap-4">
          <li>
            <Button primary={true} isdisabled={`${isLoading}`}>
              {t("button")}
            </Button>
          </li>
          {/* <li>
            <GoogleButton />
          </li> */}
        </ul>
        {/* <Socials /> */}
      </form>
    </div>
  );
};
