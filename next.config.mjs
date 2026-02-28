/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Add other domains you use
      {
        protocol: "https",
        hostname: "**.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
