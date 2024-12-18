import { useMemo } from "react";

export const useTranslatedMessage = (
    namespace: string | undefined,
    t: (key: string) => string
) => {
    return useMemo(() => (namespace ? t(namespace) : ""), [namespace, t]);
};
