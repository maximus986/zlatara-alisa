import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Hero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  );
}

export default styled(Hero)`
  background: ${props => props.home ? 'linear-gradient(rgba(212, 195, 109, 0.4), rgba(0, 0, 0, 0.7))' : 'none'};
  background-position: center;
  background-size: cover;
  height: ${props => props.home ? '100vh': '60vh'};
  opacity: 1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`
