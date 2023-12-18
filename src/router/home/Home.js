import React from 'react'
import Corusel from '../../components/corusel/Corusel'
import Products from '../../components/products/Products'

function Home({data}) {
 
  return (
    <div className='container'>
      <Corusel/>
      <Products data={data}/>
    </div>
  )
}

export default Home