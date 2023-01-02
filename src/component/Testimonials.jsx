import React from 'react'
import { reviews } from '../constants'
import style from '../style'

function Testimonials() {
  return (
    <div className='p-10'>
      <div className='card--shadow-dark px-5 py-10'>
       <ul className="list-disc"> {reviews.map((review => (<l1><p>{review.name} says</p></l1>)))}
        
        </ul>
        
      </div>
    </div>
  )
}
export default Testimonials
