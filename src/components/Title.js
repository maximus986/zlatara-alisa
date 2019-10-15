import React from 'react';
import styled from 'styled-components';
import diamond from '../images/favicon.png';

const Title = ({title, className}) => {
  return (
    <div className={className}>
      <h2 className="title">
        {title}
        <figure className="title-img-wrapper">
          <img src={diamond} alt="Diamond" className="title-img"/>
        </figure>
      </h2>
    </div>
  );
}

export default styled(Title)`
.title {
  font-size: 1.8rem;
  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 70px;
  }
  font-weight: 300;
  letter-spacing: 5px;
  text-transform: uppercase;
  padding-bottom: 15px;
  margin-bottom: 50px;
  color: var(--main-dark);
  position: relative;
  &-img-wrapper {
    display: block;
    position: absolute;
    bottom: -30%;
    left: 50%;
    transform: translateX(-50%);
    &:after,
    &:before {
      content: "";
      width: 60px;
      height: 1px;
      position: absolute;
      top: 11px;
      display: block;
      background: var(--main-color);
    }
    &:after {
      left: 30px;
    }
    &:before {
      right: 30px;
    }
    @media (min-width:576px) {
      bottom: -30px;
      &:after,
      &:before {
        width: 90px;
        top: 13px;
      }
    }
  }
  &-img {
    width: 25px;
  }

  }
`;
