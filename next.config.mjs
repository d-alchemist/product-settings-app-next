/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.gravatar.com",
      },
    ],
  },
};

export default nextConfig;
