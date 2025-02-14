import { useTranslatedMessage } from "@/hooks/getTranslatedMessage";
import type { ChildrenType } from "@/types/children";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import React from "react";

type HeadingType = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  namespace?: string;
  children?: ChildrenType;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({
  as: Component = "h1",
  className,
  namespace,
  children,
  ...rest
}: HeadingType) => {
  const t = useTranslations();
  const translatedMessage = useTranslatedMessage(namespace, t);
  return (
    <Component className={classNames(className)} {...rest}>
      {translatedMessage && `${translatedMessage} `}
      {children}
    </Component>
  );
};
