import type { ChildrenType } from "@/types/children";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

type ParagraphProps = {
  children?: ChildrenType;
  className?: string;
  namespace?: string;
};

export const Paragraph = ({
  children,
  className,
  namespace,
}: ParagraphProps) => {
  const t = useTranslations();

  const paragraphClasses = classNames("text-sm sm:text-base", className);

  const translatedMessage = useMemo(() => {
    return namespace ? t(namespace) : "";
  }, [namespace, t]);

  return (
    <p className={paragraphClasses}>
      {" "}
      {translatedMessage && `${translatedMessage} `} {children}
    </p>
  );
};
