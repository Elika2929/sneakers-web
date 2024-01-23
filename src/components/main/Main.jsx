import React, { useContext, useState } from 'react'
import ImageGallery from './ImageGallery/ImageGallery'
import styles from './Main.module.css'
import ImageDetails from './ImageDetails/ImageDetails'
import Cart from './Cart/Cart'
import Lightbox from './Lightbox/Lightbox'
import { LightboxContext, CartContext, SideNavContext } from '../Contexts'
import SideNav from './SideNav/SideNav'



const Main = () => {
  
const [ showLightbox, setShowLightbox ] = useState({value: false, src:'', index: undefined});

const [ showCart, setShowCart ] = useContext(CartContext);

const [ showSideNav, setShowSideNav ] = useContext(SideNavContext);


  return (

    <LightboxContext.Provider value={[showLightbox, setShowLightbox]}>

   

    <main className={styles.main}>
      
      <ImageGallery />

    

      <ImageDetails />

    {showCart && <Cart />}

    {showLightbox.value && <Lightbox />}

    { showSideNav &&  <SideNav /> }

    </main>

    
    </LightboxContext.Provider>

  )
}


export default Main