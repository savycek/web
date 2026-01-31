/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image-cdn-ak.spotifycdn.com", // Doména z tvé chyby
            },
            {
                protocol: "https",
                hostname: "i.scdn.co", // Pro jistotu přidáme i tuto (častá u starších playlistů)
            },
            {
                protocol: "https",
                hostname: "mosaic.scdn.co", // Někdy se používá pro koláže
            },
        ],
    },
};

export default nextConfig;