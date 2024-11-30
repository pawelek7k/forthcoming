"use client";

import { ChildrenType } from "@/types/children";
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }: ChildrenType) => {
  return <SessionProvider>{children}</SessionProvider>;
};
