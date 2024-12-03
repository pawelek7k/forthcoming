import { ChildrenType } from "@/types/children";

export const Tag = ({ children }: ChildrenType) => {
  return (
    <span className="bg-zinc-100 rounded-full py-2 px-4 text-zinc-950 font-semibold ">
      {children}
    </span>
  );
};
