import React from 'react'
import "./Admin.css"
import Create_Product from "./create-product/Create_Product";
import ManageProduct from "./manage-product/ManageProduct";
import { NavLink, Route, Routes } from "react-router-dom";
function Admin() {
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <h2>Admin - Private Route</h2>
        <h3>Authentication</h3>
        <div className="admin__links">
          <NavLink to={"create-product"}>Create Product</NavLink>
          <br />
          <br />
          <NavLink to={"manage-product"}>Manage Product</NavLink>
        </div>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path='create-product' element={<Create_Product/>}/>
          <Route path='manage-product' element={<ManageProduct/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Admin