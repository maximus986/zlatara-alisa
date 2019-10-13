import styled from 'styled-components';

const Container = styled.div`
  padding: 0 15px;
  @media (min-width: 576px) {
    width: 540px;
    margin: 0 auto
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1140px;
  }
  @media (min-width: 1600px) {
    width: 1200px;
  }
`

export default Container;