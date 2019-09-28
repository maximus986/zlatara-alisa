import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Product = ({product, className}) => {
  console.log(product);
  return (
    <div className={className}>
    <article className="product">
      <AniLink fade to="/" className="product-link">
        <h5 className="product-title">
          {product.title}
        </h5>
        <figure className="product-img-wrapper">
          <Img fluid={product.image.fluid} className="product-img" />
        </figure>
        <p className="product-description">
          {product.description}
        </p>
      </AniLink>
    </article>

    </div>
  );
}

export default styled(Product)`
  .product {
    width: 260px;
    min-height: 480px;
    margin: 0 auto;
    padding: 30px 15px;
    border: 1px solid var(--main-color);
    font-family: 'Raleway', sans-serif;
    color: var(--main-dark);
    transition: 0.3s linear;
    &:hover {
      box-shadow: 0px 1px 6px 1px #ccc;
    }
    &-link {
      color: var(--main-dark);
    }
    &-title {
      font-weight: 300;
      font-size: 1.2rem;
      margin-bottom: 50px;
      &:after {
        content: "";
        width: 60px;
        height: 1px;
        display: block;
        background: var(--main-color);
        margin: 15px auto 0;
      }
    }
    &-img-wrapper {
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 30px;
      img {
        max-width: 100%;
      }
    }
    &-description {
      font-weight: 300;
      font-size: 1rem;
    }
    .gatsby-image-wrapper {
      width: 300px
    }
    @media (min-width: 576px) {
      width: 240px;
    }
    @media (min-width: 768px) {
      width: 220px;
    }
    @media (min-width: 1200px) {
      width: 260px;
    }
  }
`;
