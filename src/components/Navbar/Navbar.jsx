import React, { useState } from 'react'
import './Navbar.css'
import { images } from '../../assets/assets'

const Navbar = () => {
    const [product, setProduct] = useState('home')
  return (
    <div className='navbar'>
        <img src={images.logo} alt="" className='logo'/>
        <ul className="navbar-product">
            <li onClick={() => setProduct('home')} className={product === 'home' ? 'active': ''}>Home</li>
            <li onClick={() => setProduct('product')} className={product === 'product' ? 'active': ''}>Product</li>
            <li onClick={() => setProduct('contact-us')} className={product === 'contact-us' ? 'active': ''}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={images.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={images.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>SIGN IN</button>
        </div>
    </div>
  )
}

export default Navbar
