import React from 'react'
import { offerPage } from '../assets'

const Offers = () => {
  return (
    <div className='bg-yellow-400 p-4'>
      <img src = {offerPage} alt="offer" className='w-[1500px] h-[1000px] ml-8 card--shadow-dark rounded-2xl'/>
    </div>
  )
}

export default Offers