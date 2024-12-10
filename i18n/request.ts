import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

const getLocale = async () => {
    const header = await headers();
    const locale = header.get('X-NEXT-INTL-LOCALE');

    if (!locale) notFound();

    return locale;
};

export default getRequestConfig(async () => {
    const locale = await getLocale();

    if (!['en', 'pl'].includes(locale)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
