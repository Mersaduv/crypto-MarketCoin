/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_COINGECKO_API_URL: "https://api.coingecko.com/api/v3",
  },
};

module.exports = nextConfig;
