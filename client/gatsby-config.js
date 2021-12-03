module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby sanity boiler",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9w4zo7wb",
        dataset: "production",
        watchMode: true
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["./src/styles/core"],
        }
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-plugin-image"
  ],
};
