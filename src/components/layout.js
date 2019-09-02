import React from 'react'
import Header from '../components/Header';
import Container from '../styled-components/Container';
import '../styles/layout.css';

export default function Layout({children}) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}