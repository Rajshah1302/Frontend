module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/trending', 
        destination: 'https://pro-api.coingecko.com/api/v3/search/trending',
      },
      {
        source: '/api/crypto', 
        destination: 'https://pro-api.coingecko.com/api/v3/simple/price',
      },
    ];
  },
  images: {
    domains: ['coin-images.coingecko.com'], 
  },
};
