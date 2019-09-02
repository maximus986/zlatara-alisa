import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';

const kontakt = ({data}) => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <Hero home="" img={data.defaultBg.childImageSharp.fluid}/>
    </Layout>
  );
}

export default kontakt;

export const query = graphql`
  {
  defaultBg: file(relativePath: {eq: "bg-2.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality:90) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
