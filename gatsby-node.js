const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostLayout = path.resolve('./src/components/post_layout.js');

  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allContentfulBlogPost.edges;

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.node.slug}/`,
      component: blogPostLayout,
      context: {
        slug: post.node.slug,
      },
    });
  });
};