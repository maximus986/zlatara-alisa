import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Container from '../styled-components/Container';
import SEO from '../components/seo';
import styles from '../styles/about.module.css';

const oNama = ({data}) => {
  return (
    <Layout>
      <SEO title="O nama" />
      <Hero img={data.aboutBg.childImageSharp.fluid} alt={data.aboutBg.name}/>
      <section className={styles.about}>
        <Container>
          <Title title="ovo je naša priča" />
          <article className={styles.aboutContent}>
            <p className={styles.aboutContentItem}>
              Još davne 1972. godine Nuhi Husnijar osnovao je časovničarsko-zlatarsku radnju.
              I dan danas ovaj porodični posao obavljamo revnosno, predano i profesionalno.
              Delatnost radnje proširena je 2001. godine.
            </p>
            <p className={styles.aboutContentItem}>
              Bavimo se servisom, popravkom i prodajom svih vrsta časovnika: ručnih (analognih i kvarcnih),
              zidnih, stonih i kaminskih. Vršimo zamenu kaiša i narukvica, poliranje i zamenu stakla na časovnicima.
            </p>
            <p className={styles.aboutContentItem}>
              Po veoma povoljnim cenama kod nas možete izvršiti zamenu starog zlata za novo, ali i doneti nam lomljeno zlato
              jer se bavimo i otkupom. Izlazimo Vam u susret i ispunjavamo Vaše želje praveći sve vrste nakita po narudžbini.
              Pored nakita kod nas možete naručiti i kovane zlatnike, sve po Vašoj ideji.
            </p>
            <p className={styles.aboutContentItem}>
              Kod nas možete pronaći veliki izbor prstenja, burmi, ogrlica, narukvica, privezaka, lančića, satova, minđuša...
              Verujemo da ćete naći nešto što odražava Vašu ličnost.
              Pored kupovine kod nas možete Vašem nakitu vratiti stari sjaj, jer nudimo i usluge poliranja,
              ao i zamenu i fasovanje (postavljanje) kamenja na nakitu.
            </p>
          </article>
        </Container>
    </section>
  </Layout>
);
}

export default oNama;
export const query = graphql`
query {
  aboutBg: file(relativePath: { eq: "bg-11.webp" }) {
    name
    childImageSharp {
      fluid(maxWidth: 4160, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`