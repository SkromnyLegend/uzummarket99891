import React, {useState,useEffect} from 'react'
import "./Navbar.css"
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
function Navbar({data}) {
  const [value, setValue ] = useState("")
  const [searchDta, setSearchData] = useState([])
  
   useEffect(()=>{
    if(value.trim()){
      let filterData = data.filter(el => el.title.toLowerCase().includes(value.toLocaleLowerCase().trim()))
      setSearchData (filterData)

    }else{
      setSearchData([])
    }
    }, [value])
  return (
    <div className='container'>
<div className="navbar">
  <h2 className='nav__logo'>
    <NavLink to={"/"}>uzum market</NavLink>
  </h2>
  <button className='nav__category'>
    <span>Katalog</span>
    <IoIosMenu/>

  </button>
  <div className="nav__search">
    <input
     value={value} 
     onChange={(e)=> setValue(e.target.value)}
    type="text" placeholder='Qidirish...' />
  <button>
    <IoSearchOutline/>
  </button>
  {
    value.trim() &&  <div className="nav_search_dro">
      <p>Natija: {searchDta.length} ta</p>
{
  searchDta?.slice(0,5) .map((el)=><div key={el.id} className='nav__item_search'>
     <img src={el.url} width={100}  alt="" />
     <div>
      <p>{el.title}</p>
      <b style={{color: "red"}}>{el.price?.brm()}so'm</b>
     </div>
     
      </div>)
}
{

  
  !searchDta.length && <div className='nav_search_notfound'>
    <img width={150} src="https://uzum.uz/static/img/penguin.a739ac8.png" alt="" />
    <p>Mahsulot Topilmadi !</p>
  </div>
}
  
    </div> 
  }
  </div>
<ul className='nav__colection'>
<li className='nav__item nav__home'>
  <NavLink to={"/"}> 
  <IoHomeOutline/>
  <span>Asosiy Sahifa</span>
  </NavLink>
</li>
<li className='nav__item'>
  <NavLink to={"/login"}> 
  <FaRegUser/>
  <span>Kirish</span>
  </NavLink>
</li>
<li className='nav__item'>
  <NavLink to={"/wishes"}>
    <IoMdHeartEmpty/>
<span>Sevimlilar</span>
  </NavLink>
</li>
<li className='nav__item'>
  <NavLink to={"/cart"}>
    <BsCart2/>
<span>Savat</span>
  </NavLink>
</li>

</ul>
</div>
    </div>
  )
}

export default Navbar