/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/custom-diamonds",
      },
    ];
  },
};

export default nextConfig;
