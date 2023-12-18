import React from 'react'
import "./Login.css"
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='container'>
      <div className="login">
        <div className="inner__inner">
          <div className="loginn">

      <Link to={"/"}><IoMdClose className='login__x' /></Link>  
          </div>
          <br />
          <h2 className='gg'>Telefon raqamini kiriting</h2>
          <br />
          <p className='p'>Tasdiqlash kodini SMS orqali yuboramiz</p>
          <br />
          <input className='inp__loginn' type="text" placeholder='+998 00 000-00-00' />
          <button className='hoja'>Kodni olish</button>
          <br /><br /><br /><br /><br /><br />
          <br />
          <pre className='pre'>          Avtotizatsiyadan o'tish orqali siz shaxsiy <br />      ma'lumotlarni qayta ishlash siyosatiga rozilik
            <br />                                 bildirasiz</pre>
        </div>
        </div> 

    </div>
  )
}

export default Login