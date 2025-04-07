/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "static.tildacdn.one",
          },
        ],
      },
};

export default nextConfig;
