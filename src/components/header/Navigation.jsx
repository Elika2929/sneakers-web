import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {

  return (

    <nav className={styles.nav}>

  <ul className={styles.list}>

    <li className={styles.items}>Collections</li>
    <li className={styles.items}>Men</li>
    <li className={styles.items}>Women</li>
    <li className={styles.items}>About</li>
    <li className={styles.items}>Contact</li>

  </ul>

    </nav>

  )

}

export default Navigation