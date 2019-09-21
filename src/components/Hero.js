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
  min-height: ${props => {
    return props.home ? '60vh' : '50vh'}
    };
  /* background: ${props => props.home ? 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))' : 'none'}; */
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`
