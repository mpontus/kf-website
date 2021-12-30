module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'kf-website',
    longTitle: 'kf-website',
    description: 'kf-website',
    author: 'kf-website',
  },
  siteMetadata: {},
  flags: {
    FAST_REFRESH: true,
  },
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-ts',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Manrope:400,600', 'Questrial:400'],
      },
    },
  ],
}
