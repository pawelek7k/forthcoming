import { Section } from "@/app/components/Section";
import { ChildrenType } from "@/types/children";

export default async function RootLayout({ children }: ChildrenType) {
  return <Section>{children} </Section>;
}
