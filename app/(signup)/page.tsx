"use client";

import { createUser } from "@/lib/signup/createUser";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Notiflix from "notiflix";
import { useState } from "react";

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
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">
        {isLogin ? "Logowanie" : "Rejestracja"}
      </h2>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium"
            >
              Nazwa użytkownika
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full ${
            isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white p-2 rounded transition`}
        >
          {isLoading
            ? "Przetwarzanie..."
            : isLogin
            ? "Zaloguj się"
            : "Zarejestruj się"}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isLogin ? "Nie masz konta?" : "Masz już konto?"}{" "}
        <button onClick={toggleForm} className="text-blue-500 hover:underline">
          {isLogin ? "Zarejestruj się" : "Zaloguj się"}
        </button>
      </p>
    </div>
  );
}
