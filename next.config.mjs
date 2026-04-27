/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-east-1.amazonaws.com",
        pathname: "/contents.newzenler.com/**",
      },
    ],
  },
};

export default nextConfig;
