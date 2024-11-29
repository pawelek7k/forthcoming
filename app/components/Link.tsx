import type { ChildrenType } from "@/types/children";
import type { ClassNameType } from "@/types/className";
import classNames from "classnames";
import Link from "next/link";

type LinkType = {
  to: string;
  children: ChildrenType;
  className?: ClassNameType;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkComponent = ({
  to,
  children,
  className,
  ...rest
}: LinkType) => {
  const classes = classNames("no-underline", className);
  return (
    <Link href={to} className={classes} {...rest}>
      {children}
    </Link>
  );
};
