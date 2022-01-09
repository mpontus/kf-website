module.exports = {
  siteMetadata: {
    siteUrl: `https://kf-web.netlify.app`,
    title: `kf-website`,
    titleTemplate: `%s - kf-website`,
    description:
      'k/factory is a software studio building open source software powering the financial system of tomorrow',
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
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-lever`,
      options: {
        site: `centrifuge`,
        verboseOutput: false,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
