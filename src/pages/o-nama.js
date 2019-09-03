import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';

const oNama = ({data}) => {
  return (
    <Layout>
      <SEO title="O nama" />
      <Hero home="true" img={data.aboutBg.childImageSharp.fluid}/>
    </Layout>
);
}

export default oNama;
export const query = graphql`
{
  aboutBg: file(relativePath: {eq: "bg-2.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality:90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`