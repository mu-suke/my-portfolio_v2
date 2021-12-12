/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:any',
        destination: '/',
      },
    ]
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
}
