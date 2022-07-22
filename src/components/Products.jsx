import React from 'react'
import axios from 'axios'
import { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import './Products.css'
import { ImageList } from '@mui/material'
import {Button} from '@mui/material'
export default function Products({props}) {
    const [data,SetData] = useState([])
    useEffect(()=>{
        axios.get("./sample.json").then((res)=>{
            console.log(res.data)
            SetData(res.data.data)
        })
        .catch((err)=>{console.log(err)})
    })
         
  return (
    <ImageList className='products-container' cols={3}>
        {
            
            data.map((item,i)=>{
                return(
                    <div key={i} className="product">
                        
                        <Link state={{item}} to={`/products/${item.id}`} className="product-item" >
                             <img src={item.img} alt="shirt"/>
                            <p>{item.title}</p>
                            <Button variant='contained' className='shop'>SHOP</Button>
                        </Link>

                    </div>
                )
            })
        }
       </ImageList>
  )
}
