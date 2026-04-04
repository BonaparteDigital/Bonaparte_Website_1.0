const path = require('path');

// Replace gatsby-plugin-react-svg with @svgr/webpack directly.
// Mirrors the plugin's own logic: add an SVGR rule for assets/, then
// exclude assets/ SVGs from Gatsby's default images/url-loader rule.
exports.onCreateWebpackConfig = ({ stage, actions, getConfig, rules }) => {
  const include = /assets/;

  if (['develop', 'develop-html', 'build-html', 'build-javascript'].includes(stage)) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.svg$/,
            include,
            use: [{
              loader: '@svgr/webpack',
              options: {
                // Strip width/height attributes so SVGs scale freely via CSS className.
                // The viewBox is preserved so aspect ratio is maintained.
                svgoConfig: {
                  plugins: [{ name: 'removeDimensions' }],
                },
              },
            }],
          },
        ],
      },
    });

    const cfg = getConfig();
    const imgsRule = rules.images();

    cfg.module.rules = [
      ...cfg.module.rules.filter(rule => {
        if (rule.test) {
          return rule.test.toString() !== imgsRule.test.toString();
        }
        return true;
      }),
      { ...imgsRule, exclude: include },
    ];

    actions.replaceWebpackConfig(cfg);
  }
};

// Ensure slug is part of the ContentfulBlogPost type
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type ContentfulBlogPost implements Node {
      slug: String
    }
  `);
};

// Create pages for each blog post
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Redirect old ads-checklist URL to new Resources section
  createRedirect({
    fromPath: "/services/ads-checklist",
    toPath: "/resources/ads-checklist",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/services/ads-checklist/",
    toPath: "/resources/ads-checklist/",
    isPermanent: true,
  });

  const blogPostLayout = path.resolve('./src/components/post_template.js');

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