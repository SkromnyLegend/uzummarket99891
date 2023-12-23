import React from 'react'
import {useSelector} from "react-redux"
import Empty from '../../components/emty/Empty'
import Products from '../../components/products/Products'
import sal from "../../assets/hearts.cf414be.png"


function Wishes() {
  const likes = useSelector(state=>state.like.value)
  return (
    <div className='container'>
      {
        !likes.length ?

        <Empty
         url={sal}
        title="Sizga yoqqanini qo'shing"
        desc="Mahsulotdagi belgisini bosing. akauntingizni kiriting va barcha saralanganlar saqlanib qoladi"
        btnTitel="Akkountga kirish"
        nav="/login"
        /> : <Products data={likes}/>
      }
  
 


     
  
    </div>
   
  )
}

export default Wishes