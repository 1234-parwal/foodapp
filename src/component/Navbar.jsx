import React from 'react'
import style from '../style.js'
import logo from '../assets/logo.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


const Navbar = () => {
  return (  
    <nav className="p-10 bg-black flex flex-row">
    <img src = {logo} className = "w-[80px] h-[80px]" alt = "logo"/>
    <ul className='flex-row items-center justify-end sm:flex hidden flex-1'>
      {/* {navLinks.map((nav,index) => (
        <li key = {nav.id} className = "font-normal text-[20px] cursor-pointer text-white pl-6">{nav.title}
        <Link to="/about">About Us</Link>
        </li>
      ))} */}
      <li className={style.navbarList}>
      <Link to="/" children = "home"> Home</Link>
      </li>
      <li className={style.navbarList}>
      <Link to="/menu" children = "menu"> Menu</Link>
      </li>
      <li className={style.navbarList}>
      <Link to="/offers" children = "offers"> Offers</Link>
      </li>
      <li className={style.navbarList}>
      <Link to="/testimonials" children = "testimonials"> Testimonials</Link>
      </li>
      <li className={style.navbarList}>
      <Link to="/contactUs" children = "contactUs"> Contact Us</Link>
      </li>
      {/* <li className={style.navbarList}>
      <Link to="/cart" children = "cart"> Cart</Link>
      </li> */}
    </ul>
  </nav>
  
  
  
  
    
  )
}

export default Navbar;