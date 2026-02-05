import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // list
    locales: ['cs', 'en'],

    // default
    defaultLocale: 'cs'
});

export const config = {
    matcher: [
        '/',
        '/(cs|en)/:path*',
        '/((?!_next|.*\\..*).*)'
    ]
};
