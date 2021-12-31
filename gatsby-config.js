module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `kf-website`,
  },
  siteMetadata: {},
  flags: {
    FAST_REFRESH: true,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-ts`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Manrope:300,600`, `Questrial:300`],
        display: `swap`,
      },
    },
  ],
}
