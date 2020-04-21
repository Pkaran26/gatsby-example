import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

const BlogPage = ({ data })=>{
  return(
    <Layout>
      <SEO title="Blog" />
      <h1>Latest Posts</h1>
      { data.allMarkdownRemark.edges.map((post, i)=>(
        <div key={ post.node.id }>
          <h3>{ post.node.frontmatter.title }</h3>
          <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
          <br/>
          <Link to={ post.node.frontmatter.path }>Read more</Link>
          <br/>
          <hr/>
          <br/>
        </div>
      )) }
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }`

export default BlogPage
