import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Button from '@mui/material/Button';



export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='menu'>
      
      </div>
      
      
      <Link to='/' className='home'> <Button variant="contained">Home</Button></Link>
      <Link to='/products' className='products'><Button variant="contained">PRODUCTS</Button></Link>
      <Link to='/aboutus' className='products'><Button variant="contained">About Us</Button></Link>
      <Link to='/contactus' className='products'><Button variant="contained">Contact Us</Button></Link>
      
      <Link to = '/signin' className='signin'><Button variant="contained">Login</Button></Link>
      <Link to = '/signup' className='signup'><Button variant="contained">Register</Button></Link>
      
     
      
        
    </div>

  )
}
