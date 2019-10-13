const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
  products: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
    totalCount
    edges {
      node {
        slug
      }
    }
  }
  categories: allContentfulCategory(filter: { node_locale: { eq: "en-US" } }) {
    edges {
      node {
        slug
      }
    }
  }
}
  `)
  data.products.edges.forEach(({node}) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/product-template.js'),
      context: {
        slug: node.slug
      }
    })
  })
  data.categories.edges.forEach(({node}) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/category-template.js'),
      context: {
        slug: node.slug
      }
    })
  })
}
