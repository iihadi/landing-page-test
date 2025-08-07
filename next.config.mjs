/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'betway.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.betwaygroup.com',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/sign-in',
        destination: 'https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net/api/sign-in',
      },
    ]
  },
};

export default nextConfig;