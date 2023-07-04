const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  // get absolute paths for each content type
  for (let contentType of ["blogpost", "project"]) {
    const {
      data: {
        allFile: { nodes: paths },
      },
    } = await graphql(`
        query paths {
          allFile(filter: { sourceInstanceName: { eq: "${contentType}" } }) {
            nodes {
              absolutePath
            }
          }
        }
      `);
    console.log(contentType, paths);
    for (let pathToPage of paths) {
      let { data } = await graphql(`
    query data {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {eq: "${pathToPage.absolutePath}"}}
      ) {
          nodes {
            frontmatter {
              date
              slug
              title
            }
            html
          }
      }
    }
    `);

      data.allMarkdownRemark.nodes.forEach((node) => {
        actions.createPage({
          path: `/${contentType}s/` + node.frontmatter.slug,
          component: path.resolve(`./src/template/${contentType}-details.js`),
          context: { slug: node.frontmatter.slug },
        });
      });
    }
  }
};
