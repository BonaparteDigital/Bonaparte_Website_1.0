import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoCalendar } from 'react-icons/go';

const FeaturedArticles = ({ posts }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-6">Top SEO Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(({ node }) => (
          <div key={node.slug} className="bg-white p-4 rounded-lg shadow-md">
            <Link to={`/blog/${node.slug}`}>
              {node.featuredImage ? (
                <GatsbyImage
                  image={node.featuredImage.gatsbyImageData}
                  alt={node.title}
                  className="rounded-t-lg"
                />
              ) : (
                <div className="h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </Link>
            <div className="p-4">
              <Link to={`/blog/${node.slug}`}>
                <h3 className="text-xl font-bold mb-2">{node.title}</h3>
              </Link>
              <ul className="flex text-gray-600 text-sm space-x-2 mb-4">
                <li><AiOutlineClockCircle /> 3 Min Read</li>
                <li><GoCalendar /> {node.publishedDate}</li>
              </ul>
              <p className="text-gray-700 mb-4">{node.abstract.childMarkdownRemark.excerpt}</p>
              <Link to={`/blog/${node.slug}`} className="text-blue-500 hover:text-blue-700">Read More →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;