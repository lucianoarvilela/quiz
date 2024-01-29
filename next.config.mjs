/** @type {import('next').NextConfig} */

const nextConfig = {

  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },

  publicRuntimeConfig: {
    nextPublicAppUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://quiz-six-beryl.vercel.app/",
  },

};

export default nextConfig;
