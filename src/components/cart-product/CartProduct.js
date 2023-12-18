import React, {useState} from 'react'
import "./Card1122.css"
import { FaTrash } from "react-icons/fa";
import { incCart } from '../../context/cartSlice';
import { decCart } from '../../context/cartSlice';
import { removeCart } from '../../context/cartSlice';
import { useDispatch } from 'react-redux';
function CartProduct({data}) {
  
  const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [location, setLocation] = useState("")
    const [massage, setmassage] = useState("")
    const BOT_TOKEN = "6576377797:AAGlx8eF-6eqTyfnzgR1DbC2I3eQi-qDJ2M"
    const CHAT_ID = "-1002085994418"
    const PERSONAL_ID = "1987920176"
    // https://api.telegram.org/bot6576377797:AAGlx8eF-6eqTyfnzgR1DbC2I3eQi-qDJ2M/getUpdates
    
const handleSubmit = (e)=>{
  e.preventDefault()
  let order = "Buyuritma: %0A%0A "
  order += `ism: ${name} %0A%0A`
  order += `Raqam: ${number} %0A%0A`
  order += `Manzil: ${location} %0A%0A`
  order += `Habar: ${massage} %0A`
  data.map((el)=>{
    order += `<b>nomi</b> ${el.title}%0A%0A`
    order += `<b>miqdori</b> ${el.quantity}%0A%0A`
    order += `<b>Narx</b> ${el.price?.brm()}so'm %0A%0A`
    order +=`<b>Jami</b> ${data.reduce((a,b)=>a+b.price*b.quantity, 0).brm()} so'm`
  })
  
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${order}&parse_mode=html`
  let api = new XMLHttpRequest()
  api.open("GET", url, true)
  api.send()
}

  return (
    <div className='card__wrapper'>
        <div className="card-prod">
            {
                data?.map(el=><div key={el.id} className='cart__item'>
                     <div className='cart_item_left'>
                    <img src={el.url} width={80} alt="" />
                    <div>

                      <h4>{el.title}</h4>
                      <p>Ktegoriya: {el.category}</p>

                        </div> 
                        </div>
                            <div className="cart_item_right">
                            <div className="cart__counter">
                                <button disabled={el.quantity <= 1} onClick={()=> dispatch(decCart(el))}>-</button>
                                <span>{el.quantity}</span>
                                <button onClick={()=> dispatch(incCart(el))}>+</button>
                            </div>
                            <div>
                                <button onClick={()=> dispatch(removeCart(el))} className='card__trash'> <FaTrash/> </button>
                                <h3>{el.price?.brm()} so'm</h3>
                                <p>{(el.price * el.quantity)?.brm()} so'm</p>
                              
                            </div>

                     </div>
                </div>)
             
            }
        </div>
        <div className="card__regis">
          <h2>Maxsulotlar</h2>
          <b className='ola'>Jami : {data.reduce((a,b)=>a+b.price*b.quantity, 0).brm()} so'm</b>
          <form onSubmit={handleSubmit} action="">

            <input 
            value={name}
            onChange={(e) => setName(e.target.value) }
             type="text" placeholder=' Toliq ismngiz kiriting ' />
            <input 
          value={number}
          onChange={(a) => setNumber(a.target.value)}
             type="number" placeholder=' +998 00-000-00-00 ' />
            <input  
            value={location}
            onChange={(b) => setLocation(b.target.value)}
           
             type="text" placeholder=' Manzilingiz ' />
            <input 
            value={massage}
            onChange={(g) => setmassage(g.target.value)}
           
             type="text" placeholder=' Habar yuborish ' />
             <button className='inp__btn'>Rasmiylashtirishga o'tish</button>
          </form>
             
             
        </div>
    </div>
  )
}

export default CartProduct