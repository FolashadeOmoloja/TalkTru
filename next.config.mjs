/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"], // this makes mongoose actions work
    },
    images: { //fixes error from Unhandled Runtime Error with images
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
        {
          protocol: "https",
          hostname: "uploadthing.com",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
      ],
      typescript: {
        ignoreBuildErrors: true,
      },
    },
  };
  
  module.exports = nextConfig;