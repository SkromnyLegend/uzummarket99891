import React from 'react'
import "./Admin.css"
import Create_Product from "./create-product/Create_Product";
import ManageProduct from "./manage-product/ManageProduct";
import { NavLink, Route, Routes } from "react-router-dom";
function Admin() {
  
  return (
    <div className='admin'>
      <div className="adminsidebar">
        <h2>Admin - Private Route</h2>
        <h3>Authentication</h3>
        <div className="admin__links">
          <NavLink to={"create-product"}>Create Product</NavLink>
        <br />
          <NavLink to={"manage-product"}>Manage Product</NavLink>
        </div>
        <NavLink to={"/"}>

<button>bosh sahifaga</button>
</NavLink>
      </div>
      <div className="admincontent">
        <Routes>
          <Route path='create-product' element={<Create_Product/>}/>
          <Route path='manage-product' element={<ManageProduct/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Admin