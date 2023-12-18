import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Notdef from '../notdifend/Notdef'
import "./Single-route.css"
import { incCart } from '../../context/cartSlice'
import { IoCartOutline } from 'react-icons/io5'
import Products from '../../components/products/Products'
function SingleRoute({data}) {
    const params = useParams()
    const dispath = useDispatch()
    const oneItem = data.find((el)=> el.id === params.id)

    useEffect(()=> {
        window.scrollTo(0,0)
    })

    if(!oneItem){
        return <Notdef/>
    }
  return (
    <>
    <div className='container single__route'>
      <img className='route__img' width={300} src={oneItem.url} alt="" />
      <div className="single__route2">
      <h2 className='single__h2'>{oneItem.title}</h2>
      <h1 className='h1111'>{oneItem.price?.brm()} so'm</h1>
      <br />
      <br /> 
      <p className='lorem'>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque fugiat, tenetur quasi maxime ea nesciunt sint voluptatem sequi itaque veritatis?</p>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div className="  yangi">
      <h2 >Yangi Mahsulotlar</h2>
      <Products data={data.slice(0,5)}/>
    </div>
    </>
  )
}

export default SingleRoute