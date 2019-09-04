import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 const settings = {
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  speed: 700,
  fade: true,
  cssEase: 'linear'
};

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Početna" />
    <Slider {...settings}>
      <Hero home="true" img={data.defaultBg.childImageSharp.fluid}/>
      <Hero home="true" img={data.defaultBg.childImageSharp.fluid}/>
      <Hero home="true" img={data.defaultBg.childImageSharp.fluid}/>
    </Slider>
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

