import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='container'>
      <div className="login">
        <div className="inner__inner">
          <div className="loginn">

          </div>
          <br />
          <h2 className='gg'>Telefon raqamini kiriting</h2>
          <br />
          <p className='p'>Tasdiqlash kodini SMS orqali yuboramiz</p>
          <br />
          <input className='inp__loginn' type="number" placeholder='+998 00 000-00-00' />
          <button className='hoja'>Kodni olish</button>
          
        <Link to={"/"}><button className='homr__btn'>Bosh Sahifaga</button></Link> 
        </div>
        </div> 

    </div>
  )
}

export default Login