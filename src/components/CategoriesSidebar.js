import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Link } from "gatsby"

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
  return (
    <div className={className}>
      <div className="sidebar">
        <h2 className="sidebar-title">Kategorije proizvoda</h2>
        <ul className="sidebar-list">
        {
          categories.map(category => {
            return (
            <li className="sidebar-list__item" key={category.node.contentful_id}>
              <Link to={`/${category.node.slug}`} className="sidebar-list__item-link" activeClassName="active" >
                <h5 className="sidebar-list__item-link-title">{category.node.category}</h5>
              </Link>
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
    border: 1px solid var(--main-color);
    text-align: center;
    box-shadow: 0px 1px 6px 1px #ccc;
    &-title {
      font-size: 1.5rem;
      font-weight: 400;
      padding: 14px 0;
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
            background: rgba(212,195,109,0.3);;
            color: var(--main-white);
          }
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
