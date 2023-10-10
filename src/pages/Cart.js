import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/Cartslice'
const Cart = () => {
    const dispatch=useDispatch();
    const items=useSelector((state)=>state.cart)
    console.log(items)

    const removeitem=(id)=>{
        dispatch(remove(id))
    }
  return (
    <>
    <div style={{background:"silver",textAlign:"center"}}>Cart</div>
    <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"space-between" }}>
        {items.map((item,index)=>{
            return (
                <div style={{ background: "white", width: "200px",fontSize:"14px",
        boxShadow:"0px 0px 0px black",marginTop:"10px",
         height: "auto",padding:"10px", margin: "10px" }} key={index}>
          <img src={item.image} style={{ width: "100%", height: "150px" }} alt={`Product ${index}`} />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p style={{textAlign:"center",background:"blue",
           color:"white", padding:"2px"}} onClick={()=>removeitem(item.id)}>remove product</p>
        </div>
            )
        })}

    </div>
    </>
  )
}

export default Cart