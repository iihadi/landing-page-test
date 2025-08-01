const nextConfig = {
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