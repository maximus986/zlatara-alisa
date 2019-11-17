import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from "gatsby"

const Category = ({category, className}) => {
  return (
    <div className={className}>
      <article className="category">
        <Link to={`/${category.slug}`} className="category-link" title={category.category}>
          <figure className="category-img-wrapper">
            <Img fluid={category.image.fluid} className="category-img" alt={category.category} />
            </figure>
            <div className="category-mask">
              <p className="category-title">
                {category.category}
              </p>
            </div>
        </Link>
      </article>
    </div>
  );
}

export default styled(Category)`
  .category {
    overflow: hidden;
    position: relative;
    transition: .3s linear;
    &:hover {
      .category-img {
        transform: scale(1.3);
      }
      .category-mask {
        background: rgba(0, 0, 0, 0.5);
      }
    }
    @media (min-width: 576px) {
      margin-bottom: 15px;
    }
    &-link {

    }
    &-img-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 300px;
      @media (min-width: 576px) {
        width: 247px;
        height: 247px;
      }
      @media (min-width: 768px) {
        width: 330px;
        height: 330px;
      }
      @media (min-width: 992px) {
        width: 160px;
        height: 160px;
      }
      @media (min-width: 1200px) {
        width: 260px;
        height: 260px;
      }
    }
    &-img {
      width: 100%;
      height: 100%;
      transition: .3s linear;
    }
    &-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .3s linear;
    }
    &-title {
      width: 130px;
      text-align: center;
      /* position: absolute; */
      /* top: 50%; */
      /* left: 50%; */
      /* transform: translate(-50%, -50%); */
      font-size: 1.3rem;
      font-weight: 700;
      text-transform: capitalize;
      color: var(--main-white);
      letter-spacing: 1px;
      padding: 4px;
      background: rgba(212, 195, 109, 0.5);
    }
  }
`
