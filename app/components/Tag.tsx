import { ChildrenType } from "@/types/children";

export const Tag = ({ children }: ChildrenType) => {
  return (
    <span className="flex gap-2 font-semibold items-center rounded-full bg-zinc-100 text-zinc-950 md:px-4 w-max text-sm md:text-base px-2">
      {children}
    </span>
  );
};
