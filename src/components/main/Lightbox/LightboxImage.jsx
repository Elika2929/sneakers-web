import React, { useContext, useEffect } from 'react'
import styles from './LightboxImage.module.css'
import { LightboxContext } from '../../Contexts'
import Animation from '../Animation/Animation'

const LightboxImage = ({src, index, loading, setLoading}) => {

  const [ showLightbox, setShowLightbox ] = useContext(LightboxContext);

  const images = [

    './assets/images/image-product-1.jpg',
    './assets/images/image-product-2.jpg',
    './assets/images/image-product-3.jpg',
    './assets/images/image-product-4.jpg'
  
   ]

   const prevClickhandler = () => {

    index = index === 1 ? 5 : index;
    
    setLoading(true);
    setShowLightbox({value: true, src: images[index - 2], index: index - 1})

   }

   const nextClickhandler = () => {

    index = index === 4 ? 0 : index;
    
    setLoading(true);
    setShowLightbox({value: true, src: images[index], index: index + 1})

   }

   
  
  return (

    <figure className={styles.figure}>

    <img src={src} alt={`Product-image ${index}`} className={`${styles.img} ${loading ? styles.hide : styles.show}`} onLoad={() => setLoading(false)}/>
    
    <figcaption >

   <span className={styles['prev-arrow-box']} onClick={prevClickhandler}>

      <svg className={styles['prev-arrow']} ><path className={styles['prev-arrow-path']} d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </span>

      <span className={styles['next-arrow-box']} onClick={nextClickhandler}>
      <svg className={styles['next-arrow']} ><path className={styles['next-arrow-path']} d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </span>

    </figcaption>

     { loading &&  <Animation /> }

  </figure>

  )
}

export default LightboxImage