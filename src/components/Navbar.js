import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const items=useSelector((state)=>state.cart)
  return (
    <div>
        <div style={{display:"flex"}}>
           <div style={{width:"10%"}}><Link to="/" >Home </Link></div>
            <div style={{width:"10%"}}><Link to="/cart" >cart</Link></div>
            <div style={{width:"10%"}}>item-count:{items.length}</div>
        </div>
    </div>
  )
}

export default Navbar