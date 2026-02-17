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
                hostname: "image-cdn-fa.spotifycdn.com",
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
            {
                protocol: "https",
                hostname: "i.imgur.com"
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
};

export default withNextIntl(nextConfig);