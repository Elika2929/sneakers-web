import React, { useState } from 'react'
import styles from './ImageDetails.module.css'
import Quantity from './Quantity'
import Price from './Price'
import Button from '../Button/Button'

const ImageDetails = () => {

  const [ itemCount, setItemCount ] = useState(0);

  return (

    <aside className={styles.aside}> 

    <h1 className={styles.head}>sneaker company</h1>

    <h3 className={styles.subHead}>Fall Limited Edition Sneakers</h3>

    <p className={styles.paragraph}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

   <Price />

   <div className={styles['quantity-container']}>

    <Quantity  />

    <Button  text='Add to cart' type='cart' />

    </div>

    </aside>

  )
}

export default ImageDetails