import type { ChildrenType } from "@/types/children";
import classNames from "classnames";

type ParagraphProps = {
  children: ChildrenType;
  className?: string;
};

export const Paragraph = ({ children, className }: ParagraphProps) => {
  const paragraphClasses = classNames("text-sm sm:text-base", className);

  return <p className={paragraphClasses}>{children}</p>;
};
