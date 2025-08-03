/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'betway.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.betwaygroup.com',
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