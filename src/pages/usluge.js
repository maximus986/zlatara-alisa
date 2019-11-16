import React, {Fragment} from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';
import Title from '../components/Title';
import Container from '../styled-components/Container';
import ServiceItem from '../components/ServiceItem';
import diamond from '../images/favicon.png';
import services from '../static-data/services';
import styles from '../styles/services.module.css';

export default function usluge ({data}) {
  return (
    <Layout>
      <SEO title="Usluge" />
      <Hero img={data.servicesBg.childImageSharp.fluid}/>
      <section className={styles.services}>
        <Container>
          <Title title="Naše usluge" />
          <article className={styles.servicesItems}>
          {
            services.map(service => {
              return (
                <div key={service.id}>
                  <div className={styles.serviceCategory}>
                    <figure className={styles.serviceCategoryImgWrapper}>
                      <img src={diamond} alt="Dijamant" className={styles.serviceCategoryImg}/>
                    </figure>
                    <h5 className={styles.serviceCategoryTitle}>{service.category}</h5>
                  </div>
                  <Fragment>
                    <div className={styles.serviceCategoryItems}>
                    {
                      service.services.map(service => {
                        return (
                            <ServiceItem service={service} key={service.id}/>
                            )
                          })
                        }
                    </div>
                  </Fragment>
                </div>
              )
            })
          }
          </article>
        </Container>
      </section>
    </Layout>

  );
}

export const query = graphql`
{
  servicesBg: file(relativePath: {eq: "bg-33.webp"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality:90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
