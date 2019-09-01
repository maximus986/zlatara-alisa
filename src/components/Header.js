import React, {useState} from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import links from '../static-data/links';
import socialLinks from '../static-data/social-links';
import logo from '../images/logo.svg';
import styled from 'styled-components';
import { FaAlignRight } from "react-icons/fa";
import { IoIosClose, IoIosMenu } from 'react-icons/io';
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
                  <AniLink fade to={link.path} className="main-nav__link">{link.text}</AniLink>
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
    padding: 0 60px;
  }
  .logo {
    width: 100px;
    &-icon {
      width: 100%;
    }
  }
  .main-navbar {
    position: absolute;
    top: 0;
    left: -100%;
    background: var(--main-dark);
    width: 100vw;
    height: 100vh;
    padding: 15px 0;
    transition: 0.5s linear;
     @media(min-width: 768px) {
      position: static;
      top: auto;
      left: auto;
      background: var(--main-white);
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
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
      }
      &__item {
        display: block;
        text-align: center;
        @media(min-width: 768px) {
          display: inline-block;
        }
      }
      &__link {
        color: var(--main-color);
        font-family: 'Cabin', sans-serif;
        font-size: 1.3rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: 15px 0;
        display: block;
        transition: 0.3s ease-in;
        &:hover {
          color: var(--main-white);
        }
        @media(min-width: 768px) {
          font-size: 1rem;
          letter-spacing: 0;
          text-transform: capitalize;
          padding: 15px 0;
          display: inline-block;
          &:hover {
            color: var(--main-dark);
          }
        }
      }
    }
    .social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      @media(min-width: 768px) {
        margin-top: 6px;
      }
      .social-link {
        color: var(--main-color);
        font-size: 2rem;
        cursor: pointer;
        &:not(:last-of-type) {
          margin-right: 20px;
          transition: 0.3s ease-in;
        }
        &:hover {
          color: var(--main-white);
        }
        @media(min-width: 768px) {
          &:hover {
            color: var(--main-dark);
          }
        }
      }
    }
  }
  .show {
    left: 0;
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