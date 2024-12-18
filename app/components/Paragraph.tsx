import { useTranslatedMessage } from "@/hooks/getTranslatedMessage";
import type { ChildrenType } from "@/types/children";
import classNames from "classnames";
import { useTranslations } from "next-intl";

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
  const translatedMessage = useTranslatedMessage(namespace, t);

  const paragraphClasses = classNames("text-sm sm:text-base", className);

  return (
    <p className={paragraphClasses}>
      {translatedMessage && `${translatedMessage} `}
      {children}
    </p>
  );
};
