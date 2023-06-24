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
};

module.exports = nextConfig
