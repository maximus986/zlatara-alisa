import React, {useState} from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import links from '../static-data/links';
import socialLinks from '../static-data/social-links';
import logo from '../images/logo.svg';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { MdFormatAlignRight } from 'react-icons/md';

const Header = ({ className }) => {
 const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return(
    <header className={className}>
      <div className="header-wrapper">
        <AniLink fade to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-icon"/>
        </AniLink>
        <nav className={
          isOpen ? `main-navbar show` : `main-navbar`
        }>
          <div className="main-navbar-header">
            <AniLink fade to="/" className="main-navbar-header__logo">
              <img src={logo} alt="Logo" className="logo-icon"/>
            </AniLink>
              <IoIosClose className="main-navbar-header__close" onClick={toggleNav}/>
          </div>
          <ul className="main-nav">
          {
            links.map((link, index) => {
              return (
                <li key={index} className="main-nav__item">
                  <AniLink fade to={link.path} className="main-nav__link" activeClassName="active">{link.text}</AniLink>
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
        </nav>
        <button className="nav-toggler" onClick={toggleNav}>
            <MdFormatAlignRight />
        </button>
      </div>
    </header>
  );
}

export default styled(Header)`
.header-wrapper {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1040;
  @media(min-width: 576px) {
    padding: 15px 60px;
  }
  @media(min-width: 992px) {
    padding: 15px 100px;
  }
  .logo {
    width: 100px;
    @media(min-width: 992px) {
      width: 120px;
    }
    @media(min-width: 1200px) {
      width: 140px;
    }
    @media(min-width: 1600px) {
      width: 150px;
    }
    &-icon {
      width: 100%;
    }
  }
  .main-navbar {
    position: absolute;
    top: 0;
    left: -100%;
    background: var(--main-white);
    width: 100vw;
    height: 100vh;
    padding: 15px 0;
    transition: 0.3s linear;
     @media(min-width: 768px) {
      position: static;
      top: auto;
      left: auto;
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
       @media(min-width: 576px) {
        padding: 0 60px;
      }
       @media(min-width: 768px) {
        display: none;
      }
      &__logo {
        width: 100px;
      }
      &__close {
        color: var(--main-color);
        font-size: 2.7rem;
        cursor: pointer;
      }
    }
    .main-nav {
      list-style: none;
      padding: 0 15px;
      list-style: none;
      height: 60vh;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-items: center;
      align-items: center;
      justify-content: center;
      @media(min-width: 768px) {
        height: auto;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: auto;
      }
      &__item {
        display: block;
        text-align: center;
        @media(min-width: 768px) {
          display: inline-block;
          &:not(:last-of-type) {
            margin-right: 20px;
          }
        }
        @media(min-width: 1200px) {
          display: inline-block;
          &:not(:last-of-type) {
            margin-right: 40px;
          }
        }
        @media(min-width: 1600px) {
          display: inline-block;
          &:not(:last-of-type) {
            margin-right: 50px;
          }
        }
      }
      &__link {
        color: var(--main-color);
        font-family: 'Raleway', sans-serif;
        font-size: 1.4rem;
        letter-spacing: 3px;
        text-transform: uppercase;
        padding: 15px 0;
        display: block;
        transition: 0.3s linear;
        &:hover,
        &.active {
          color: var(--main-dark);
        }

        @media(min-width: 768px) {
          font-size: 1rem;
          text-transform: capitalize;
          padding: 15px 0;
          display: inline-block;
          &:hover
        }
        @media(min-width: 1200px) {
          font-size: 1.1rem;
        }
      }
    }
    .social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      @media(min-width: 768px) {
        margin-top: 7px;
        margin-left: auto;
      }
      .social-link {
        color: var(--main-color);
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s linear;
        &:not(:last-of-type) {
          margin-right: 20px;
        }
        &:hover {
          color: var(--main-dark);
        }
        @media(min-width: 768px) {
          font-size: 1.5rem;
        }
        @media(min-width: 1200px) {
          font-size: 2rem;
        }
      }
    }
  }
  .show {
    transform: translateX(100%);
  }
  .nav-toggler {
    border: none;
    background: transparent;
    color: var(--main-color);
    margin: 0;
    font-size: 1.5rem;
    @media(min-width: 768px) {
      display: none;
    }
  }
}
`