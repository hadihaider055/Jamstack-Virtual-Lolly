const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const result = await graphql(`
//     query MyQuery {
//       lollies {
//         lollies {
//           lollyPath
//           message
//           recipientName
//           sender
//           colorTop
//           colorMiddle
//           colorBottom
//         }
//       }
//     }
//   `);

//   result.data.lollies.lollies.map(async (lolly) => {
//     console.log(lolly.lollyPath);
//     await actions.createPage({
//       path: `/v_lolly/${lolly.lollyPath}`,
//       component: path.resolve("./src/templates/lollyTemplate.tsx"),
//       context: {
//         lolly: lolly,
//       },
//     });
//   });
// };

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/v_lolly/)) {
    page.matchPath = "/v_lolly/*";

    createPage(page);
  }
};
