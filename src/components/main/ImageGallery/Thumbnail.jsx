import React, { useContext } from 'react'
import styles from './Thumbnail.module.css'
import { ImageNavContext, LoadImageContext } from '../../Contexts';


const images = [

  './assets/images/image-product-1-thumbnail.jpg',
  './assets/images/image-product-2-thumbnail.jpg',
  './assets/images/image-product-3-thumbnail.jpg',
  './assets/images/image-product-4-thumbnail.jpg'

 ]

 
const Thumbnail = () => {

  
  const [ currentImg, setCurrentImg ] = useContext(ImageNavContext);

  const [ loading, setLoading ] = useContext(LoadImageContext);

  const clickHandler = (e, index) => {

    if((index + 1) === currentImg) {

      return;

    }

    setLoading(true);
    setCurrentImg(index + 1);

  }

  return (
    <div className={styles.imageBox}>
      
      {

        images.map((image, index) => {   
        
       return (

       <span key={index} className={`${styles.box} ${currentImg === (index + 1) ? styles.currentBox : ''}`}><img  src={image} onClick={() => clickHandler(null, index)} className={`${styles.img} ${currentImg === (index + 1) ? styles.currentImg : ''}`} alt={`Thumbnail ${index + 1}`} /></span>
       
       )
        })

        }
      
      </div>
  )
}

export default Thumbnail;