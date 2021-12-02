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
    "gatsby-plugin-sass",
    "gatsby-plugin-image"
  ],
};
