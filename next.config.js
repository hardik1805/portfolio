/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portfolio",
    output: "export",
    distDir: "dist",
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;