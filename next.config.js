/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:process.env.NODE_ENV === "development" ? "" : "/portfolio",
    output: "export",
    distDir: "dist",
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};
module.exports = nextConfig;