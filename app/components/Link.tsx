import { useTranslatedMessage } from "@/hooks/getTranslatedMessage";
import { Link } from "@/navigation";
import type { ChildrenType } from "@/types/children";
import type { ClassNameType } from "@/types/className";
import classNames from "classnames";
import { useTranslations } from "next-intl";

type LinkType = {
  to: string;
  children?: ChildrenType;
  namespace?: string;
  className?: ClassNameType;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkComponent = ({
  to,
  children,
  namespace,
  className,
  ...rest
}: LinkType) => {
  const t = useTranslations();
  const translatedMessage = useTranslatedMessage(namespace, t);
  const classes = classNames("no-underline", className);
  return (
    <Link href={to} className={classes} {...rest}>
      {translatedMessage && `${translatedMessage} `}
      {children}
    </Link>
  );
};
