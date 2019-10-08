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
    return props.home ? '80vh' : '70vh'}
    };
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
