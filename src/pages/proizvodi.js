import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';

export default function proizvodi({data}) {
  return (
    <Layout>
      <SEO title="Proizvodi" />
      <Hero home="true" img={data.productsBg.childImageSharp.fluid}/>
    </Layout>

  )
}

export const query = graphql`
{
  productsBg: file(relativePath: {eq: "bg-6.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality:90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
