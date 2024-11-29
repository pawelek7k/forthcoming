import type { ChildrenType } from "@/types/children";
import type { ClassNameType } from "@/types/className";
import classNames from "classnames";

type ButtonType = {
  children: ChildrenType;
  className?: ClassNameType;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
};

export const Button = ({
  children,
  className,
  primary,
  success,
  warning,
  danger,
  ...rest
}: ButtonType) => {
  const classes = classNames(
    className,
    "flex items-center px-3 py-1.5 border",
    {
      btn: primary,
      "btn bg-sky-500 border-sky-600": success,
      "border-yellow-600 bg-yellow-500": warning,
      "border-red-600 bg-red-500 text-white": danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
