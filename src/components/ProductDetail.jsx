import React from 'react'
import {Link,useLocation} from "react-router-dom"

export default function ProductDetail() {
    const location = useLocation()
    const items = location.state.item;
  return (
    <div>
        <Link to='/products' className='back-button'>&#x27F8; <strong>BACK</strong></Link>
        <h1>Product Details</h1>
        <img src={items.img} alt='tshirts' style={{"width":"10%","height":"5%"}}/>
        <h1>{items.title}</h1>
        <h2>${items.price}</h2>
        <p>{items.description}</p>
        <button>ADD TO CART</button>
    </div>
  )
}
