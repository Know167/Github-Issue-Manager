/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: "/api/get-access-token",
                destination: "https://github.com/login/oauth/access_token",
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "via.placeholder.com",
            },
        ],
    },
};

module.exports = nextConfig
