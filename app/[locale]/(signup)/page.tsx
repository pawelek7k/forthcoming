import { Footer } from "@/app/components/Footer";
import { Login } from "@/app/components/Login";

export const metadata = {
  title: "Forthcoming - Login Page",
  description: "Login to access your account",
};
const LoginPage = () => {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
