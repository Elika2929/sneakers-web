import React, { useContext } from 'react'
import styles from './LightboxThumbnail.module.css'
import { LightboxContext } from '../../Contexts'


const images = [

  './assets/images/image-product-1-thumbnail.jpg',
  './assets/images/image-product-2-thumbnail.jpg',
  './assets/images/image-product-3-thumbnail.jpg',
  './assets/images/image-product-4-thumbnail.jpg'

 ]

 const lightboxImages = images.map(image => image.replace('-thumbnail', ''));



const LightboxThumbnail = ({loading, setLoading}) => {

  const [ showLightbox, setShowLightbox ] = useContext(LightboxContext);

  const clickHandler = (e, index) => {

    if((index + 1) === showLightbox.index) {

      return;

    }
    
    setLoading(true);
    setShowLightbox({value: true, src:`${lightboxImages[index]}`, index: index + 1});
    
  }


   return (

     <section className={styles.section}>
       
      {

      images.map((image, index) => {
      
       return (
        
          <span key={index} className={`${styles.box} ${showLightbox.index === (index + 1) ? styles['current-box'] : ''}`}><img src={image} className={`${styles.img} ${showLightbox.index === (index + 1) ? styles['current-img']: ''}`} alt={`Thumbnail ${index + 1}`} onClick={(e) => clickHandler(e, index)}
      /></span>

      )})
   
      }
       </section>

  

   )


}

export default LightboxThumbnail