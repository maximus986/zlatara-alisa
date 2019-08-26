import React from 'react'
import styles from '../styles/layout.module.scss'

export default function Layout({children}) {
  return (
    <div>
    <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
      {children}
    </div>
  )
}