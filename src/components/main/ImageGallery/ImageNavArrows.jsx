import React, { useContext } from 'react'
import styles from './ImageNavArrows.module.css'
import { ImageNavContext, LoadImageContext } from '../../Contexts'

const ImageNavArrows = () => {

  const [ currentImg, setCurrentImg ] = useContext(ImageNavContext);

  const [ loading, setLoading ] = useContext(LoadImageContext);


  const prevClickhandler = () => {

    setLoading(true);
    setCurrentImg(prevImg => {

        return prevImg === 1 ? 4 : prevImg - 1;
    
    })
    
   }

   const nextClickhandler = () => {

    setLoading(true);
   setCurrentImg(nextImg => {
    
    return nextImg === 4 ? 1 : nextImg + 1;

   })
    

   }

  return (

    <figcaption className={styles.container}>

    <span className={styles['prev-arrow-box']} onClick={prevClickhandler}>
      
      <svg className={styles['prev-arrow']}><path className={styles['arrow-path']} d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3.5" fill="none" fillRule="evenodd"/></svg>
      
      </span>

    <span className={styles['next-arrow-box']} onClick={nextClickhandler}>
      
      <svg className={styles['next-arrow']}><path className={styles['arrow-path']} d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3.5" fill="none" fillRule="evenodd"/></svg>
      
      </span>

  </figcaption>

  )
}

export default ImageNavArrows