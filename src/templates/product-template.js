import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import styled from 'styled-components';
import Container from '../styled-components/Container';


const productTemplate = ({ data, className }) => {
  console.log(data);
  const { title, description, image } = data.product;
  return (
    <div className={className}>
      <Layout >
        <Container>
          <h1>{title}</h1>
          <p>{description}</p>
          <Img fluid={image.fluid} className="img"/>
        </Container>
      </Layout>
    </div>
  );
}

export default styled(productTemplate)`
  h1 {
    color: red;
  }
  .img {
    width: 30%;
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