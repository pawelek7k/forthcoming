"use client";

import { store } from "@/lib/redux/store";
import { ChildrenType } from "@/types/children";
import { Provider } from "react-redux";

export const ReduxProvider = ({ children }: ChildrenType) => {
  return <Provider store={store}>{children}</Provider>;
};
