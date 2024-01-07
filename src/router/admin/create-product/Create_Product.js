import React, {useState} from 'react'
import "../Admin.css"
import {FaCamera} from "react-icons/fa"

const CATEGORY = ["Telefon", "Televizor", "Kompiyuter", ]
function Create_Product() {
const handleProSumbmit = (e)=>{
  e.preventDefault()
  let newPro = {
    select,
    title,
    price: +price,
    url
  }
  console.log(newPro);
}

  const [title, setName] = useState("")
  const [price, setNumber] = useState("")
  const [select, setSelect] = useState("")
  const [url, setUrl] = useState(null)
  
  return (
    <div>
      <div>
        <h2>Create Product</h2>
        <form onSubmit={handleProSumbmit} className='create__product-form'>
          
          <input
           value={title}

          required
           onChange={f => setName(f.target.value) }
          className='create__product-input' type="text" placeholder='title' />
          <input
           value={price}
           required
           onChange={a => setNumber(a.target.value)}
          className='create__product-input' type="number" placeholder='price' />
          <select
          value={select}
          required
          onChange={d=>setSelect(d.target.value) }
          className='create__product-input' name="" id="">
            <option disabled value="">Tanlang</option>
          {
            CATEGORY?.map((el, inx)=>  <option value={el} key={inx}>{el}</option>)
           
          }
          
          </select>
          <div className="create__product-file">
            <FaCamera/>
            <input accept='.png, .jpg, .jpeg, .heic' onChange={(e)=> setUrl(e.target.files)}
            // multiple
            type="file" />
          </div>
          <br />
          <button className='create__product-input'>Create Product</button>
        </form>
    </div>

    </div>
  )
}

export default Create_Product