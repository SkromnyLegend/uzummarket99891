import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Subheader.css"
function SubHeader() {
  const {pathname} = useLocation()

  if(pathname.includes("login")){
    return <></>
  }
  return (
    <div className='sub__header'>
<div className="container">
    <p>Shahar Toshkent Topshiriqlar punkiti</p>
    <p className='sub__header-title'>Buyurtmalar 1 kunda bepul yetkazib beramiz</p>
    <p>Savol-javoblar Buyurtmalar</p>
</div>
    </div>
  )
}

export default SubHeader