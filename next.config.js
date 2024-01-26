/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com"
            },
            {
                protocol: "https",
                hostname: "images.clerk.dev",
            }
        ],
    }
}

module.exports = nextConfig
