import { useTranslations } from "next-intl";
import { Heading } from "../Heading";

export const FormHeader = () => {
  const t = useTranslations("headings");
  return (
    <div className="text-center mb-6">
      <Heading as="h1" className="text-xl font-bold">
        {t("create.second")}
      </Heading>
      <p className="text-sm ">{t("create.paragraph")}</p>
    </div>
  );
};
