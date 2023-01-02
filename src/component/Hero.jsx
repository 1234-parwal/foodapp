import React from 'react'
import style from '../style'
import wallpaper from '../assets/wallpaper.png'
import Button from './Button'

function Hero () {
  return (
    <div className='relative overflow-hidden h-[800px]'>
      <img src={wallpaper} className = "w-full h-[800px]"/>
      <h1 className='absolute left-24 top-16 font-medium text-gray-50 text-[100px]'> Are you hungry?</h1>
      <p className={`${style.paragraph} left-24 top-52`}>Don't wait!!!</p>
      <p className={`${style.paragraph} left-24 top-64`}>Let's start to order food now!</p>
      <div className='absolute left-24 top-96'><Button/></div>
      
    </div>
  )
}

export default Hero