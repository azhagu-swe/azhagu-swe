
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

// const withPWA = withPWAInit({
//   dest: "public",
//   disable: true,
//   register: true,
//   scope: "/app",
//   sw: "service-worker.js",
// });

export default nextConfig;
