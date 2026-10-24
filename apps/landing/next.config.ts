import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  transpilePackages: ['@zakath-online/ui-web']
};

export default nextConfig;
