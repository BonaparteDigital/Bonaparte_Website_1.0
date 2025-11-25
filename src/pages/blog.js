import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Blog = () => {
  const data = useStaticQuery(
    graphql`
    query {
      allContentfulBlogPost(sort: { publishedDate: DESC }, limit: 5) {
        edges {
          node {
            title
            id
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
            abstract
            featuredImage {
              gatsbyImageData(layout: CONSTRAINED, width: 800, height: 400)
            }
            category
          }
        }
      }
    }
  `  
  );

  const posts = data.allContentfulBlogPost.edges;
  const featuredPost = posts[0];  // Newest article
  const remainingPosts = posts.slice(1);  // Other posts

  return (
    <Layout>
      {/* Title Only */}
      <div className="hero w-full flex items-center justify-center text-black py-2">
        <h1 className="text-7xl font-bold font-mullish" style={{ textShadow: '-4px 4px 0 #EC8602' }}>strategic dispatch</h1>
      </div>

      {/* Main Section */}
      <div className="container mx-auto py-8 px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Featured Article */}
          <div className="lg:w-2/3 mb-10" style={{ boxShadow: '-8px 8px 0 #EC8602' }}>
            {featuredPost && (
              <div className="bg-white shadow-md p-6">
                {featuredPost.node.featuredImage && (
                  <div className="-m-6 mb-0 overflow-hidden">
                    <GatsbyImage image={getImage(featuredPost.node.featuredImage.gatsbyImageData)}
                    alt={featuredPost.node.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                )}
                <Link to={`/blog/${featuredPost.node.slug}`} className="text-green font-semibold hover:text-olive">
                  <h2 className="text-4xl font-bold font-mullish my-4">{featuredPost.node.title}</h2>
                </Link>
                <p className="text-gray-700 mb-6">{featuredPost.node.abstract}</p>
                <p className="text-gray-500 mb-4">{featuredPost.node.publishedDate}</p>
              </div>
            )}
          </div>
          {/* Sidebar - Recent Articles */}
          <div className="lg:w-1/3">
            <div className="bg-gray-100 p-4">
              <h3 className="text-2xl font-bold font-mullish mb-2">recent articles</h3>
              <div className="w-10 h-1 bg-blue-500 mb-4"></div>
              <ul className="space-y-4">
                {remainingPosts.map(({ node }) => (
                  <li key={node.id}>
                    <Link to={`/blog/${node.slug}`} className="flex items-center space-x-4 hover:bg-gray-200 p-2">
                      {node.featuredImage && (
                        <GatsbyImage
                          image={getImage(node.featuredImage.gatsbyImageData)}
                          alt={node.title}
                          className="w-16 h-16 object-cover rounded-md m-0"
                        />
                      )}
                      <div>
                        <p className="text-gray-500 text-sm">{node.publishedDate}</p>
                        <h4 className="text-lg font-semibold font-mullish text-blue-600 hover:text-blue-800">{node.title}</h4>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export const Head = () => (
  <Seo
    title="Bonaparte | Strategic Dispatch"
    description="Your source for strategic insights and actionable digital marketing advice."
    robots="index, follow"
  />
);