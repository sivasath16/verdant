import type { NextConfig } from "next";

const config: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
    images: {
        domains: ['images.unsplash.com']
    },
    typescript: {
        ignoreBuildErrors: true,
      }
}

export default config;
