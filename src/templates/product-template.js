import React, {useState} from 'react';
import { graphql } from 'gatsby';
import FsLightbox from 'fslightbox-react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import styled from 'styled-components';
import Container from '../styled-components/Container';
import ProductTeaser from '../components/Products-teaser';
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import FeaturedProducts from '../components/FeaturedProducts';

const productTemplate = ({ data, className, pageContext: {
    breadcrumb: { crumbs },
  }}) => {
  const [toggler, setToggler] = useState(false);
  const { title, description, image, category } = data.product;
  return (
    <div className={className}>
      <Layout >
      <Container>
      <div className="breadcrumbs">
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator="/"
          crumbLabel={crumbs[3].crumbLabel}
        />
      </div>
      </Container>
      <section className="single-product">
        <Container>
          <div className="product">
          <FsLightbox
            toggler={ toggler }
            sources={ [
              `${image.fluid.src}`
            ] }
            />
            <div className="product__img" onClick={ () => setToggler(!toggler) }
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-offset="0"
              data-aos-delay="800"
              data-aos-duration="600">
              <Img fluid={image.fluid}/>
            </div>
            <div className="product-details"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-offset="0"
              data-aos-delay="800"
              data-aos-duration="600">
              <h2 className="product-details__title">{title}</h2>
              <p className="product-details__description">{description}</p>
            </div>
          </div>
          </Container>
        </section>
        <ProductTeaser relatedProduct={category} />
        <FeaturedProducts topSeller={true} newest={false} title="najprodavaniji proizvodi"/>
        <FeaturedProducts topSeller={false} newest={true} title="najnoviji proizvodi"/>
      </Layout>
    </div>
  );
}

export default styled(productTemplate)`
.single-product {
  border-bottom: 1px solid var(--main-color);
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
  @media (min-width: 1200px) {
    padding: 90px 0;
  }
  @media (min-width: 992px) {
    padding: 70px 0;
  }
    .product {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      @media(min-width: 576px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
      @media(min-width: 1200px) {
        justify-content: center;
      }
      &__img {
        width: 100%;
        max-width: 400px;
        cursor: pointer;
        @media(min-width: 576px) {
          width: 45%;
          margin-right: 2.5%;
          border: 1px solid var(--main-color);
        }
        @media(min-width: 1200px) {
          width: 40%;
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
  }
   .gatsby-image-wrapper {
      width: 100%
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
  query($slug: String) {
  product: contentfulProduct(slug: { eq: $slug }) {
    title
    description
    category
    image {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
}
`