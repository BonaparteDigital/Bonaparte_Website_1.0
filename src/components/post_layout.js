import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Seo } from "../components/seo";

const BlogPostTemplate = ({ data }) => {
  const { title, publishedDate, body } = data.contentfulBlogPost
  const richTextDocument = JSON.parse(body.raw)

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-0">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-sm text-gray-600">{publishedDate}</p>
          <div>{documentToReactComponents(richTextDocument)}</div>
        </article>
        {/* Sidebars or other components can be added here */}
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { title, description } = data.contentfulBlogPost
  return (
    <Seo
      title={title  || "Bonaparte | Digital Strategist"}
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