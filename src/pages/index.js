import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Slider from "react-slick";
import ProductsTeaser from '../components/Products-teaser';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  pauseOnHover: false
};

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Početna" />
    <Slider {...settings}>
    {
      data.allFile.edges.map(({ node }, index) => {
        return <Hero home="true" img={node.childImageSharp.fluid} key={index} />
      })
    }
    </Slider>
    <ProductsTeaser />
  </Layout>
)
export default IndexPage

export const query = graphql`
{
  allFile(filter: {relativeDirectory: {eq: "Slider-images"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 4160, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

