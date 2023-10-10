import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/Cartslice';

const Product = () => {
    const [Product,setProduct]=useState([]);
    console.log(Product)
    const dispatch=useDispatch();

    useEffect(()=>{
        const fetchproduct=async()=>{
            const res=await fetch("https://fakestoreapi.com/products/");
            const data=await res.json();
            setProduct(data);
        }
        fetchproduct();
    },[])

    const handleadd=(product)=>{
        dispatch(add(product));
    }
  return (
    <div>
  <div style={{ display: "flex", flexWrap: "wrap",background:"gray", justifyContent: "space-around" }}>
    {Product.map((item, index) => {
      return (
        <div style={{ background: "white", width: "200px",fontSize:"14px",
        boxShadow:"0px 0px 0px black",marginTop:"10px",
         height: "auto",padding:"10px", margin: "10px" }} key={index}>
          <img src={item.image} style={{ width: "100%", height: "150px" }} alt={`Product ${index}`} />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p style={{textAlign:"center",background:"blue",
           color:"white", padding:"2px"}} onClick={()=>handleadd(item)}>add product</p>
        </div>
      );
    })}
  </div>
</div>

  )
}

export default Product