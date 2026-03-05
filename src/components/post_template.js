import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PostLayout from './post_layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Seo } from "../components/seo"
import '../styles/blog-post.css'

// Estimate reading time from Contentful rich text raw JSON
const getReadingTime = (raw) => {
  try {
    const extracted = JSON.parse(raw)
    const flatten = (nodes) =>
      nodes?.flatMap(n => n.value ? [n.value] : flatten(n.content)) || []
    const words = flatten(extracted.content).join(' ').trim().split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.ceil(words / 200))
  } catch {
    return null
  }
}

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
  return ctaData[category] || ctaData['Ads']
}

const BlogPostTemplate = ({ data }) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle') // idle | loading | success | error

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

  if (!data || !data.contentfulBlogPost) {
    return (
      <PostLayout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p>Blog post not found.</p>
        </div>
      </PostLayout>
    )
  }

  const { title, publishedDate, body, category, author, description, abstract, featuredImage } = data.contentfulBlogPost
  const richTextDocument = JSON.parse(body.raw)
  const readingTime = getReadingTime(body.raw)
  const ctaContent = getCTAContent(category)
  const heroImage = featuredImage ? getImage(featuredImage.gatsbyImageData) : null
  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://bonapartedigital.com'

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setNewsletterStatus('loading')
    try {
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/23706289/3968e95b-0467-46ab-a36f-882ef8f784ab',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [{ name: 'email', value: newsletterEmail }],
            context: {
              pageUri: pageUrl,
              pageName: title
            }
          })
        }
      )
      setNewsletterStatus(response.ok ? 'success' : 'error')
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <PostLayout>
      {/* Progress Bar - Fixed to top */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-[#EC8602] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Image */}
      {heroImage && (
        <div className="w-full aspect-[16/7] overflow-hidden">
          <GatsbyImage
            image={heroImage}
            alt={title}
            className="w-full h-full"
            style={{ maxHeight: '520px' }}
          />
        </div>
      )}

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 lg:px-8 py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-[#EC8602] transition-colors">Home</a>
          <span className="mx-2">→</span>
          <a href="/blog" className="hover:text-[#EC8602] transition-colors">Blog</a>
        </nav>

        {/* Category + Reading Time */}
        <div className="flex items-center gap-3 mb-5">
          {category && (
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-white bg-[#EC8602] rounded-full">
              {category}
            </span>
          )}
          {readingTime && (
            <span className="text-sm text-gray-500">{readingTime} min read</span>
          )}
        </div>

        {/* Title */}
        <h1
          className="text-4xl lg:text-5xl font-bold text-[#14271D] mb-4 leading-tight"
          style={{ textShadow: '-3px 3px 0 #EC8602' }}
        >
          {title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8 pb-8 border-b-2 border-[#EC8602]">
          <time dateTime={publishedDate}>{publishedDate}</time>
          <span>•</span>
          <span>By {author?.name || 'BONAPARTE'}</span>
        </div>

        {/* Abstract / Lead */}
        {(abstract || description) && (
          <div className="mb-10 pl-5 border-l-4 border-[#EC8602]">
            <p className="text-xl text-[#14271D] font-semibold leading-relaxed">
              {abstract || description}
            </p>
          </div>
        )}

        {/* Main Content */}
        <div className="blog-content prose prose-lg max-w-none">
          {documentToReactComponents(richTextDocument)}
        </div>

        {/* Author Card */}
        {author && (
          <div className="mt-16 flex flex-col sm:flex-row gap-6 items-start p-6 bg-[#14271D] text-white" style={{ boxShadow: '-6px 6px 0 #EC8602' }}>
            {author.photo && (
              <GatsbyImage
                image={getImage(author.photo.gatsbyImageData)}
                alt={author.name}
                className="w-20 h-20 rounded-full flex-shrink-0 object-cover"
              />
            )}
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#EC8602] mb-1">Written by</p>
              <h3 className="text-xl font-bold text-white mb-0.5">{author.name}</h3>
              {author.jobTitle && (
                <p className="text-sm text-[#C0D22D] font-semibold mb-3">{author.jobTitle}</p>
              )}
              {author.bio?.raw && (
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{author.bio.raw}</p>
              )}
              <div className="flex gap-3">
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-[#EC8602] hover:text-white transition-colors"
                  >
                    LinkedIn →
                  </a>
                )}
                {author.twitter && (
                  <a
                    href={author.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-[#EC8602] hover:text-white transition-colors"
                  >
                    X →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </article>

      {/* Full-Width CTA Section */}
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

      {/* Bottom Sections */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8">

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Share this article</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#14271D] hover:bg-black text-[#C0D22D] font-semibold rounded transition-colors text-sm"
            >
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#14271D] hover:bg-black text-[#C0D22D] font-semibold rounded transition-colors text-sm"
            >
              Share on LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#14271D] hover:bg-black text-[#C0D22D] font-semibold rounded transition-colors text-sm"
            >
              Share on Facebook
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 bg-[#14271D] text-white" style={{ boxShadow: '-6px 6px 0 #EC8602' }}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EC8602] mb-2">Free Intelligence</p>
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">Stay Ahead of the Curve</h3>
            <p className="text-gray-300 mb-6">
              Get the latest digital marketing strategies and insights delivered to your inbox. No fluff — just results.
            </p>
            {newsletterStatus === 'success' ? (
              <div className="py-4 px-6 bg-[#C0D22D] text-[#14271D] font-bold rounded">
                You're in. Welcome to the dispatch.
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EC8602]"
                  required
                  disabled={newsletterStatus === 'loading'}
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="px-6 py-3 bg-[#EC8602] hover:bg-[#d47902] disabled:opacity-60 text-white font-bold rounded transition-colors whitespace-nowrap"
                >
                  {newsletterStatus === 'loading' ? 'Sending...' : 'Subscribe'}
                </button>
              </form>
            )}
            {newsletterStatus === 'error' && (
              <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>

        {/* Related / Recent Posts */}
        {data.relatedPosts && data.relatedPosts.nodes.length > 0 && (
          <div className="mt-16 pt-12 pb-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-[#14271D] mb-8">
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
                    <div className="mb-4 overflow-hidden rounded aspect-video" style={{ boxShadow: '-4px 4px 0 #EC8602' }}>
                      <img
                        src={post.featuredImage.file.url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div>
                    {post.category && (
                      <span className="inline-block px-2 py-0.5 text-xs font-bold tracking-widest uppercase text-[#EC8602] bg-[#EC8602]/10 rounded-full mb-2">
                        {post.category}
                      </span>
                    )}
                    <h4 className="font-bold text-[#14271D] group-hover:text-[#EC8602] transition-colors leading-snug mb-2">
                      {post.title}
                    </h4>
                    {post.abstract && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {post.abstract}
                      </p>
                    )}
                    <time className="text-xs text-gray-400">{post.publishedDate}</time>
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
        jobTitle
        bio {
          raw
        }
        linkedin
        twitter
        photo {
          gatsbyImageData(layout: FIXED, width: 80, height: 80, quality: 90)
        }
      }
      featuredImage {
        gatsbyImageData(layout: FULL_WIDTH, quality: 90)
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
