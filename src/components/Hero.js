import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Hero = ({ img, className, children, home, alt}) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home} alt={alt}>
      {children}
    </BackgroundImage>
  );
}

export default styled(Hero)`
  min-height: ${props => {
    return props.home ? '70vh' : '70vh'}
    };
    background: ${props => {
      return props.home ? 'linear-gradient(to right, rgba(0, 0 , 0 , 0.3), rgba(0, 0 , 0 , 0.3))' : 'none'
    }};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  width: 100%;
`
