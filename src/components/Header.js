import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import links from '../static-data/links';
import socialLinks from '../static-data/social-links';
import logo from "../images/logo.svg"
import styled from 'styled-components';
import { FaAlignRight } from "react-icons/fa";
import Container from '../styled-components/Container';

const Header = ({ className }) => {
  return(
    <header className={className}>
      <div className="main-header-wrapper">
        <Container>
          <div className="main-header">
            <AniLink fade to="/" className="logo-link">
              <img src={logo} alt="Logo" className="logo" />
            </AniLink>
            <button type="button" className="toggle-btn">
                <FaAlignRight className="toggle-btn__icon" />
              </button>
            <nav className="navbar">
              <ul className="main-nav">
                {
                  links.map((link, index) => {
                    return (
                      <li key={index} className="main-nav__item">
                        <AniLink fade to={link.path} className="main-nav__link">{link.text}</AniLink>
                      </li>
                    )
                  })
                }
              </ul>
            </nav>
            <div className="social-icons">
                {
                  socialLinks.map((link, index) => {
                    return (
                      <a key={index} href={link.url} className="social-link" target="_blank">{link.icon}</a>
                    )
                  })
                }
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default styled(Header)`
  .main-header-wrapper {
    padding: 15px 0;
    .main-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo-link {
        width: 130px;
          .logo {
            width: 100%;
          }
        }
      }
       .toggle-btn {
        display: none;
      }
      .main-nav {
        display: flex;
        align-items: center;
        list-style: none;
        &__item {
          &:not(:last-of-type) {
            margin: 0 20px;
          }
        }
        &__link {
          color: var(--main-color);
          font-family: 'Cabin', sans-serif;
          text-transform: capitalize;
          letter-spacing: 3px;
        }
      }
    }
    .social-icons {
      display: flex;
      align-items: center;
      margin-top: 8px;
      .social-link {
        color: var(--main-color);
        font-size: 1.5rem;
        &:not(:last-of-type) {
          margin-right: 1.5rem;
        }
      }
    }
  }
`