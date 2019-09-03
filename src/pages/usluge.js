import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';

const usluge = ({data}) => {
  return (
    <Layout>
      <SEO title="Usluge" />
      <Hero home="true" img={data.servicesBg.childImageSharp.fluid}/>
    </Layout>

  );
}

export default usluge;
export const query = graphql`
{
  servicesBg: file(relativePath: {eq: "bg-3.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality:90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
