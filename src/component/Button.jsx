import React from 'react'
import {
  Link
} from 'react-router-dom';


function Button () {
  return (
    <button type = "button" className='py-6 px-6 font-medium text-[24px] rounded-[2px] text-gray-50 outline outline-offset-1 outline-2 uppercase'>
    <Link to="/menu" children = "menu">Checkout Menu</Link>
    </button>
  )
}

export default Button