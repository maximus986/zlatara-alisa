import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';
import Category from '../components/Category';
import Container from '../styled-components/Container';
import styles from '../styles/products.module.css';

export default function proizvodi({data}) {
  const categories = data.category.edges;
  return (
    <Layout>
      <SEO title="Proizvodi" />
      <Hero img={data.productsBg.childImageSharp.fluid} />
      <Container>
        <section className={styles.categories}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-offset="100"
          data-aos-duration="500"
          data-aos-delay="800">
          {
            categories.map((category, key) => {
              return <Category category={category.node} key={category.node.contentful_id} />
            })
          }
        </section>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  category: allContentfulCategory(filter: { node_locale: { eq: "en-US" } }) {
    edges {
      node {
        contentful_id
        slug
        category
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
  productsBg: file(relativePath: { eq: "bg-22.webp" }) {
    childImageSharp {
      fluid(maxWidth: 4160, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
