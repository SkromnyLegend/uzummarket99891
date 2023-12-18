import React from 'react'
import "./Empty.css"
import { useNavigate } from 'react-router-dom'
function Empty({title,url,desc,btnTitel,nav}) {
    const navigate = useNavigate()
  return (
    <div className='empty'>
        <img src={url} width={150} alt="" />
   <h2>{title}</h2>
   <p>{desc}</p>
   <button onClick={()=>navigate(`${nav}`)}>{btnTitel}</button>
    </div>
  )
}

export default Empty