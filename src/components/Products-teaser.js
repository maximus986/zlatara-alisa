import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import Title from './Title';
import Product from './Product';
import Container from '../styled-components/Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
    <span {...props}>{children}</span>
);

const settings = {
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  prevArrow: (
    <SlickButtonFix>
      <IoIosArrowBack />
    </SlickButtonFix>
  ),
  nextArrow: (
    <SlickButtonFix>
      <IoIosArrowForward />
    </SlickButtonFix>
  ),
  responsive: [
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
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
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
  ]
};

const ProductsTeaser = ({relatedProduct, className}) => {
  const data = graphql`
  {
    products: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          contentful_id
          title
          description
          category
          slug
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
  const filteredProducts = products.filter(product => {
    return product.node.category === relatedProduct;
  })

  return (
    <div className={className}>
      <section className="products-teaser">
      <Container>
        <Title title="slični proizvodi" />
          <Slider {...settings}>
          {
            filteredProducts.map((product) => {
              return <Product product={product.node} key={product.node.contentful_id}/>
            })
          }
          </Slider>
      </Container>
      </section>
    </div>
  );
}

export default styled(ProductsTeaser)`
  .products-teaser {
    padding: 40px 0;
    text-align: center;
    border-bottom: 1px solid var(--main-color);
    @media (min-width: 768px) {
      padding: 50px 0;
    }
    .slick-arrow {
      font-size: 1.6rem;
      line-height: 46px;
      position: absolute;
      z-index: 1000;
      top: 50%;
      width: 40px;
      height: 40px;
      color: rgba(51, 51, 51, 0.7);
      border-radius: 50%;
      text-align: center;
      background: rgba(212, 195, 109, 0.7);
      &:before {
        display: none;
      }
    }
    .slick-prev {
      left: -9px;
      @media (min-width: 576px) {
        left: -20px;
      }
      @media (min-width: 768px) {
        left: -18px;
      }
      @media (min-width: 1200px) {
        left: -16px;
      }
    }
    .slick-next {
      right: -9px;
      @media (min-width: 576px) {
        right: -20px;
      }
      @media (min-width: 768px) {
        right: -18px;
      }
      @media (min-width: 1200px) {
        right: -16px;
      }
    }
  }
`;


