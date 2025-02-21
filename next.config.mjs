/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "woost.io",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "www.opa.marketing",
      },
      {
        protocol: "https",
        hostname: "kits.moitalk.com",
      },
    ],
  },
};

export default nextConfig;
