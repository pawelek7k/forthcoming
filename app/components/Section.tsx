import type { ChildrenType } from "@/types/children";
import type { ClassNameType } from "@/types/className";
import classNames from "classnames";

type SectionType = {
  children: ChildrenType;
  className?: ClassNameType;
};

export const Section = ({ children, className, ...rest }: SectionType) => {
  const classes = classNames("p-20", className);

  return (
    <section {...rest} className={classes}>
      {children}
    </section>
  );
};
