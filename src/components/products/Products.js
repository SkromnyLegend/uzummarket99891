import React from 'react';
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {toogleLike} from "../../context/like"
import {incCart} from "../../context/cartSlice"

function Products({ data}) {
  const salom = useSelector(state => state.like.value)
   const dispath = useDispatch()
  return (
    <div className="products__wrapper">
        {
            data?.map((el) => <div key={el.id} className="products__card">
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
                salom?.some(item => item.id === el.id) ? <FaHeart/>  :   <FaRegHeart/>             

              }
     
            
            </div>
            <div onClick={()=> dispath(incCart(el))} className="products__cart">
              <IoCartOutline />
            </div>
          </div>)
        }
    </div>
  );
}

export default Products;
