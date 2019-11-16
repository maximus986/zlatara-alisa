import React,{ Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedProducts from '../components/FeaturedProducts';
import Title from '../components/Title';
import Container from '../styled-components/Container'
import styles from '../styles/404.module.css';
import { Link } from "gatsby"

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="404: Stranica ne postoji" />
        <section className={styles.notFound}>
          <Container>
            <Title title="Stranica ne postoji" />
            <div className={styles.notFoundInfo}>
              <h3 className={styles.title}>Zahtevana stranica nije pronađena.</h3>
              <Link to="/" className={styles.link}>
                <span className={styles.linkText}>Možete se vratiti na početnu starnu.</span>
              </Link>
              <p className={styles.teaser}>Ili bacite pogled na naše najprodavanije i najnovije proizvode.</p>
            </div>
          </Container>
        </section>
        <FeaturedProducts topSellers={true} newest={false} title="najprodavaniji proizvodi"/>
        <FeaturedProducts topSellers={false} newest={true} title="najnoviji proizvodi"/>
      </Layout>
    )
  }
}

export default NotFoundPage
