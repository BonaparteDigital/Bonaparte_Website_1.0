import React from 'react'
import { graphql } from 'gatsby'
import PostLayout from './post_layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Seo } from "../components/seo"
import '../styles/blog-post.css'

const BlogPostTemplate = ({ data }) => {
  // Add safety check for data
  if (!data || !data.contentfulBlogPost) {
    return (
      <PostLayout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p>Blog post not found.</p>
        </div>
      </PostLayout>
    )
  }
  const { title, publishedDate, body } = data.contentfulBlogPost
  const richTextDocument = JSON.parse(body.raw)

  return (
    <PostLayout>
      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-yellow-600 transition-colors">Home</a>
          <span className="mx-2">→</span>
          <a href="/blog" className="hover:text-yellow-600 transition-colors">Blog</a>
        </nav>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <time dateTime={publishedDate}>{publishedDate}</time>
          <span>•</span>
          <span>By BONAPARTE</span>
        </div>

        {/* Main Content */}
        <div className="blog-content prose prose-lg max-w-none">
          {documentToReactComponents(richTextDocument)}
        </div>

      </article>

      {/* Full-Width CTA Section - Outside article for full width */}
      <section className="w-full bg-gradient-to-r from-[#C5D86D] to-[#B8CC5A] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#14271D] mb-4">
            Need Help With Ads?
          </h2>
          <hr className="border-t-4 border-[#EC8602] w-full mb-8" />
          <p className="text-lg text-[#14271D] mb-6">
            If you'd like support setting up or managing your advertising, <a href="https://bonapartedigital.com" className="text-[#EC8602] font-semibold underline hover:text-[#d47902]">BONAPARTE</a> offers performance-driven services tailored to small businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://services.bonapartedigital.com/digital-advertising"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EC8602] hover:bg-[#d47902] text-white font-semibold rounded transition-colors"
            >
              📩 Book a FREE Strategy Session ($149 value)
            </a>
            <a 
              href="https://services.bonapartedigital.com/ads-checklist"
              className="inline-flex items-center px-6 py-3 border-2 border-[#14271D] hover:bg-[#14271D] hover:text-white text-[#14271D] font-semibold rounded transition-colors"
            >
              Download FREE Ads Checklist
            </a>
          </div>
        </div>
      </section>

      {/* Back to content-width container */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8">

        {/* Author/Company Info Box - Removed since CTA above replaces it */}
        <div className="mt-16 p-8 bg-gray-50 border-l-4 border-yellow-600 rounded-r">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                About Bonaparte Digital
              </h3>
              <p className="text-gray-700 mb-4">
                We're your strategic partners in branding and digital domination. 
                Forget buzzwords—we deliver hard-hitting results that stand the test of time.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://services.bonapartedigital.com/digital-advertising"
                  className="inline-block px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded transition-colors"
                >
                  Work With Us
                </a>
                <a 
                  href="/blog"
                  className="inline-block px-6 py-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-semibold rounded transition-colors"
                >
                  More Articles
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-4">Share this article:</p>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors text-sm"
            >
              Share on Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors text-sm"
            >
              Share on LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded transition-colors text-sm"
            >
              Share on Facebook
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Ahead of the Curve</h3>
            <p className="text-gray-300 mb-6">
              Get the latest digital marketing strategies and insights delivered to your inbox.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </PostLayout>
  )
}

export const Head = ({ data }) => {
  const { title, description } = data.contentfulBlogPost
  return (
    <Seo
      title={title || "Bonaparte | Digital Strategist"}
      description={description || "We're your strategic partners in branding and digital domination. Forget buzzwords—we deliver hard-hitting results that stand the test of time."}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        raw
      }
    }
  }
`
export default BlogPostTemplate