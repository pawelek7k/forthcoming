import { Login } from "@/app/components/Auth";
import { Footer } from "@/app/components/Footer";

export const metadata = {
  title: "Forthcoming - Login Page",
  description: "Login to access your account",
};
const LoginPage = () => {
  return (
    <>
      <Login />
      <Footer className="bg-gradient-to-t to-zinc-950 from-rose-950" />
    </>
  );
};

export default LoginPage;
