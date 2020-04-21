import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Go back</Link>
      <hr/>
      <h1>{ post.frontmatter.title }</h1>
      <small>Posted by { post.frontmatter.author } on { post.frontmatter.date }</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}


export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        author
      }
    }
  }
`
