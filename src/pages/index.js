import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Slider from "react-slick";
import FeaturedProducts from '../components/FeaturedProducts';
import Intro from '../components/Intro';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/hero.module.css';

 const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  pauseOnHover: false,
  arrows: false,

};
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Početna" />
    <Slider {...settings}>
    {
      data.allFile.edges.map(({ node }, index) => {
        return <Hero home="true" img={node.childImageSharp.fluid} key={index}>
        <div className={styles.heroContentWrapper}>
          <h1 className={styles.heroContent}>tradicija i iskustvo</h1>
          <AniLink fade to="/proizvodi" className="btn">Naša ponuda</AniLink>
        </div>
        </Hero>
      })
    }
    </Slider>
    <Intro />
    <FeaturedProducts topSellers={true} newest={false} title="najprodavaniji proizvodi"/>
    <FeaturedProducts topSellers={false} newest={true} title="najnoviji proizvodi"/>
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

