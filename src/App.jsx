import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import styles from './App.module.css'
import { CartContext, CartItemContext, ItemCountContext, SideNavContext  } from './components/Contexts';
import { CustomerReview } from './components/main/customer-reviews-components/CustomerReviews'
import { AddReview }  from './components/main/customer-reviews-components/AddReview'
import { product } from './components/main/data'


function App() {
  
const [ showCart, setShowCart ] = useState(false);

const [ cartItemCount, setCartItemCount ] = useState(0);

const [ itemCount, setItemCount ] = useState(0);

const [ showSidenav, setShowSideNav ] = useState(false);

const [addReview, setAddReview] = useState(false)
const [userData, setUserData] = useState(product.reviews)
const [editForm, setEditForm] = useState(false)
const [editUser, setEditUser] = useState({
  headline: '',
  writtenReview: '',
  starRating: null
})

// const setAddReview = useState(false); 


  return (

   <div className={showCart ? styles.div : ''}>
 
    <CartContext.Provider value={[showCart, setShowCart]}>
    <CartItemContext.Provider value={[cartItemCount, setCartItemCount]}>

      <ItemCountContext.Provider value={[itemCount, setItemCount]}>

    <SideNavContext.Provider value={[showSidenav, setShowSideNav]}>

    <Header />

    <Main />

    <AddReview
  setAddReview={setAddReview} 
  setUserData={setUserData} 
  userData={userData}
  editUser={editUser}
  editForm={editForm}
  setEditForm={setEditForm}
  setEditUser={setEditUser}
/>


    <CustomerReview
   setAddReview={setAddReview} 
   userData={userData} 
   setUserData={setUserData}
   setEditUser={setEditUser}
   editUser={editUser}
   setEditForm={setEditForm}
    /> 

    </SideNavContext.Provider>
    </ItemCountContext.Provider>
 </CartItemContext.Provider>
 </CartContext.Provider>
    </div>



  )
}


export default App