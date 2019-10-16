import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Container from '../styled-components/Container';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Intro = ({className}) => {
  return (
    <div className={className}>
      <section className="intro"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-offset="100"
        data-duration="1000"
        data-delay="2500">
      <Container>
          <Title title="spoj tradicije, kvaliteta i posvećenosti" />
          <p className="intro-content" >
            Preko 40 godina za vas kreiramo raznovrsne komade nakita. Sa velikom
            ljubavlju i pažnjom ulepšavamo sve vaše posebne trenutke...
          </p>
          <AniLink fate to="/o-nama" className="btn">Naša priča</AniLink>
        </Container>
      </section>
    </div>
  );
}

export default styled(Intro)`
  .intro {
    padding: 40px 0;
    border-bottom: 1px solid var(--main-color);
    text-align: center;
    @media(min-width: 768px) {
      padding: 50px 0;
    }
    &-content {
      margin-bottom: 35px;
      letter-spacing: 1px;
      font-size: 1.1rem;
      @media(min-width: 576px) {
        width: 85%;
        margin: 0 auto 35px;
      }
      @media(min-width: 768px) {
        width: 70%;
      }
      @media(min-width: 992px) {
        width: 80%;
      }
      @media(min-width: 1200px) {
        width: 57%;
      }
    }
  }
`
