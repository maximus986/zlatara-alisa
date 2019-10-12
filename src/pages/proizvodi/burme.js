import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Container from '../../styled-components/Container';
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Product from '../../components/Product';
import CategoriesSidebar from '../../components/CategoriesSidebar';
import styled from 'styled-components';

const burme = ({data, className, pageContext: {
    breadcrumb: { crumbs },
  }}) => {
  const products = data.products.edges;
  return (
    <Layout>
      <SEO title="Burme" />
      <Container>
      <div className={className}>
        <div className="breadcrumbs">
          <Breadcrumb
            crumbs={crumbs}
            crumbSeparator="/"
            crumbLabel={crumbs[2].crumbLabel}
          />
        </div>
          <section className="products">
          <article className="products-sidebar">
            <CategoriesSidebar />
          </article>
          <article className="products-list">
              {
                products.map((product) => {
                  return <Product product={product.node} key={product.node.contentful_id} className="product"/>
                })
              }
            </article>
          </section>
        </div>
      </Container>
    </Layout>
  );
}

export default styled(burme)`
  .products {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 30px 0;
    &-sidebar {
      display: none;
      @media (min-width: 1200px) {
        display: block;
        flex-basis: 24%;
      }
    }
    &-list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      text-align: center;
      @media (min-width: 576px) {
        justify-content: space-between;
      }
      @media (min-width: 1200px) {
        flex-basis: 73%;
      }
      @media (min-width: 1600px) {
        flex-basis: 70%;
      }
      .product {
        flex-basis: 100%;
        &:not(:last-of-type) {
          margin-bottom: 15px;
        }
        @media (min-width: 576px) {
          flex-basis: auto;
          &:last-of-type {
            margin-bottom: 15px;
          }
        }
        @media (min-width: 1200px) {
          &:last-of-type {
            justify-self: flex-start;
          }
        }
      }
    }
  }
  .breadcrumbs {
    display: none;
    margin-top: 20px;
    background: rgba(212, 195, 109, 0.3);
    padding: 4px 8px;
    @media(min-width: 576px) {
      display: block;
    }
    & > div {
      display: flex;
      .breadcrumb {
        color: var(--main-dark);
        font-size: 1rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        &__link {
          color: var(--main-dark);
          transition: 0.3s linear;
          &:hover {
            color: var(--main-color);
          }
          &__active {
            color: var(--main-dark);
            font-weight: 700;
            &:hover {
              color: var(--main-dark);
              font-weight: 700;
            }
          }
        }
      }
    }
  }
`

export const query = graphql`
  query {
  products: allContentfulProduct(
    filter: { category: { eq: "burme" }, node_locale: { eq: "en-US" } }
  ) {
    edges {
      node {
        contentful_id
        title
        description
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
`
