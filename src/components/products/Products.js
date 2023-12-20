import React, { useState } from 'react';
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {toogleLike} from "../../context/like"
import {incCart} from "../../context/cartSlice"
import {toast} from "react-toastify"
const AMOUNT = 5
function Products({ data}) {
  const salom = useSelector(state => state.like.value)
   const dispath = useDispatch()
   const [count, setCount] = useState(1)
  return (
    <>
    <div className="products__wrapper">
      
        {
            data?.slice(0 ,count*AMOUNT)?.map((el) => <div key={el.id} className="products__card">
            <Link to={`/product/${el.id}`} className="products__image">
              <img src={el.url} alt="" />
            </Link>
            <div className="products__body">
              <p className="products__title">{el.title}</p>
              <div style={{flex: 1}}>
                <span className="products__monthly">
                    {(el.price * 1.5 / 12)?.brm()} so'm/oyiga
                </span>
              </div>
              <del>{(el.price * 1.2)?.brm()} so'm</del>
              <p className="products__price">{el.price?.brm()} so'm</p>
            </div>
            <div onClick={()=> dispath(toogleLike(el))} className="products__wishes" >
              {
                salom?.some(item => item.id === el.id) ? <FaHeart/>  :   <FaRegHeart className='oo'/>             

              }
     
            
            </div>
            <div onClick={()=> 
              {
                toast.success("Savatga qo'shildi")
                dispath(incCart(el))}} className="products__cart">
              <IoCartOutline />
            </div>
          </div>)
        }
    </div>
    {
      data.length > count*AMOUNT ?
<button onClick={()=>setCount(p => p+1)}>Yana Ko'proq Ko'rish</button>
: <></>
    }
    
    
    </>
  );
}

export default Products;
