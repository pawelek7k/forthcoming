import type { ChildrenType } from "@/types/children";
import type { ClassNameType } from "@/types/className";
import classNames from "classnames";
import React from "react";

type HeadingType = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ChildrenType;
  className?: ClassNameType;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({
  as = "h1",
  children,
  className,
  ...rest
}: HeadingType) => {
  const Component = as;
  return (
    <Component className={classNames(className)} {...rest}>
      {children}
    </Component>
  );
};
