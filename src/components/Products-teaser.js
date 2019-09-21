import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const ProductsTeaser = ({className}) => {
  return (
    <div className={className}>
      <section className="products-teaser">
        <Title title="najnovije" />
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
