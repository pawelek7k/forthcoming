import { ChildrenType } from "@/types/children";

export const Tag = ({ children }: ChildrenType) => {
  return (
    <span className="bg-zinc-100 flex items-center rounded-full py-1 px-4 text-zinc-950 font-semibold ">
      {children}
    </span>
  );
};
