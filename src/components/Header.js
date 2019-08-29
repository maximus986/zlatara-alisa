import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import links from '../static-data/links';
import socialLinks from '../static-data/social-links';
import logo from "../images/logo.png"
import styled from 'styled-components';
import { FaAlignRight } from "react-icons/fa";
import Container from '../styled-components/Container';

const Header = ({ className }) => {
  return(
    <header className={className}>
      <div className="header-top">
        <Container>
          <div className="info">
            <p className="info-item">Radno vreme: 09:00 - 17:00</p>
            <p className="info-item">Kontakt: 011/2754-118, 064/668-7634</p>
            <p className="info-item">Adresa: Ruzveltova 37, Beograd</p>
          </div>
        </Container>
      </div>
      <div className="main-header-wrapper">
      <Container>
      <div className="main-header">
        <AniLink fade to="/">
          <img src={logo} alt="Logo"/>
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
  .header-top {
    padding: 5px 0;
    background: var(--secondary-color);
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-item {
       font-size: 0.8rem;
      }
    }
  }
  .main-header-wrapper {
    padding: 15px 0;
    background: var(--main-dark);
    .main-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {

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
          text-transform: capitalize;
          letter-spacing: 3px;
        }
      }
    }
  }
`