import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/layout.css';

export default function Layout({children}) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}