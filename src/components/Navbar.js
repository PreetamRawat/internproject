import React from 'react'
import  { NavLink   } from 'react-router-dom'
import '../App.css'



const Navbar = () => {
    return (
        <>
        <nav>
          <div className='navLogo'>
            <h1>LOGO</h1>
          </div>   
          <div className='navLinks'>
          <NavLink to='/'> Home</NavLink> 
          <NavLink to='/about'> About Us</NavLink> 
          <NavLink to='/services'> Services</NavLink> 
          <NavLink to='/products'> Products</NavLink> 
          <NavLink to='portfolio'> Portfolio</NavLink> 
          </div>
          <div className='navContact'>
              <button>Contact US</button>
          </div>
        </nav>    
        </>
    )
}

export default Navbar
