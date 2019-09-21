import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import Title from './Title';
import Product from './Product';
import Container from '../styled-components/Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  infinite: true,
  margin: 20,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
};

const ProductsTeaser = ({className}) => {
  const data = graphql`
  {
    products: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          contentful_id
          title
          description
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
  `;
  const response = useStaticQuery(data);
  const products = response.products.edges;

  return (
    <div className={className}>
      <section className="products-teaser">
      <Container>
        <Title title="najnovije" />
          <Slider {...settings}>
          {
            products.map(product => {
              return <Product product={product.node} key={product.contentful_id}/>
            })
          }
          </Slider >
      </Container>
      </section>
    </div>
  );
}

export default styled(ProductsTeaser)`
  .products-teaser {
    padding: 30px 0;
    text-align: center;
  }
`;


