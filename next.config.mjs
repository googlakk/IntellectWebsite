/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "static.tildacdn.one",
          },
          {
            protocol: 'https',
            hostname: 'intellect.soulist.life',
          },
        ],
      },
};

export default nextConfig;
