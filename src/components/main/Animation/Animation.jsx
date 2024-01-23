import React from 'react'
import styles from './Animation.module.css'

const Animation = () => {

  return (

    <div className={styles.loader}>
  <div className={`${styles.inner} ${styles['one']}`}></div>
  <div className={`${styles.inner} ${styles['two']}`}></div>
  <div className={`${styles.inner} ${styles['three']}`}></div>
    </div>

  )
}

export default Animation