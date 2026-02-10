import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",          // Enables static export
  images: {
    unoptimized: true,       // Prevents image optimization errors during export
  },
};

export default nextConfig;
