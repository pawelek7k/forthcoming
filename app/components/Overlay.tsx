import { ChildrenType } from "@/types/children";

export const Overlay = ({ children }: ChildrenType) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-999 bg-zinc-950/90">
      {children}
    </div>
  );
};
