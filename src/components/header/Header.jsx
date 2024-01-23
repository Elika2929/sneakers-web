import React from 'react'
import Logo from './Logo'
import styles from  './Header.module.css';
import Navigation from './Navigation';
import UserPanel from './UserPanel';
import Menu from './Menu';


const Header = () => {
  return (
    
    <header className={styles.header}>

      <Menu />
      
      <Logo />

      <Navigation />

      <UserPanel />


    </header>
  )
}

export default Header