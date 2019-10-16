import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';
import Map from '../components/Map';
import Title from '../components/Title';
import { IoIosPhonePortrait } from 'react-icons/io';
import { IoIosPin } from 'react-icons/io';
import { IoMdTime } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';
import styles from '../styles/contact.module.css';

const kontakt = ({data}) => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <Hero img={data.contactBg.childImageSharp.fluid}/>
      <div className={styles.container}>
        <section className={styles.contact}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-offset="100"
          data-duration="1000"
          data-delay="1000">
        <Title title="Kontaktirajte nas" className={styles.title}/>
        <article className={styles.contact__map}>
          <Map />
        </article>
        <article className={styles.contact__details}
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            data-aos-delay="800"
            data-aos-offset="100">
          <div className={styles.contactItem}
            >
              <IoIosPhonePortrait className={styles.contactIcon}/>
              <a href="tel:+381112754118" className={styles.contactTel}>011/2754 118</a>
              <a href="tel:+381646687634" className={styles.contactTel}>064/6687 634</a>
          </div>
          <div className={styles.contactItem}
            >
              <IoIosMail className={styles.contactIcon}/>
            <a href="mailto:zlatara.alisa@gmail.com" className={styles.contactMail}>zlatara.alisa@gmail.com</a>
          </div>
          <div className={styles.contactItem}
            >
              <IoIosPin className={styles.contactIcon} />
              <p>Ruzveltova 37, Beograd</p>
          </div>
          <div className={styles.contactItem}
            >
            <IoMdTime className={styles.contactIcon} />
              <p className={styles.contactDays}>Ponedeljak - Petak</p>
              <span className={styles.contactHours}>09:00 - 17:00 časova</span>
              <p className={styles.contactDays}>Subota</p>
              <span className={styles.contactHours}>09:00 - 15:00 časova</span>
            </div >
          </article>
        </section>
      </div>
    </Layout>
  );
}

export default kontakt;

export const query = graphql`
{
  contactBg: file(relativePath: {eq: "bg-44.webp"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality:90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
