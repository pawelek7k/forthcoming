"use client";

import { FormContainer } from "@/app/components/Auth/FormContainer";
import { ToggleFormButton } from "@/app/components/Auth/ToggleFormButton";
import { Loader } from "@/app/components/Loader";
import { Section } from "@/app/components/Section";
import { createUser } from "@/lib/signup/createUser";
import { useRouter } from "@/navigation";
import { signIn, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Notiflix from "notiflix";
import { useState } from "react";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "john.doe99@example.com",
    username: "user123",
    password: "Password1",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const loginT = useTranslations("login");
  const signupT = useTranslations("signup");
  const { data: session } = useSession();

  if (session) router.push("/home");

  const toggleForm = () => setIsLogin((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (isLogin) {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (result?.error) {
          Notiflix.Notify.failure("Invalid email or password");
        } else {
          Notiflix.Notify.success("Logged in correctly");
          router.push("/home");
        }
      } catch (err) {
        const errorMessage =
          (err as Error)?.message || "An unknown error occurred.";
        Notiflix.Notify.failure(errorMessage);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const result = await createUser(
          formData.email,
          formData.username,
          formData.password
        );
        console.log("User created:", result);

        const signInResult = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (signInResult?.error) {
          Notiflix.Notify.failure("Error during login after registration.");
        } else {
          Notiflix.Notify.success("User registered and logged in successfully");
          router.push("/home");
        }
      } catch (err) {
        const errorMessage =
          (err as Error)?.message || "An unknown error occurred.";
        Notiflix.Notify.failure(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Section className="h-screen container mx-auto flex flex-col justify-center items-center">
      <FormContainer
        isLogin={isLogin}
        formData={formData}
        handleChange={handleChange}
        submitHandler={submitHandler}
        isLoading={isLoading}
      />
      <div className="flex items-center gap-4 mt-10">
        <p className="text-neutral-100">or</p>
      </div>
      <ToggleFormButton
        isLogin={isLogin}
        toggleForm={toggleForm}
        loginT={loginT}
        signupT={signupT}
      />
      {isLoading && <Loader />}
    </Section>
  );
};
