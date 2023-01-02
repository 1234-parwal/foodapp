import React from 'react'
import { businessLinks } from '../constants'
import style from '../style'


const Business = () => {
  return (
    <div className='bg-black font-poppins'>
      <ul className='flex md:flex-row flex-col'>
      {
        businessLinks.map((business,index) => (
          <div className='p-8'>
          <li className='font-semibold text-[40px] text-center text-rose-700 p-2 italic'>{business.type}
          <img src = {business.image} alt = "cuisinetype" className='lg:w-[470px] lg:h-[470px]  w-[200px] h-[200px] rounded-full p-4'/>
          <p className={style.businessParagraph}>{business.content}</p>
          </li>
          </div>
        ))
      }
      </ul>
    </div>
  )
}

export default Business;