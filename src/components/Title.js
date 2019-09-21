import React from 'react';
import styled from 'styled-components';

const Title = ({title, className}) => {
  return (
    <div className={className}>
      <h2 className="title">
        {title}
      </h2>
    </div>
  );
}

export default styled(Title)`
.title {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 5px;
  text-transform: uppercase;
  padding-bottom: 15px;
  margin-bottom: 40px;
  color: var(--main-dark);
  &:after {
    content: "";
    width: 60px;
    height: 1px;
    display: block;
    background: var(--main-color);
    margin: 15px auto 0;
  }
}
`;
