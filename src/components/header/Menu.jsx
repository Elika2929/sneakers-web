import React, { useContext } from 'react'
import styles from './Menu.module.css'
import { SideNavContext } from '../Contexts'

const Menu = () => {

  const [ showSideNav, setShowSideNav ] = useContext(SideNavContext);

  return (
   
    <span className={styles['menu-box']}>

    <svg className={styles.menu} onClick={() => setShowSideNav(true)}><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"/></svg>

    </span>

  )
}

export default Menu