import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './ProductImage.module.css'
import { ImageNavContext, LightboxContext, LoadImageContext } from '../../Contexts'
import ImageNavArrows from './ImageNavArrows';
import Animation from '../Animation/Animation';


const ProductImage = ({ src }) => {

  
  const [ currentImg, setCurrentImg ] = useContext(ImageNavContext);

  const [ showLightbox, setShowLightbox ] = useContext(LightboxContext);

  const [ loading, setLoading ] = useContext(LoadImageContext);

 
  const clickHandler = e => {

   setShowLightbox({value: true, src:`${e.target.src}`, index: currentImg})

  }

 
 


  return (
    
    <figure className={styles.figure}>
    
    <img className={`${styles.img} ${loading ? styles.hide : styles.show}`} src={src} alt={`Product-image ${currentImg}`} onClick={clickHandler} onLoad={() => setLoading(false)}/>

   { loading &&  <Animation /> }

    <ImageNavArrows />

    </figure>
 
  )
}

export default ProductImage