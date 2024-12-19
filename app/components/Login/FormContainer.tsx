import { LoginForm } from ".";
import { SignupForm } from "./Signup";

type FormContainerTypes = {
  isLogin: boolean;
  formData: { email: string; username: string; password: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export const FormContainer = ({
  isLogin,
  formData,
  handleChange,
  submitHandler,
  isLoading,
}: FormContainerTypes) => {
  return isLogin ? (
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
  );
};
