import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import PostLayout from './post_layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Seo } from "../components/seo"
import '../styles/blog-post.css'

const BlogPostTemplate = ({ data }) => {
  // Progress bar state - MUST be at the top, before any conditionals
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(scrollPercentage, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add safety check for data AFTER hooks
  if (!data || !data.contentfulBlogPost) {
    return (
      <PostLayout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p>Blog post not found.</p>
        </div>
      </PostLayout>
    )
  }

  // Contentful connection
  const { title, publishedDate, body, category, author, description } = data.contentfulBlogPost
  const richTextDocument = JSON.parse(body.raw)
  
 // Dynamic CTA content based on category
  const getCTAContent = (category) => {
    const ctaData = {
      'Ads': {
        title: 'Need Help With Ads?',
        description: 'If you would like support setting up or managing your advertising, BONAPARTE offers performance-driven services tailored to small businesses.',
        primaryLink: 'https://services.bonapartedigital.com/digital-advertising',
        primaryText: '📩 Book a FREE Strategy Session ($149 value)',
        secondaryLink: 'https://services.bonapartedigital.com/ads-checklist',
        secondaryText: 'Download FREE Ads Checklist'
      },
      'SEO': {
        title: 'Need Help With SEO?',
        description: 'If you would like support optimizing your website and improving your search rankings, BONAPARTE offers proven SEO strategies that deliver results.',
        primaryLink: 'https://services.bonapartedigital.com/seo-services',
        primaryText: '📩 Book a FREE SEO Audit ($199 value)',
        secondaryLink: 'https://services.bonapartedigital.com/seo-checklist',
        secondaryText: 'Download FREE SEO Checklist'
      },
      'Social Media': {
        title: 'Need Help With Social Media?',
        description: 'If you would like support building your brand presence and engaging your audience, BONAPARTE offers strategic social media management services.',
        primaryLink: 'https://services.bonapartedigital.com/social-media',
        primaryText: '📩 Book a FREE Strategy Session ($149 value)',
        secondaryLink: 'https://services.bonapartedigital.com/social-checklist',
        secondaryText: 'Download FREE Social Media Guide'
      },
      'Content Marketing': {
        title: 'Need Help With Content Marketing?',
        description: 'If you would like support creating compelling content that converts, BONAPARTE offers content strategy and creation services tailored to your goals.',
        primaryLink: 'https://services.bonapartedigital.com/content-marketing',
        primaryText: '📩 Book a FREE Strategy Session ($149 value)',
        secondaryLink: 'https://services.bonapartedigital.com/content-checklist',
        secondaryText: 'Download FREE Content Calendar Template'
      },
      'Branding': {
        title: 'Need Help With Branding?',
        description: 'If you would like support building a powerful brand that stands out, BONAPARTE offers comprehensive branding and positioning services.',
        primaryLink: 'https://services.bonapartedigital.com/branding',
        primaryText: '📩 Book a FREE Brand Consultation ($199 value)',
        secondaryLink: 'https://services.bonapartedigital.com/brand-checklist',
        secondaryText: 'Download FREE Brand Strategy Guide'
      }
    }

    // Default to Ads if category not found
    return ctaData[category] || ctaData['Ads']
  }

  const ctaContent = getCTAContent(category)

  return (
    <PostLayout>
      {/* Progress Bar - Fixed to bottom */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-[#EC8602] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

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
          <span>By {author?.name || 'BONAPARTE'}</span>
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
            {ctaContent.title}
          </h2>
          <hr className="border-t-4 border-[#EC8602] w-full mb-8" />
          <p className="text-lg text-[#14271D] mb-6">
            {ctaContent.description.split('BONAPARTE').map((part, index, arr) => (
              <React.Fragment key={index}>
                {part}
                {index < arr.length - 1 && (
                  <a href="https://bonapartedigital.com" className="text-[#EC8602] font-semibold underline hover:text-[#d47902]">
                    BONAPARTE
                  </a>
                )}
              </React.Fragment>
            ))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={ctaContent.primaryLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EC8602] hover:bg-[#d47902] text-white font-semibold rounded transition-colors"
            >
              {ctaContent.primaryText}
            </a>
            <a 
              href={ctaContent.secondaryLink}
              className="inline-flex items-center px-6 py-3 border-2 border-[#14271D] hover:bg-[#14271D] hover:text-white text-[#14271D] font-semibold rounded transition-colors"
            >
              {ctaContent.secondaryText}
            </a>
          </div>
        </div>
      </section>

      {/* Back to content-width container */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
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

        {/* Related/Recent Posts */}
        {data.relatedPosts && data.relatedPosts.nodes.length > 0 && (
          <div className="mt-16 pt-12 pb-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {category ? 'Related Articles' : 'Recent Articles'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.relatedPosts.nodes.map((post) => (
                <a
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group"
                >
                  {post.featuredImage && (
                    <div className="mb-4 overflow-hidden rounded-lg aspect-video">
                      <img
                        src={post.featuredImage.file.url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div>
                    {post.category && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#EC8602] bg-[#EC8602]/10 rounded-full mb-2">
                        {post.category}
                      </span>
                    )}
                    <h4 className="font-bold text-gray-900 group-hover:text-[#EC8602] transition-colors leading-snug mb-2">
                      {post.title}
                    </h4>
                    {post.abstract && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {post.abstract}
                      </p>
                    )}
                    <div className="flex items-center text-xs text-gray-500">
                      <time>{post.publishedDate}</time>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </PostLayout>
  )
}

export const Head = ({ data }) => {
  const { title, description, abstract } = data.contentfulBlogPost
  return (
    <Seo
      title={title || "Bonaparte | Digital Strategist"}
      description={description || abstract || "We're your strategic partners in branding and digital domination. Forget buzzwords—we deliver hard-hitting results that stand the test of time."}
    />
  )
}

export const query = graphql`
  query($slug: String!, $category: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        raw
      }
      description
      abstract
      category
      author {
        name
      }
    }
    relatedPosts: allContentfulBlogPost(
      filter: { 
        slug: { ne: $slug }
        category: { eq: $category }
      }
      limit: 3
      sort: { publishedDate: DESC }
    ) {
      nodes {
        title
        slug
        category
        abstract
        publishedDate(formatString: "MMM DD, YYYY")
        featuredImage {
          file {
            url
          }
        }
      }
    }
  }
`

export default BlogPostTemplate