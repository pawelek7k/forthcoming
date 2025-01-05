import { Button } from "../Button";

type ToggleFormButtonTypes = {
  isLogin: boolean;
  toggleForm: () => void;
  loginT: (key: string) => string;
  signupT: (key: string) => string;
};

export const ToggleFormButton = ({
  isLogin,
  toggleForm,
  loginT,
  signupT,
}: ToggleFormButtonTypes) => {
  return (
    <div className="mt-10 z-0">
      <Button primary={true} onClick={toggleForm}>
        {isLogin ? loginT("switch") : signupT("switch")}
      </Button>
    </div>
  );
};
