const path = require('path');
exports.createPages = ({ boundActionCreators, graphql }) =>{
  const { createPage } = boundActionCreators

  const PostTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`
    {
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
    }
  `).then(res=> {
    if(res.errors){
      return Promise.reject(res.errors)
    }
    return res.data.allMarkdownRemark.edges.forEach(({ node })=>{
      createPage({
        path: node.frontmatter.path,
        component: PostTemplate
      })
    })
  })
}
