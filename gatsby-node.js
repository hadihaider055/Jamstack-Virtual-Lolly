const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query MyQuery {
      lollies {
        lollies {
          lollyPath
          message
          recipientName
          sender
          colorTop
          colorMiddle
          colorBottom
        }
      }
    }
  `);

  result.data.lollies.lollies.map(async (lolly) => {
    console.log(lolly);
    await actions.createPage({
      path: `/v_lolly/${lolly.lollyPath}`,
      component: path.resolve("./src/templates/lollyTemplate.tsx"),
      context: {
        lolly: lolly,
      },
    });
  });
};
