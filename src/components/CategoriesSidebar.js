import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const CategoriesSidebar = ({className}) => {
  const data = graphql`
  {
    categories: allContentfulCategory(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          contentful_id
          slug
          category
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
  const categories = response.categories.edges;
  console.log(categories);
  return (
    <div className={className}>
      <div className="sidebar">
        <h2 className="sidebar-title">Kategorije proizvoda</h2>
        <ul className="sidebar-list">
        {
          categories.map(category => {
            return (
            <li className="sidebar-list__item">
              <AniLink fade to={`/${category.node.slug}`} className="sidebar-list__item-link" activeClassName="active" key={category.node.contentful_id}>
                <h5 className="sidebar-list__item-link-title">{category.node.category}</h5>
              </AniLink>
            </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default styled(CategoriesSidebar)`
  .sidebar {
    padding-top: 10px;
    border: 1px solid var(--main-color);
    text-align: center;
    &-title {
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 20px;
    }
    &-list {
      list-style: none;
      &__item {

        &:not(:last-of-type) {
          border-bottom: 1px solid var(--main-color);
        }
        &:first-of-type {
          border-top: 1px solid var(--main-color);
        }
        &-link {
          display: block;
          padding: 14px 0;
          transition: 0.3s linear;
          &:hover,
          &.active {
            background: var(--main-color);
            color: var(--main-white);
          }
          /* .sidebar-img-wrapper {
            width: 250px;
            height: 170px;
            overflow: hidden;
          }
          &-img {
            width: 100%;
            height: 100%;
          } */
          &-title {
            color: var(--main-dark);
            font-size: 1.2rem;
            font-weight: 300;
          }
        }

      }
    }
  }
`
