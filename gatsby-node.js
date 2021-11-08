// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   console.log(graphql, actions);
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
//   console.log("data from gatsby-node", result);

//   result.data.lollies.lollies.map(async ({ lollyPath }) => {
//     console.log("lollyPath", lollyPath);
//     await actions.createPage({
//       path: `/v_lolly/${lollyPath}`,
//       component: path.resolve("./src/templates/lollyTemplate.tsx"),
//       context: {
//         lollyPath: lollyPath,
//       },
//     });
//   });
// };
