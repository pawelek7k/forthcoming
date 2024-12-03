import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { FcGoogle } from "react-icons/fc";

export const GoogleBtn: React.FC = () => {
  const t = useTranslations("login");
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { redirect: true });
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out p-2 gap-2"
      aria-label="Sign in with Google"
    >
      <FcGoogle />
      <span className="text-gray-800 text-sm font-medium">
        {t("googleButton")}
      </span>
    </button>
  );
};
