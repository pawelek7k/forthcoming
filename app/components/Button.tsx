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
      "btn bg-sky-700 before:bg-sky-900 border-sky-600": success,
      "btn border-yellow-900 bg-amber-800 before:bg-amber-900": warning,
      "btn border-red-800 before:bg-red-900 bg-red-800 text-white": danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
