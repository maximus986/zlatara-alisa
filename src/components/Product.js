import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Product = ({product, className}) => {
  console.log(product);
  return (
    <div className={className}>
    <article className="product">
      <AniLink fade to="/" className="product">
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
    margin: 0 15px;
  }
`;
