import React from 'react'
import { contactStyle } from '../style'

const WhatsappContactUs = () => {
  return (
    <div className={contactStyle.boxStyle}>
      <h3 className={contactStyle.heading}> Whatsapp Us on below mentioned numbers</h3>
      <ul className={contactStyle.numberList}>
        <l1>+9122222222</l1> <br/>
        <l1>+9133333333</l1>
      </ul>
    </div>
  )
}

export default WhatsappContactUs
