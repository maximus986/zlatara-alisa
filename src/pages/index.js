import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Početna" />
    <Hero home="true" img={data.defaultBg.childImageSharp.fluid}/>
  </Layout>

)
export default IndexPage

export const query = graphql`
{
  defaultBg: file(relativePath: {eq: "bg-4.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality:90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

