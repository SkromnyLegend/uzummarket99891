import React from 'react'
import Empty from '../../components/emty/Empty'
import CartProduct from '../../components/cart-product/CartProduct'
import { useSelector } from 'react-redux'
import lola  from "../../assets/shopocat.490a4a1.png"

function Cart() {
  const cart = useSelector(s => s.cart.value)
  return (
    <div className='container'>
 
     {
      !cart.length ?

      <Empty
       url={lola}
       title="Savatda hozircha mahsulot yoʻq"
       desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
       btnTitel="Bosh sahifa"
       nav="/"
      /> :
      <CartProduct data={cart}/>
     }
      
    </div>
  )
}

export default Cart