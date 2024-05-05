import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout";

export default function PostLayout({children}) {

  const data = useStaticQuery(graphql`
query PostLayoutQuery {
  allMdx(sort: {frontmatter: {date: DESC}}, limit: 6) {
    edges {
      node {
        frontmatter {
          title
          date
        }
      }
    }
  }
}
 `)
   const posts = allMdx.edges.filter(({ node }) => !location.pathname.includes(node.slug))
 
  return (
<div>
        <main>
            {children}
            <h3>Latest posts</h3>
            <ul>
                {posts.map(({ node }) => <li key={node.slug}>
                    <Link to={`/blog/${node.slug}`}>
                        {node.frontmatter.title}
                    </Link>
                </li>)}
            </ul>
        </main>
    </div>
  );
};