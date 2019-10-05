import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';
import Map from '../components/Map';
import Container from '../styled-components/Container';
import styles from '../styles/contact.module.css';

const kontakt = ({data}) => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <Hero img={data.contactBg.childImageSharp.fluid}/>
      <Container className={styles.container}>
        <section className={styles.contact}>
          <article className={styles.contact__details}>
            <h2 className={styles.contact__details__title}>Kontakt</h2>
          </article>
          <article className={styles.contact__map}>
            <Map />
          </article>
        </section>
      </Container>
    </Layout>
  );
}

export default kontakt;

export const query = graphql`
{
  contactBg: file(relativePath: {eq: "bg-44.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality:90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
