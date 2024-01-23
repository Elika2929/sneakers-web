import React, { useContext, useState } from 'react'
import styles from './Quantity.module.css'
import { ItemCountContext } from '../../Contexts'

const Quantity = () => {

const [ itemCount, setItemCount ] = useContext(ItemCountContext);

  const incrementCount = () => {

    setItemCount(prevCount => prevCount >= 1000 ? 1000 : prevCount + 1)

  }

  const decrementCount = () => {

    setItemCount(prevCount => prevCount <= 0 ? 0 : prevCount - 1)

  }

  return (

    <div className={styles['quantity-div']}>
      

      <span className={styles['minus-icon-box']} onClick={decrementCount}>
      <svg className={styles.minus} ><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/><use fill="#FF7E1B" fillRule="nonzero"/></svg>
      </span>

        <span className={styles.quantity}>{itemCount}</span>

        <span className={styles['plus-icon-box']} onClick={incrementCount}>
        <svg  className={styles.plus}  ><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/><use fill="#FF7E1B" fillRule="nonzero" /></svg>
        </span>


    </div>

  )
}

export default Quantity