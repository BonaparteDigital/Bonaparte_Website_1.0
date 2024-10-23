// src/components/RecentPosts.js
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoCalendar } from 'react-icons/go';

const RecentPosts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-2">
        <h2 className="text-4xl font-bold mb-6">Recent Articles</h2>
        {posts.map(({ node }) => (
          <div key={node.slug} className="mb-8 flex">
            <div className="w-1/3">
              {node.featuredImage ? (
                <GatsbyImage
                  image={node.featuredImage.gatsbyImageData}
                  alt={node.title}
                  className="rounded-lg"
                />
              ) : (
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </div>
            <div className="w-2/3 pl-4">
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
      {/* Sidebar */}
      <div className="col-span-1">
        <h2 className="text-4xl font-bold mb-6">Next in AI</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="w-full">
            <GatsbyImage
              image={posts[0].node.featuredImage.gatsbyImageData}
              alt={posts[0].node.title}
              className="rounded-lg"
            />
          </div>
          <div className="pt-4">
            <h3 className="text-xl font-bold mb-2">How This Content Marketer Uses AI</h3>
            <p className="text-gray-700 mb-4">This series exploring how professionals across industries are using AI at work.</p>
            <Link to={`/blog/${posts[0].node.slug}`} className="text-blue-500 hover:text-blue-700">Read More →</Link>
          </div>
        </div>
        {/* Placeholder cards in the sidebar */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Placeholder Card 1</h3>
          <p className="text-gray-700">Some placeholder content for the sidebar.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg font-bold mb-2">Placeholder Card 2</h3>
          <p className="text-gray-700">Some more placeholder content for the sidebar.</p>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;