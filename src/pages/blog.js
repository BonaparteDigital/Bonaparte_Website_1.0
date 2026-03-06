import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import { Link } from 'gatsby';

const CategoryBadges = ({ category }) => {
  if (!category) return null;
  const cats = Array.isArray(category) ? category : [category];
  return (
    <div className="flex gap-2 flex-wrap">
      {cats.map((cat) => (
        <span
          key={cat}
          className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-white bg-[#EC8602] rounded-full"
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { publishedDate: DESC }, limit: 10) {
        edges {
          node {
            title
            id
            slug
            publishedDate(formatString: "MMM D, YYYY")
            abstract
            category
            featuredImage {
              file { url }
            }
          }
        }
      }
    }
  `);

  const posts = data.allContentfulBlogPost.edges.map((e) => e.node);
  const hero = posts[0];
  const pair = posts.slice(1, 3);
  const grid = posts.slice(3);

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-[#14271D] py-16 px-4">
        <div className="container">
          <p className="text-[#EC8602] text-xs font-bold uppercase tracking-widest mb-3">
            Bonaparte Intelligence
          </p>
          <h1
            className="text-6xl lg:text-8xl font-bold text-white leading-none"
            style={{ textShadow: '-4px 4px 0 #EC8602' }}
          >
            Strategic<br />Dispatch
          </h1>
          <p className="text-[#C0D22D] text-lg mt-5 max-w-lg leading-relaxed">
            No fluff. No buzzwords. Just hard-hitting digital strategy for businesses that want to win.
          </p>
        </div>
      </div>

      <div className="container py-12 lg:py-16">

        {/* ── HERO ── */}
        {hero && (
          <Link to={`/blog/${hero.slug}`} className="group block mb-14">
            <div
              className="bg-[#14271D] flex flex-col lg:flex-row overflow-hidden"
              style={{ boxShadow: '-8px 8px 0 #EC8602' }}
            >
              {/* Image */}
              {hero.featuredImage && (
                <div className="lg:w-[58%] overflow-hidden h-64 lg:h-auto lg:min-h-[420px]">
                  <img
                    src={`${hero.featuredImage.file.url}?w=1200&h=630&fit=fill&q=80`}
                    alt={hero.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              )}
              {/* Content */}
              <div className="lg:w-[42%] p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-[#EC8602] text-xs font-bold uppercase tracking-widest mb-4">
                  ★ Featured
                </p>
                <CategoryBadges category={hero.category} />
                <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-4 leading-tight group-hover:text-[#C0D22D] transition-colors duration-300">
                  {hero.title}
                </h2>
                {hero.abstract && (
                  <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3">
                    {hero.abstract}
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <time className="text-xs text-gray-500 uppercase tracking-widest">
                    {hero.publishedDate}
                  </time>
                  <span className="text-[#EC8602] font-bold text-sm group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    Read Now →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* ── SECTION LABEL ── */}
        {pair.length > 0 && (
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Latest Stories
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
        )}

        {/* ── PAIR ROW ── */}
        {pair.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {pair.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block bg-white overflow-hidden"
                style={{ boxShadow: '-5px 5px 0 #EC8602' }}
              >
                {post.featuredImage && (
                  <div className="overflow-hidden h-56">
                    <img
                      src={`${post.featuredImage.file.url}?w=800&h=450&fit=fill&q=80`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <CategoryBadges category={post.category} />
                  <h3 className="text-xl font-bold text-[#14271D] mt-3 mb-2 leading-snug group-hover:text-[#EC8602] transition-colors duration-300">
                    {post.title}
                  </h3>
                  {post.abstract && (
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                      {post.abstract}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-gray-400 uppercase tracking-widest">
                      {post.publishedDate}
                    </time>
                    <span className="text-[#EC8602] text-xs font-bold group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ── GRID ── */}
        {grid.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-8 mt-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                More from the Dispatch
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grid.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group block bg-white overflow-hidden border border-gray-100 hover:border-[#EC8602] transition-colors duration-300"
                >
                  {post.featuredImage && (
                    <div className="overflow-hidden h-44">
                      <img
                        src={`${post.featuredImage.file.url}?w=600&h=340&fit=fill&q=80`}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <CategoryBadges category={post.category} />
                    <h3 className="text-base font-bold text-[#14271D] mt-2 mb-3 leading-snug group-hover:text-[#EC8602] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <time className="text-xs text-gray-400 uppercase tracking-widest">
                      {post.publishedDate}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* ── NEWSLETTER CTA ── */}
        <div
          className="mt-16 bg-[#14271D] p-10 lg:p-16 text-center"
          style={{ boxShadow: '-6px 6px 0 #EC8602' }}
        >
          <p className="text-[#EC8602] text-xs font-bold uppercase tracking-widest mb-3">
            Weekly Intelligence
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get the Dispatch in your inbox
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            No fluff — just actionable strategy, straight to you.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EC8602]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#EC8602] hover:bg-[#d47902] text-white font-bold transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
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
