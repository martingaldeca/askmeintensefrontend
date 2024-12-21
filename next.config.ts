import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
