"use client";

import { createUser } from "@/lib/signup/createUser";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Notiflix from "notiflix";
import { useState } from "react";
import { Button } from "../components/Button";
import { LoginForm } from "../components/login/Login";
import { SignupForm } from "../components/login/Signup";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "john.doe99@example.com",
    username: "user123",
    password: "Password1",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
        Notiflix.Notify.failure("Error logging in. Please try again.", err);
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
        Notiflix.Notify.failure("Error creating user. Try again later", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="h-screen container mx-auto flex flex-col justify-center items-center">
      {isLogin ? (
        <LoginForm
          formData={formData}
          handleChange={handleChange}
          submitHandler={submitHandler}
          isLoading={isLoading}
        />
      ) : (
        <SignupForm
          formData={formData}
          handleChange={handleChange}
          submitHandler={submitHandler}
          isLoading={isLoading}
        />
      )}
      <div className="flex items-center gap-4 mt-10">
        <p className="text-neutral-100">or</p>
      </div>
      <div className="mt-10">
        <Button primary={true} onClick={toggleForm}>
          {isLogin ? "switch" : "switch"}
        </Button>
      </div>
      {/* {isLoading && <Loader />} */}
    </div>
  );
}
