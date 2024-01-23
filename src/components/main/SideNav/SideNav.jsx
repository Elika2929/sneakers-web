import React, { useContext } from 'react'
import styles from './SideNav.module.css'
import { SideNavContext } from '../../Contexts';

const SideNav = () => {

    const [ showSideNav, setShowSideNav ] = useContext(SideNavContext);

  return (

   <nav className={styles.nav}>

   <section className={styles.section}> 

    <span className={styles['icon-box']}>

    <svg className={styles['close-icon']} onClick={() => setShowSideNav(false)}><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fillRule="evenodd"/></svg>

    </span>
    
    <ul className={styles.list}>

    <li className={styles.items}>Collections</li>
    <li className={styles.items}>Men</li>
    <li className={styles.items}>Women</li>
    <li className={styles.items}>About</li>
    <li className={styles.items}>Contact</li>

    </ul>

    </section>
 

   </nav>

  )
}

export default SideNav