import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';

const kontakt = ({data}) => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <Hero home="true" img={data.contactBg.childImageSharp.fluid}/>
    </Layout>
  );
}

export default kontakt;

export const query = graphql`
{
  contactBg: file(relativePath: {eq: "bg-1.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality:90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
