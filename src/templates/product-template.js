import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import styled from 'styled-components';
import Container from '../styled-components/Container';
import ProductTeaser from '../components/Products-teaser';


const productTemplate = ({ data, className }) => {
  console.log(data);
  const { title, description, image } = data.product;
  return (
    <div className={className}>
      <Layout >
      <section className="single-product">
        <Container>
          <div className="product">
            <Img fluid={image.fluid} className="product__img"/>
            <div className="product-details">
              <h2 className="product-details__title">{title}</h2>
              <p className="product-details__description">{description}</p>
            </div>
          </div>
          </Container>
        </section>
        <ProductTeaser />
      </Layout>
    </div>
  );
}

export default styled(productTemplate)`
.single-product {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 30px 0;
    .product {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      @media(min-width: 576px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      @media(min-width: 1200px) {
        justify-content: center;
      }
      &__img {
        width: 100;
        max-width: 100%;
        @media(min-width: 576px) {
          width: 45%;
          margin-right: 2.5%;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
        @media(min-width: 1200px) {
          width: 30%;
          margin-right: 5%;
        }
      }
      &-details {
        @media(min-width: 576px) {
          width: 45%;
          margin-left: 2.5%;
        }
        @media(min-width: 1200px) {
          width: 30%;
          margin-left: 5%;
        }
        &__title {
          font-weight: 300;
          margin-bottom: 1rem;
          display: inline-block;
            &:after {
            content: "";
            width: 60px;
            height: 1px;
            display: block;
            background: var(--main-color);
            margin: 15px auto 0;
          }
        }
        &__description {

      }
    }
  }
   .gatsby-image-wrapper {
      width: 500px;
    }
  }
}
`

export const query = graphql`
  query($slug: String) {
  product: contentfulProduct(slug: { eq: $slug }) {
    title
    description
    image {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
}
`