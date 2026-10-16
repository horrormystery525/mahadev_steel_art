import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.jdmagicbox.com" },
      { protocol: "https", hostname: "content.jdmagicbox.com" },
      { protocol: "https", hostname: "img.magicpin.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
