import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import links from '../static-data/links';
import socialLinks from '../static-data/social-links';
import logo from '../images/logo.svg';
import styled from 'styled-components';
import Container from '../styled-components/Container';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="footer">
        <ul className="footer-links">
          {
            links.map((link, index) => {
              return (
                <li key={index} className="footer-links__item">
                  <AniLink fade to={link.path} className="footer-links__link" activeClassName="active">{link.text}</AniLink>
                </li>
              );
            })
          }
        </ul>
        <div className="social-icons">
          {
            socialLinks.map((link, index) => {
              return (
                <a href={link.url} key={index} className="social-link" target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              )
            })
          }
        </div>
        <div className="copyrights">
          <h5 className="copyrights-title">
            zlatara alisa n
          </h5>
          <h5 className="copyrights-title">
            &copy;all rights reserved 2019
          </h5>
        </div>
      </div>
    </footer>
  );
}

export default styled(Footer)`
  .footer {
    background: var(--main-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 65px 0;

    &-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      &__item {
        &:not(:last-of-type) {
          margin-bottom: 15px;
        }
       @media (min-width: 768px) {
        &:not(:last-of-type) {
          margin-bottom: 0;
          margin-right: 20px;
        }
      }
    }
      &__link {
        color: var(--main-color);
        font-family: 'Raleway', sans-serif;
        font-size: 1.1rem;
        letter-spacing: 3px;
        text-transform: uppercase;
        transition: 0.3s linear;
        &:hover {
          color: var(--main-white);
        }
      }
    }
    .social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      .social-link {
        color: var(--main-color);
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s linear;
        margin-bottom: 30px;
        &:not(:last-of-type) {
          margin-right: 20px;
        }
        &:hover {
          color: var(--main-white);
        }
        @media(min-width: 768px) {
          font-size: 1.5rem;
        }
        @media(min-width: 1200px) {
          font-size: 2rem;
        }
      }
    }
    .copyrights {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &-title {
        color: var(--main-color);
        font-family: 'Raleway', sans-serif;
        font-size: 1.1rem;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-weight: 400;
        &:not(:last-of-type) {
          margin-bottom: 10px;
        }
      }
    }
  }
`
