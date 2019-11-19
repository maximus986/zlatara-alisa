import React, {Component} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Slider from "react-slick";
import FeaturedProducts from '../components/FeaturedProducts';
import Intro from '../components/Intro';
import { Link } from "gatsby"
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
class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Početna" />
        <Slider {...settings}>
        {
          this.props.data.allFile.edges.map(({ node }, index) => {
            return <Hero home="true" img={node.childImageSharp.fluid} key={index} alt={node.name}>
            <div className={styles.heroContentWrapper}>
              <h1 className={styles.heroContent}>tradicija i iskustvo</h1>
              <Link to="/proizvodi" className="btn">Naša ponuda</Link>
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
    }
  }

export default (props) => {
  const data = useStaticQuery(graphql`
{
  allFile(filter: {relativeDirectory: {eq: "Slider-images"}}) {
    edges {
      node {
        name
        childImageSharp {
          fluid(maxWidth: 4160, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`)
return <IndexPage {...props} data={data} />
}

