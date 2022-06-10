/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
  },
  withPWA: {
    pwa: {
      dest: "public",
    },
  },
};

module.exports = nextConfig;
