import { useTranslatedMessage } from "@/hooks/getTranslatedMessage";
import type { ChildrenType } from "@/types/children";
import type { ClassNameType } from "@/types/className";
import classNames from "classnames";
import { useTranslations } from "next-intl";

type ButtonType = {
  children?: ChildrenType;
  namespace?: string;
  className?: ClassNameType;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  namespace,
  className,
  primary,
  success,
  warning,
  danger,
  onClick,
  isDisabled,
  ...rest
}: ButtonType) => {
  const t = useTranslations();
  const translatedMessage = useTranslatedMessage(namespace, t);
  const classes = classNames(className, "flex items-center px-3 py-1.5", {
    btn: primary,
    "btn bg-sky-700 before:bg-sky-900 border-sky-600 text-sky-100": success,
    "btn border-yellow-900 bg-amber-800 before:bg-amber-900 text-amber-100":
      warning,
    "btn border-red-800 before:bg-red-900 bg-red-800 text-red-100": danger,
    "opacity-50 cursor-not-allowed": isDisabled,
  });

  return (
    <button
      {...rest}
      onClick={onClick}
      className={classes}
      disabled={isDisabled}
    >
      {translatedMessage && `${translatedMessage} `}
      {children}
    </button>
  );
};
