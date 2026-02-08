import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './src/i18n/request.js'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image-cdn-ak.spotifycdn.com",
            },
            {
                protocol: "https",
                hostname: "i.scdn.co",
            },
            {
                protocol: "https",
                hostname: "mosaic.scdn.co",
            },
            {
                protocol: "https",
                hostname: "cdn.simpleicons.org",
            },
        ],
    },
};

export default withNextIntl(nextConfig);