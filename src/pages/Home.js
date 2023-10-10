import React from 'react'
import Product from '../components/Product'

const Home = () => {
  return (
    <div>
      <h1 style={{marginTop:"20px",textAlign:"center"}}>
         Welcome to the Redux Toolkit Project
         <section>
          <h2 style={{textAlign:"center",fontSize:"20px"}}>Products</h2>
          <Product/>
         </section>
      </h1>
    </div>
  )
}

export default Home