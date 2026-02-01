import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !['cs', 'en'].includes(locale)) {
        locale = 'cs';
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});