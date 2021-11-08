require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Jamstack-virtual-lolly",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: `Lolly`,
        // This is the field under which it's accessible
        fieldName: `lollies`,
        // URL to query from
        url: `https://jamstack-virtual-lolly.netlify.app/.netlify/functions/v_lolly_server`,
      },
    },
  ],
};
