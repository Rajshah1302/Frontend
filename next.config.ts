module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://pro-api.coingecko.com/api/v3/search/trending',
      },
    ];
  },
  images: {
    domains: ['coin-images.coingecko.com'],
  },
};
